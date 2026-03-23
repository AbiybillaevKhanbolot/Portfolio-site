/**
 * Vercel serverless endpoint for Telegram notifications.
 * Receives JSON: { name, email, message }
 * Sends message to Telegram via Bot API.
 */

const TELEGRAM_CONFIG = {
    botToken: '8556293428:AAGYagIaCyJLntIUe63YGXYaU1wqx33fNwQ',
    chatId: '5851162814'
};

function escapeHtml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

module.exports = async (req, res) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ ok: false, error: 'Method not allowed' });
        }

        // Some Vercel setups may not pre-parse JSON body for plain serverless functions.
        let body = req.body;
        if (!body || typeof body !== 'object') {
            const raw = await new Promise((resolve, reject) => {
                let data = '';
                req.on('data', chunk => { data += chunk; });
                req.on('end', () => resolve(data));
                req.on('error', reject);
            });
            try {
                body = raw ? JSON.parse(raw) : {};
            } catch {
                body = {};
            }
        }

        const name = (body.name || '').trim();
        const email = (body.email || '').trim();
        const message = (body.message || '').trim();

        if (!name || !email || !message) {
            return res.status(400).json({ ok: false, error: 'Missing fields' });
        }

        // Minimal email validation (front-end also validates)
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({ ok: false, error: 'Invalid email' });
        }

        if (!TELEGRAM_CONFIG.botToken || !TELEGRAM_CONFIG.chatId) {
            return res.status(500).json({ ok: false, error: 'Telegram config is missing' });
        }

        const telegramMessage =
            `📧 <b>Новое сообщение с сайта</b>\n\n` +
            `👤 <b>Имя:</b> ${escapeHtml(name)}\n` +
            `📮 <b>Email:</b> ${escapeHtml(email)}\n` +
            `💬 <b>Сообщение:</b>\n${escapeHtml(message)}`;

        const response = await fetch(
            `https://api.telegram.org/bot${TELEGRAM_CONFIG.botToken}/sendMessage`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CONFIG.chatId,
                    text: telegramMessage,
                    parse_mode: 'HTML'
                })
            }
        );

        const result = await response.json().catch(() => ({}));

        if (response.ok && result && result.ok) {
            return res.status(200).json({ ok: true });
        }

        const description = result && result.description ? result.description : 'Telegram API error';
        return res.status(500).json({ ok: false, error: description });
    } catch (err) {
        const message = err && err.message ? err.message : 'Unknown server error';
        return res.status(500).json({ ok: false, error: message });
    }
};

