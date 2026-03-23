// Data
const projectsData = [
    {
        title: "UI/UX",
        description: "Проект «Ночь-Ёхора», 2025, Разработал полный фирменный стиль (логотип, брендбук, айдентика, афиши, мерч) для фестиваля бурятского танца в Улан-Удэ",
        tech: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
        date: "14.08.2024",
        image: "images/Tumar.png",
        liveUrl: "https://tumar-ai02.vercel.app/",
        pdfUrl: "documents/yohar.pdf",
        codeUrl: "https://github.com/AbiybillaevKhanbolot",
        gradient: "from-[#E85002] to-[#C10801]"
    },
    {
        title: "ИС мероприятия",
        description: "Разработал и внедрил ИС для ресторана «Жетиген», автоматизирующую организацию мероприятий.",
        tech: ["Access", "MySQL", "ERwin", "ERwin Data Modeller"],
        date: "22.09.2024",
        image: "images/avia.png",
        liveUrl: "https://abiybillaevkhanbolot.github.io/avia-profile/",
        pdfUrl: "documents/isit.pdf",
        codeUrl: "https://github.com/AbiybillaevKhanbolot",
        gradient: "from-[#F16001] to-[#E85002]"
    },
    {
        title: "Silva",
        description: "Спроектировал и разработал веб-платформу для бронирования загородного жилья с клиент-серверной архитектурой (Next.js, Node.js, PostgreSQL) и программой лояльности «Виртуальный сад». Автоматизировал DevOps-процессы (CI/CD, Docker), сократив время обновлений на 70% и повысив стабильность платформы.",
        tech: ["React", "Versel","JavaScript"],
        date: "10.10.2024",
        image: "images/focusPod.png",
        liveUrl: "#",
        codeUrl: "https://github.com/AbiybillaevKhanbolot",
        gradient: "from-[#E85002] to-[#F16001]"
    },
    {
        title: "EstateAI CIS",
        description: "Создан многостраничный дашборд для анализа рынка недвижимости СНГ, карьерного планирования, SWOT-анализа и бренд-аудита с интерактивными графиками.",
        tech: ["React Native", "MongoDB", "Express", "Chart.js"],
        date: "05.11.2024",
        image: "images/ned.png",
        liveUrl: "https://abiybillaevkhanbolot.github.io/dashboard-Nedvig/",
        codeUrl: "https://github.com/AbiybillaevKhanbolot",
        gradient: "from-[#C10801] to-[#E85002]"
    },
    {
        title: "Real Estate Portal",
        description: "Минималистичный дашборд для отслеживания курсов валют ЦБ РФ в реальном времени с графиками и конвертером.",
        tech: ["JavaScript", "HTML5", "CSS", "Versel"],
        date: "18.12.2024",
        image: "images/valuta.png",
        liveUrl: "https://abiybillaevkhanbolot.github.io/dashboard/",
        codeUrl: "https://github.com/AbiybillaevKhanbolot",
        gradient: "from-[#F16001] to-[#C10801]"
    },
    {
        title: "Stick Hero",
        description: "Создан веб-аналог популярной аркадной игры «Stick Hero» с механикой роста палки и перехода между платформами.",
        tech: ["HTML5", "CSS3", "Vanilla JavaScript (ES6+)", "HTML5 Canvas"],
        date: "15.01.2025",
        image: "images/stick-hero.png",
        liveUrl: "https://abiybillaevkhanbolot.github.io/Stick-Hero-Game/",
        codeUrl: "https://github.com/AbiybillaevKhanbolot",
        gradient: "from-[#E85002] to-[#F16001]"
    },
    {
        title: "Tumar.Ai",
        description: "Создан Tumar.Ai — умный ИИ, который понимает изображения, видео и документы, умеет извлекать из них текст, таблицы, графики и отвечать на вопросы по визуальному контенту.",
        tech: ["HTML5", "JavaScript", "Supabase", "Openrouter", "Vercel"],
        date: "20.02.2025",
        image: "images/Tumar.png",
        liveUrl: "https://tumar-ai02.vercel.app/",
        codeUrl: "https://github.com/AbiybillaevKhanbolot",
        gradient: "from-[#E85002] to-[#C10801]"
    },
    {
        title: "Сайт - портфолио",
        description: "Разработан сайт-портфолио для агента по бронированию авиабилетов",
        tech: ["HTML5", "JavaScript", "CSS", "Supabase", "Vercel"],
        date: "08.03.2025",
        image: "images/avia.png",
        liveUrl: "https://abiybillaevkhanbolot.github.io/avia-profile/",
        codeUrl: "https://github.com/AbiybillaevKhanbolot",
        gradient: "from-[#F16001] to-[#E85002]"
    },
    {
        title: "FocusPod",
        description: "Веб-приложение для быстрого бронирования приватных помещений под работу или встречи через интуитивный календарь.",
        tech: ["React", "Vercel", "codePen", "JavaScript"],
        date: "12.04.2025",
        image: "images/focus.png",
        liveUrl: "https://abiybillaevkhanbolot.github.io/FocusPod/",
        codeUrl: "https://github.com/AbiybillaevKhanbolot",
        gradient: "from-[#E85002] to-[#F16001]"
    },
    {
        title: "We are sysadmins",
        description: "Лендинг и личный кабинет для команды «We are sysadmins»: реализованы аутентификация и работа с профилями, формирование заявок и административное управление статусами. Проект выполнялся совместно с командой из трёх разработчиков, полностью соответствовал требованиям заказчика и достиг 97% успешности. Бэкенд реализован на Supabase (Auth, профили, заявки, роли и политики доступа).",
        tech: ["HTML", "CSS", "JavaScript", "Supabase", "Admin panel"],
        date: "01.03.2025",
        image: "images/sys.png",
        liveUrl: "https://4-md-15-soprano-team.github.io/bilet_5/",
        codeUrl: "https://github.com/4-MD-15-Soprano-team/bilet_5",
        gradient: "from-[#F16001] to-[#C10801]"
    }
];

// Страницы детального описания проекта («Подробнее»)
const projectDetailPages = {
    "Tumar.Ai": "project-tumar-ai.html",
    "Сайт - портфолио": "project-portfolio.html",
    "FocusPod": "project-focuspod.html",
    "EstateAI CIS": "project-estateai.html",
    "Real Estate Portal": "project-realestate.html",
    "ИС мероприятия": "project-is-meropriyatiya.html",
    "Улан-Удэ": "project-ulan-ude.html",
    "We are sysadmins": "project-bilet-5.html"
};

// Расширенные описания проектов для модального окна
const projectDetails = {
    "UI/UX": "Проект «Ночь-Ёхора» — разработка полного фирменного стиля фестиваля бурятского танца в Улан-Удэ. Включает логотип, айдентику, брендбук, афиши и мерч, оформленные в единой визуальной концепции.",
    "EstateAI CIS": "EstateAI CIS — аналитический дашборд для исследования рынка недвижимости стран СНГ. Предоставляет модули для анализа рынка, карьерного планирования, SWOT-анализа и бренд-аудита, а также интерактивные графики для сравнения показателей.",
    "Real Estate Portal": "Real Estate Portal — минималистичный дашборд для отслеживания курсов валют ЦБ РФ в реальном времени. Позволяет просматривать динамику курсов и быстро конвертировать суммы между валютами в одном интерфейсе.",
    "Tumar.Ai": "Tumar.Ai — веб-приложение с интеллектуальным помощником, который понимает изображения, видео и документы. Пользователь загружает файл и может задавать вопросы в свободной форме, получая ответы, основанные на анализе визуального контента.",
    "Сайт - портфолио": "Персональный сайт-портфолио для агента по бронированию авиабилетов. Содержит главную страницу с преимуществами, блок об экспертизе и опытe, а также контактную страницу для заявок на подбор и оформление перелётов.",
    "FocusPod": "FocusPod — веб-сервис для бронирования приватных помещений под работу и встречи. Пользователь видит доступные слоты в календаре, выбирает помещение и время, получает подтверждение бронирования без лишних согласований.",
    "ИС мероприятия": "Информационная система для ресторана «Жетиген», автоматизирующая процесс организации мероприятий: от приёма заявок до формирования отчетности. Упорядочивает бронирование, планирование и учет.",
    "Silva": "Silva — платформа для бронирования загородного жилья с программой лояльности «Виртуальный сад». Ориентирована на владельцев малых отелей и коттеджей и помогает организовать онлайн-продажи и коммуникацию с клиентами."
};

const certificatesData = [
    {
        title: "DevOps: Введение в практики и инструменты",
        description: "Основы DevOps-культуры, CI/CD, автоматизация инфраструктуры",
        image: "sertificat/1cardon.png",
        pdfUrl: "sertificat/hello_Dev_sertificat.pdf"
    },
    {
        title: "Stepik",
        description: "Контейнеры, Docker, оркестрация и деплой приложений",
        image: "sertificat/2cardon.png",
        pdfUrl: "sertificat/linux_sertificat.pdf"
    },
    {
        title: "Stepik",
        description: "Курс Stepik и Bioinformatics Institute, автоматизация сборки и развёртывания",
        image: "sertificat/CI:CD.png",
        pdfUrl: "sertificat/CI:CD.png"
    },
    {
        title: "Stepik",
        description: "Курс Stepik и Bioinformatics Institute, оркестрация контейнеров",
        image: "sertificat/Kubernetes.png",
        pdfUrl: "sertificat/Kubernetes.png"
    }
];

const skillsData = [
    {
        category: "Контейнеризация и оркестрация",
        skills: [
            { name: "Docker", level: 95 },
            { name: "Kubernetes", level: 90 },
            { name: "Docker Compose", level: 92 },
            { name: "Helm", level: 85 }
        ]
    },
    {
        category: "IaC и автоматизация",
        skills: [
            { name: "Terraform", level: 88 },
            { name: "Ansible", level: 85 },
            { name: "CloudFormation", level: 80 },
            { name: "Python / Bash", level: 90 }
        ]
    },
    {
        category: "Облачные платформы",
        skills: [
            { name: "AWS", level: 87 },
            { name: "Azure", level: 82 },
            { name: "GCP", level: 78 },
            { name: "Yandex Cloud", level: 85 }
        ]
    },
    {
        category: "CI/CD и мониторинг",
        skills: [
            { name: "GitLab CI/CD", level: 94 },
            { name: "Jenkins", level: 86 },
            { name: "GitHub Actions", level: 88 },
            { name: "Prometheus / Grafana", level: 90 }
        ]
    }
];

// DOM Elements
const navigation = document.getElementById('navigation');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const toast = document.getElementById('toast');
const projectsGrid = document.querySelector('.projects-grid');
const certificatesGrid = document.querySelector('.certificates-grid');
const skillsGrid = document.querySelector('.skills-grid');
const particlesContainer = document.getElementById('particles');
const heroCanvasContainer = document.getElementById('heroCanvas');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initParticles();
    generateProjects();
    generateCertificates();
    generateSkills();
    initScrollAnimations();
    initContactForm();
    initSmoothScroll();
    initHero3DBackground();
    initPdfModal();
    initExperienceAccordion();
    initNextProjectButton();
    
    // renderProjectDetail может не быть определена в текущей версии скрипта.
    // Чтобы не прерывать выполнение остальных инициализаций (включая кнопку «След. проект»),
    // вызываем её только если функция реально существует.
    if (typeof renderProjectDetail === 'function') {
        renderProjectDetail();
    }
});

// Navigation
function initNavigation() {
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navigation.classList.add('scrolled');
        } else {
            navigation.classList.remove('scrolled');
        }
    });

    // Mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navigation.contains(e.target) && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
        }
    });
}

// Particles Animation
function initParticles() {
    if (!particlesContainer) return;
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation
        const duration = 3 + Math.random() * 2;
        const delay = Math.random() * 2;
        
        particle.style.animation = `
            float ${duration}s ease-in-out ${delay}s infinite
        `;
        
        particlesContainer.appendChild(particle);
    }
}

// 3D Hero Background (Three.js)
function initHero3DBackground() {
    if (!heroCanvasContainer || typeof THREE === 'undefined') return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const rect = heroCanvasContainer.getBoundingClientRect();
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(rect.width, rect.height);
    heroCanvasContainer.appendChild(renderer.domElement);

    if (window.innerWidth > 800) {
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }

    const camera = new THREE.PerspectiveCamera(20, rect.width / rect.height, 1, 500);
    camera.position.set(0, 2, 14);

    const scene = new THREE.Scene();
    const city = new THREE.Object3D();
    const smoke = new THREE.Object3D();
    const town = new THREE.Object3D();

    const setcolor = 0xFF4500;
    scene.background = new THREE.Color(setcolor);
    scene.fog = new THREE.Fog(setcolor, 10, 16);

    function mathRandom(num = 8) {
        return -Math.random() * num + Math.random() * num;
    }

    let setTintNum = true;
    function setTintColor() {
        setTintNum = !setTintNum;
        return 0x000000;
    }

    function initCity() {
        const segments = 2;
        for (let i = 1; i < 100; i++) {
            // Базовая объёмная геометрия куба (высота и ширина > 0, иначе он не виден)
            const geometry = new THREE.BoxGeometry(1, 1, 1, segments, segments, segments);
            const material = new THREE.MeshStandardMaterial({
                color: setTintColor(),
                wireframe: false,
                side: THREE.DoubleSide
            });
            const wmaterial = new THREE.MeshLambertMaterial({
                color: 0xffffff,
                wireframe: true,
                transparent: true,
                opacity: 0.03,
                side: THREE.DoubleSide
            });

            const cube = new THREE.Mesh(geometry, material);
            const floor = new THREE.Mesh(geometry, material);
            const wfloor = new THREE.Mesh(geometry, wmaterial);

            cube.add(wfloor);
            cube.castShadow = true;
            cube.receiveShadow = true;

            const cubeWidth = 0.9;
            cube.scale.x = cube.scale.z = cubeWidth + mathRandom(1 - cubeWidth);
            // Высота «зданий» (делаем ниже и ближе к оригиналу)
            cube.scale.y = 0.3 + Math.abs(mathRandom(3));
            // Позиция по X/Z — сетка вокруг центра
            cube.position.x = Math.round(mathRandom(5));
            cube.position.z = Math.round(mathRandom(5));
            // Ставим кубы на «землю»
            cube.position.y = cube.scale.y / 2;

            floor.position.set(cube.position.x, 0, cube.position.z);
            floor.scale.y = 0.05;

            town.add(floor);
            town.add(cube);
        }

        // Particles (smoke)
        const gmaterial = new THREE.MeshToonMaterial({ color: 0xffff00, side: THREE.DoubleSide });
        const gparticular = new THREE.CircleGeometry(0.01, 3);
        const aparticular = 5;

        for (let h = 1; h < 300; h++) {
            const particular = new THREE.Mesh(gparticular, gmaterial);
            particular.position.set(mathRandom(aparticular), mathRandom(aparticular), mathRandom(aparticular));
            particular.rotation.set(mathRandom(), mathRandom(), mathRandom());
            smoke.add(particular);
        }

        const pmaterial = new THREE.MeshPhongMaterial({
            color: 0x000000,
            side: THREE.DoubleSide,
            roughness: 10,
            metalness: 0.6,
            opacity: 0.9,
            transparent: true
        });
        const pgeometry = new THREE.PlaneGeometry(60, 60);
        const pelement = new THREE.Mesh(pgeometry, pmaterial);
        pelement.rotation.x = -90 * Math.PI / 180;
        pelement.position.y = -0.001;
        pelement.receiveShadow = true;

        city.add(pelement);
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 4);
    const lightFront = new THREE.SpotLight(0xffffff, 20, 10);
    const lightBack = new THREE.PointLight(0xffffff, 0.5);

    lightFront.rotation.x = 45 * Math.PI / 180;
    lightFront.rotation.z = -45 * Math.PI / 180;
    lightFront.position.set(5, 5, 5);
    lightFront.castShadow = true;
    lightFront.shadow.mapSize.width = 6000;
    lightFront.shadow.mapSize.height = lightFront.shadow.mapSize.width;
    lightFront.penumbra = 0.1;
    lightBack.position.set(0, 6, 0);

    smoke.position.y = 2;

    scene.add(ambientLight);
    city.add(lightFront);
    scene.add(lightBack);
    scene.add(city);
    city.add(smoke);
    city.add(town);

    const gridHelper = new THREE.GridHelper(60, 120, 0xff0000, 0x000000);
    city.add(gridHelper);

    const mouse = { x: 0, y: 0 };
    function onMouseMove(event) {
        const x = event.clientX / window.innerWidth;
        const y = event.clientY / window.innerHeight;
        mouse.x = x * 2 - 1;
        mouse.y = -(y * 2 - 1);
    }
    window.addEventListener('mousemove', onMouseMove, false);

    function onResize() {
        const r = heroCanvasContainer.getBoundingClientRect();
        camera.aspect = r.width / r.height;
        camera.updateProjectionMatrix();
        renderer.setSize(r.width, r.height);
    }
    window.addEventListener('resize', onResize, false);

    initCity();

    const uSpeed = 0.0018;
    function animate() {
        requestAnimationFrame(animate);

        city.rotation.y -= ((mouse.x * 8) - camera.rotation.y) * uSpeed;
        city.rotation.x -= (-(mouse.y * 2) - camera.rotation.x) * uSpeed;
        if (city.rotation.x < -0.05) city.rotation.x = -0.05;
        else if (city.rotation.x > 1) city.rotation.x = 1;

        smoke.rotation.y += 0.018;
        smoke.rotation.x += 0.018;

        camera.lookAt(city.position);
        renderer.render(scene, camera);
    }

    animate();
}

// Add CSS for particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0);
            opacity: 0.2;
        }
        50% {
            transform: translateY(-30px);
            opacity: 0.8;
        }
    }
`;
document.head.appendChild(style);

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');

                // Запуск анимации навыков при появлении категории
                if (entry.target.classList.contains('skill-category') && !entry.target.dataset.animated) {
                    entry.target.dataset.animated = 'true';
                    animateSkillCategory(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('section, .project-card, .skill-category').forEach(el => {
        observer.observe(el);
    });
}

// Generate Projects
function generateProjects() {
    if (!projectsGrid) return;
    
    // Проверяем, на какой странице мы находимся
    const isProjectsPage = window.location.pathname.includes('projects.html');
    
    let projectsToShow;
    
    if (isProjectsPage) {
        // На странице projects показываем все проекты с заменой некоторых карточек
        projectsToShow = projectsData.map(project => ({ ...project }));
        
        // Находим проекты для замены
        const portfolioProject = projectsData.find(p => p.title === "Сайт - портфолио");
        const focusPodProject = projectsData.find(p => p.title === "FocusPod");
        const tumarProject = projectsData.find(p => p.title === "Tumar.Ai");
        
        // Заменяем "ИС мероприятия" на "Сайт - портфолио"
        const isitIndex = projectsToShow.findIndex(p => p.title === "ИС мероприятия");
        if (isitIndex !== -1 && portfolioProject) {
            projectsToShow[isitIndex] = { ...portfolioProject };
        }
        
        // Заменяем "Silva" на "FocusPod"
        const silvaIndex = projectsToShow.findIndex(p => p.title === "Silva");
        if (silvaIndex !== -1 && focusPodProject) {
            projectsToShow[silvaIndex] = { ...focusPodProject };
        }
        
        // Удаляем карточку "UI/UX"
        projectsToShow = projectsToShow.filter(p => p.title !== "UI/UX");
        
        // Удаляем дубликаты (оставляем только первое вхождение)
        const seen = new Set();
        projectsToShow = projectsToShow.filter(project => {
            if (seen.has(project.title)) {
                return false;
            }
            seen.add(project.title);
            return true;
        });
        
        // Первым идет Tumar.Ai
        if (tumarProject) {
            const tumarIndex = projectsToShow.findIndex(p => p.title === "Tumar.Ai");
            if (tumarIndex !== -1) {
                const tumar = projectsToShow.splice(tumarIndex, 1)[0];
                projectsToShow.unshift(tumar);
            }
        }
    } else {
        // На главной странице показываем 4 карточки:
        // 1) Tumar.Ai, 2) ИС мероприятия, 3) Silva, 4) Улан-Удэ
        const tumarProject = projectsData.find(p => p.title === "Tumar.Ai");
        const otherProjects = projectsData.filter(p => 
            p.title === "ИС мероприятия" || p.title === "Silva"
        );

        projectsToShow = [];

        if (tumarProject) {
            projectsToShow.push({
                ...tumarProject,
                image: "images/Tumar.png"
            });
        }

        otherProjects.forEach((project, index) => {
            const newProject = { ...project };
            if (index === 0) {
                newProject.image = "images/isit.png";
            } else if (index === 1) {
                newProject.image = "images/diplom.png";
            }
            projectsToShow.push(newProject);
        });
        // Четвёртая карточка с ulanude.png
        projectsToShow.push({
            title: "Улан-Удэ",
            description: "Мобильное приложение",
            tech: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
            image: "images/ulanude.png",
            date: "01.01.2025",
            liveUrl: "#",
            pdfUrl: "documents/ulanUde.pdf",
            codeUrl: "https://github.com/AbiybillaevKhanbolot",
            gradient: "from-[#C10801] to-[#F16001]"
        });
    }
    
    // Компактный размер карточек на главной и на странице «Все проекты»
    const projectsSection = projectsGrid.closest('.projects');
    if (projectsSection) {
        projectsSection.classList.add('projects--compact');
    }
    
    const detailPages = {
        "Tumar.Ai": "project-tumar-ai.html",
        "Сайт - портфолио": "project-portfolio.html",
        "FocusPod": "project-focuspod.html",
        "EstateAI CIS": "project-estateai.html",
        "Real Estate Portal": "project-realestate.html",
        "ИС мероприятия": "project-is-meropriyatiya.html",
        "Улан-Удэ": "project-ulan-ude.html",
        "We are sysadmins": "project-bilet-5.html"
    };

    projectsGrid.innerHTML = projectsToShow.map((project, index) => {
        // Используем кнопку с модальным окном, если у проекта есть pdfUrl
        const hasPdf = project.pdfUrl;
        const liveDemoButton = hasPdf 
            ? `<button class="project-link primary" data-pdf-url="${project.pdfUrl}" data-project-title="${project.title}">
                <i class="fas fa-external-link-alt"></i>
                Live Demo
            </button>`
            : `<a href="${project.liveUrl}" class="project-link primary" target="_blank">
                <i class="fas fa-external-link-alt"></i>
                Live Demo
            </a>`;
        
        const year = project.date ? project.date.slice(-4) : "";
        const detailHref = detailPages[project.title] || `project-detail.html?project=${encodeURIComponent(project.title)}`;

        return `
        <div class="project-card fade-in-up">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-overlay" style="background: linear-gradient(135deg, ${getColorFromGradient(project.gradient)})"></div>
                <div class="project-gradient"></div>
            </div>
            <div class="project-content">
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    ${year ? `<span class="project-date">${year}</span>` : ""}
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-links">
                    ${liveDemoButton}
                    <a href="${detailHref}" class="project-link secondary">
                        Подробнее
                    </a>
                </div>
            </div>
        </div>
        `;
    }).join('');
    
    // Добавляем обработчики для кнопок с PDF
    document.querySelectorAll('[data-pdf-url]').forEach(button => {
        button.addEventListener('click', function() {
            const pdfUrl = this.getAttribute('data-pdf-url');
            const projectTitle = this.getAttribute('data-project-title');
            openPdfModal(pdfUrl, projectTitle);
        });

    // Обработчики для кнопок «Подробнее»
    document.querySelectorAll('.project-details-btn').forEach(button => {
        button.addEventListener('click', () => {
            const title = button.getAttribute('data-project-title');
            openProjectModal(title);
        });
    });
    });
}

function initNextProjectButton() {
    const actions = document.querySelector('.project-detail-actions');
    if (!actions) return;

    // Не дублируем кнопку при повторных рендерах
    if (actions.querySelector('.project-detail-next')) return;

    const backBtn = actions.querySelector('.project-detail-back');
    if (!backBtn) return;

    const fileName = window.location.pathname.split('/').pop();
    const orderedTitles = projectsData.map(p => p.title).filter(t => projectDetailPages[t]);

    const currentTitle = Object.keys(projectDetailPages).find(
        title => projectDetailPages[title] === fileName
    );
    if (!currentTitle) return;

    const currentIndex = orderedTitles.indexOf(currentTitle);
    if (currentIndex === -1) return;

    const nextTitle = orderedTitles[(currentIndex + 1) % orderedTitles.length];
    const nextHref = projectDetailPages[nextTitle];
    if (!nextHref) return;

    const nextBtn = document.createElement('a');
    nextBtn.href = nextHref;
    nextBtn.className = 'project-link secondary project-detail-next';
    nextBtn.rel = 'noopener';
    nextBtn.innerHTML = '<i class="fas fa-arrow-right"></i> След. проект';

    // Вставляем сразу после кнопки "← Назад" (справа от неё)
    backBtn.insertAdjacentElement('afterend', nextBtn);
}

// Generate Certificates
function generateCertificates() {
    if (!certificatesGrid) return;

    certificatesGrid.innerHTML = certificatesData.map((cert, index) => {
        const hasPdf = cert.pdfUrl;
        const liveDemoButton = hasPdf
            ? `<button class="project-link primary" data-pdf-url="${cert.pdfUrl}" data-project-title="${cert.title}">
                <i class="fas fa-external-link-alt"></i>
                Live Demo
            </button>`
            : `<a href="${cert.liveUrl}" class="project-link primary" target="_blank">
                <i class="fas fa-external-link-alt"></i>
                Live Demo
            </a>`;

        return `
        <div class="certificate-card project-card fade-in-up">
            <div class="project-image">
                <img src="${cert.image}" alt="${cert.title}" loading="lazy">
                <div class="project-gradient"></div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${cert.title}</h3>
                <p class="project-description">${cert.description}</p>
                <div class="project-links">
                    ${liveDemoButton}
                </div>
            </div>
        </div>
        `;
    }).join('');

    document.querySelectorAll('#certificates [data-pdf-url]').forEach(button => {
        button.addEventListener('click', function() {
            const pdfUrl = this.getAttribute('data-pdf-url');
            const projectTitle = this.getAttribute('data-project-title');
            openPdfModal(pdfUrl, projectTitle);
        });
    });
}


// Generate Skills
function generateSkills() {
    if (!skillsGrid) return;
    skillsGrid.innerHTML = skillsData.map(category => `
        <div class="skill-category fade-in-up">
            <div class="category-header">
                <div class="category-icon"></div>
                <h3 class="category-title">${category.category}</h3>
            </div>
            <div class="skills-list">
                ${category.skills.map(skill => `
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">${skill.name}</span>
                            <span class="skill-percentage" data-target="${skill.level}">0%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-target="${skill.level}" style="width: 0">
                                <div class="skill-glow"></div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Skills animation
function animateSkillCategory(categoryEl) {
    const progressBars = categoryEl.querySelectorAll('.skill-progress');
    const percentLabels = categoryEl.querySelectorAll('.skill-percentage');

    progressBars.forEach((bar, index) => {
        const target = parseInt(bar.dataset.target, 10) || 0;
        const label = percentLabels[index];
        const duration = 1200; // 1.2s
        const startTime = performance.now();

        function animate(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.floor(target * progress);

            bar.style.width = `${value}%`;
            if (label) {
                label.textContent = `${value}%`;
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    });
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) {
        console.warn('Форма обратной связи не найдена');
        return;
    }
    
    console.log('Форма обратной связи инициализирована');
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        console.log('Форма отправлена');
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        if (!nameInput || !emailInput || !messageInput) {
            console.error('Не найдены поля формы');
            showToast('Ошибка: поля формы не найдены', 'error');
            return;
        }
        
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            message: messageInput.value.trim()
        };

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            showToast('Пожалуйста, заполните все поля', 'error');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            showToast('Пожалуйста, введите корректный email адрес', 'error');
            return;
        }

        const submitBtn = contactForm.querySelector('.submit-btn');
        if (!submitBtn) {
            console.error('Кнопка отправки не найдена');
            showToast('Ошибка: кнопка отправки не найдена', 'error');
            return;
        }
        
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
        submitBtn.disabled = true;

        try {
            // Проверяем наличие конфигурации
            if (typeof TELEGRAM_CONFIG === 'undefined') {
                throw new Error('TELEGRAM_CONFIG не определен. Убедитесь, что config.js загружен.');
            }
            
            if (!TELEGRAM_CONFIG.botToken || !TELEGRAM_CONFIG.chatId) {
                throw new Error('Telegram конфигурация неполная. Проверьте config.js');
            }

            // Формируем сообщение для Telegram
            const telegramMessage = `📧 <b>Новое сообщение с сайта</b>\n\n` +
                `👤 <b>Имя:</b> ${escapeHtml(formData.name)}\n` +
                `📮 <b>Email:</b> ${escapeHtml(formData.email)}\n` +
                `💬 <b>Сообщение:</b>\n${escapeHtml(formData.message)}`;

            console.log('Отправка сообщения в Telegram...');

            // Отправляем в Telegram
            const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_CONFIG.botToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CONFIG.chatId,
                    text: telegramMessage,
                    parse_mode: 'HTML'
                })
            });

            const result = await response.json();
            console.log('Ответ от Telegram API:', result);

            if (response.ok && result.ok) {
                showToast('Сообщение успешно отправлено! Я свяжусь с вами в ближайшее время.', 'success');
                contactForm.reset();
            } else {
                const errorMsg = result.description || 'Ошибка отправки сообщения';
                console.error('Ошибка Telegram API:', errorMsg);
                throw new Error(errorMsg);
            }
        } catch (error) {
            console.error('Ошибка отправки формы:', error);
            const errorMessage = error.message || 'Произошла ошибка при отправке сообщения. Попробуйте позже.';
            showToast(errorMessage, 'error');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Функция для экранирования HTML (защита от XSS)
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Smooth Scroll
function initSmoothScroll() {
    // Smooth-scroll только для элементов, у которых есть data-section
    // Исключаем кнопки внутри форм (например, кнопка отправки формы)
    document.querySelectorAll('[data-section], .footer-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const section = this.getAttribute('data-section');
            const targetSection = section ? document.getElementById(section) : null;
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Обработка кнопок .btn-primary и .btn-secondary, но только если они не внутри формы
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
        // Пропускаем кнопки внутри форм
        if (btn.closest('form')) {
            return;
        }
        
        btn.addEventListener('click', function(e) {
            const section = this.getAttribute('data-section');
            // Если есть data-section — скроллим, иначе даём сработать стандартной навигации (href)
            if (section) {
                e.preventDefault();
                const targetSection = document.getElementById(section);
                if (targetSection) {
                    targetSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Home buttons
    const homeBtnEl = document.getElementById('homeBtn');
    if (homeBtnEl) {
        homeBtnEl.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const footerHomeBtnEl = document.getElementById('footerHomeBtn');
    if (footerHomeBtnEl) {
        footerHomeBtnEl.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// Experience accordion on About page
function initExperienceAccordion() {
    const experienceItems = document.querySelectorAll('.experience-item');
    if (!experienceItems.length) return;

    experienceItems.forEach(item => {
        const toggle = item.querySelector('.experience-toggle');
        const body = item.querySelector('.experience-body');
        if (!toggle || !body) return;

        toggle.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            experienceItems.forEach(i => {
                i.classList.remove('active');
                const t = i.querySelector('.experience-toggle');
                if (t) {
                    t.setAttribute('aria-expanded', 'false');
                    t.textContent = '+';
                }
            });

            if (!isActive) {
                item.classList.add('active');
                toggle.setAttribute('aria-expanded', 'true');
                toggle.textContent = '×';
            }
        });
    });
}

// Helper Functions
function getColorFromGradient(gradient) {
    const gradients = {
        'from-[#E85002] to-[#C10801]': '#E85002, #C10801',
        'from-[#F16001] to-[#E85002]': '#F16001, #E85002',
        'from-[#E85002] to-[#F16001]': '#E85002, #F16001',
        'from-[#C10801] to-[#E85002]': '#C10801, #E85002',
        'from-[#F16001] to-[#C10801]': '#F16001, #C10801'
    };
    return gradients[gradient] || '#E85002, #F16001';
}

function showToast(message, type = 'success') {
    // Убираем предыдущие классы и сообщение
    toast.textContent = '';
    toast.className = 'toast';
    
    // Устанавливаем новое сообщение и тип
    toast.textContent = message;
    toast.classList.add(type);
    
    // Принудительно перерисовываем для сброса анимации
    void toast.offsetWidth;
    
    // Показываем уведомление
    toast.classList.add('show');
    
    // Автоматически скрываем через 3 секунды
    setTimeout(() => {
        toast.classList.remove('show');
        // Полностью очищаем после завершения анимации
        setTimeout(() => {
            toast.textContent = '';
            toast.className = 'toast';
        }, 400); // Время должно совпадать с transition в CSS
    }, 3000);
}

// Scroll indicator animation
function initScrollIndicator() {
    const scrollDot = document.querySelector('.scroll-dot');
    if (scrollDot) {
        setInterval(() => {
            scrollDot.style.transform = 'translateY(0)';
            setTimeout(() => {
                scrollDot.style.transform = 'translateY(12px)';
            }, 1000);
            setTimeout(() => {
                scrollDot.style.transform = 'translateY(0)';
            }, 2000);
        }, 2000);
    }
}

// Initialize scroll indicator
initScrollIndicator();

// PDF Modal Functions
function openPdfModal(pdfUrl, title) {
    const modal = document.getElementById('pdfModal');
    const iframe = document.getElementById('pdfViewer');
    const titleElement = document.getElementById('pdfModalTitle');
    const warningElement = document.getElementById('pdfModalWarning');
    
    if (modal && iframe) {
        titleElement.textContent = title || 'Просмотр документа';
        iframe.src = pdfUrl;
        
        // Показываем предупреждение для коммерческих проектов
        const commercialProjects = ["UI/UX", "ИС мероприятия", "Улан-Удэ"];
        if (warningElement) {
            if (commercialProjects.includes(title)) {
                warningElement.style.display = 'flex';
            } else {
                warningElement.style.display = 'none';
            }
        }
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Блокируем прокрутку страницы
    }
}

function closePdfModal() {
    const modal = document.getElementById('pdfModal');
    const iframe = document.getElementById('pdfViewer');
    const warningElement = document.getElementById('pdfModalWarning');
    
    if (modal && iframe) {
        modal.classList.remove('active');
        iframe.src = ''; // Очищаем iframe для освобождения памяти
        if (warningElement) {
            warningElement.style.display = 'none'; // Скрываем предупреждение
        }
        document.body.style.overflow = ''; // Восстанавливаем прокрутку
    }
}

// Инициализация модального окна
function initPdfModal() {
    const modal = document.getElementById('pdfModal');
    const closeBtn = document.getElementById('pdfModalClose');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closePdfModal);
    }
    
    // Закрытие при клике вне модального окна
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closePdfModal();
            }
        });
    }
    
    // Закрытие по клавише Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closePdfModal();
        }
    });
}

// Модальное окно с подробным описанием проекта
function openProjectModal(title) {
    const modal = document.getElementById('projectModal');
    const titleElement = document.getElementById('projectModalTitle');
    const descriptionElement = document.getElementById('projectModalDescription');
    const codeButton = document.getElementById('projectModalCodeBtn');

    if (!modal || !titleElement || !descriptionElement || !codeButton) return;

    const project = projectsData.find(p => p.title === title);
    const details = projectDetails[title] || project?.description || '';

    titleElement.textContent = title;
    descriptionElement.textContent = details;

    if (project && project.codeUrl) {
        codeButton.href = project.codeUrl;
        codeButton.style.display = 'inline-flex';
    } else {
        codeButton.removeAttribute('href');
        codeButton.style.display = 'none';
    }

    modal.classList.add('active');
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.getElementById('projectModalClose');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeProjectModal);
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeProjectModal();
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeProjectModal();
        }
    });
}