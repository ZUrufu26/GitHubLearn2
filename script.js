// script.js

document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');

    // Массив объектов с данными проектов
    const projects = [
        {
            name: 'SmartShop',
            description: 'Интернет-магазин с интуитивно понятным интерфейсом и адаптивным дизайном. Реализованы функции корзины, фильтрации товаров и интеграция с платежными системами.',
            link: '#'
        },
        {
            name: 'WeatherNow',
            description: 'Веб-приложение для отображения погодных условий в режиме реального времени. Использует API для получения актуальных данных и отображает их с красивой анимацией.',
            link: '#'
        },
        {
            name: 'TaskMaster',
            description: 'Приложение для управления задачами и проектами с возможностью создания списков, установки приоритетов и отслеживания прогресса. Поддерживает синхронизацию с календарём.',
            link: '#'
        },
        {
            name: 'PortfolioSite',
            description: 'Персональный сайт-портфолио с динамическим отображением проектов, контактной формой и интеграцией с социальными сетями. Использует современные технологии для высокой производительности.',
            link: '#'
        },
        {
            name: 'BlogSphere',
            description: 'Платформа для ведения блогов с поддержкой тегов, категорий и комментирования. Включает панель администратора для управления контентом и пользователями.',
            link: '#'
        },
        {
            name: 'Азаза',
            description: 'Супер-пупер платформа для тыры-пыры.',
            link: '#'
        }
        // Добавьте больше проектов по необходимости
    ];

    // Функция для создания и добавления проектов в DOM
    function displayProjects(projects) {
        projects.forEach(project => {
            // Создание элемента проекта
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project');

            // Создание заголовка
            const projectTitle = document.createElement('h3');
            projectTitle.textContent = project.name;
            projectDiv.appendChild(projectTitle);

            // Создание описания
            const projectDesc = document.createElement('p');
            projectDesc.textContent = project.description;
            projectDiv.appendChild(projectDesc);

            // Создание ссылки
            const projectLink = document.createElement('a');
            projectLink.href = project.link;
            projectLink.textContent = 'Смотреть проект';
            projectDiv.appendChild(projectLink);

            // Добавление проекта в контейнер
            projectsContainer.appendChild(projectDiv);
        });
    }

    // Вызов функции для отображения проектов
    displayProjects(projects);
});
