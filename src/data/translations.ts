export type Language = 'en' | 'es';

export const translations = {
    en: {
        nav: {
            about: 'About',
            experience: 'Experience',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact',
        },
        hero: {
            badge: 'AVAILABLE FOR WORK',
            title: 'Full Stack Developer',
            subtitle: 'Secure APIs. Structured data. Thoughtful interfaces.',
            description: "Specialized in building scalable and secure web applications. From database design and backend architecture to dynamic user interfaces and cloud deployment.",
            viewWork: 'View Work',
            contactMe: 'Contact Me',
            stackLine: 'SPRING BOOT • REACT • POSTGRESQL • DOCKER • CLOUD'
        },
        about: {
            title: 'Professional Profile',
            summary1: "Full Stack Developer experienced in building enterprise web applications with Java, Spring Boot, and React.",
            summary2: "I have participated in the complete software development lifecycle, from backend architecture and relational database design to user interface implementation and cloud deployment. I am currently in the tenth semester of Systems Engineering at Universidad Mariano Gálvez de Guatemala.",
            principles: [
                "Agile learning and adaptability to new technologies.",
                "Responsibility and commitment to project goals.",
                "Collaborative teamwork in dynamic environments.",
                "Focus on scalable and maintainable code."
            ]
        },
        experience: {
            title: 'Professional Experience',
            jobs: [
                {
                    date: 'May 2025 – Present',
                    title: 'Application Programmer',
                    company: 'TSI Tecnología e Informática',
                    description: 'Santa Lucía Cotzumalguapa, Escuintla, Guatemala.',
                    bullets: [
                        "Develop and maintain the company's applications.",
                        "Implement enhancements and new features based on business needs.",
                        "Resolve incidents and maintain systems currently in operation.",
                        "Support requirements analysis for new developments and improvement requests.",
                        "Test applications before release to validate their correct operation.",
                        "Contribute to technical documentation when required."
                    ]
                },
                {
                    date: 'Aug 2025 – Nov 2025',
                    title: 'Full Stack Developer (SaaS Project)',
                    company: 'TCP - TIMETRACKER',
                    description: 'The Coastal Project – Hospitality Company in the USA.',
                    bullets: [
                        "Participated in the analysis, design, and implementation of a Labor Time Management System for a US hospitality company.",
                        "Backend development with Java 17 + Spring Boot 3, applying layered architecture (Controller, Service, Repository).",
                        "Implemented authentication and authorization using Spring Security + JWT.",
                        "Frontend development with React + TypeScript (Vite), consuming REST APIs and handling authenticated sessions.",
                        "Defined business rules (time validations, lockout for failed attempts, shift consistency).",
                        "Deployed in cloud environment (DigitalOcean) and tested in production environment."
                    ]
                }
            ]
        },
        projects: {
            title: 'Projects & Tools',
            list: [
                {
                    title: 'TCP – TIMETRACKER',
                    bullets: [
                        "Labor Time Management System.",
                        "RBAC, Spring Security + JWT.",
                        "Cloud Deployment (DigitalOcean)."
                    ],
                    tags: ["Java 17", "Spring Boot 3", "React", "TypeScript", "PostgreSQL", "Docker", "DigitalOcean"],
                    link: "#",
                    images: [
                        "/juan-castellanos-portfolio/projects/tcp/tcp-1.png",
                        "/juan-castellanos-portfolio/projects/tcp/tcp-2.png",
                        "/juan-castellanos-portfolio/projects/tcp/tcp-3.png",
                        "/juan-castellanos-portfolio/projects/tcp/tcp-4.png",
                        "/juan-castellanos-portfolio/projects/tcp/tcp-5.png",
                        "/juan-castellanos-portfolio/projects/tcp/tcp-6.png",
                        "/juan-castellanos-portfolio/projects/tcp/tcp-7.png"
                    ]
                }
            ]
        },
        skills: {
            title: 'Skills Summary',
            categories: {
                backend: 'Backend & Database',
                frontend: 'Frontend',
                devops: 'DevOps & Tools'
            },
            list: [
                "Web application development with Java (Spring Boot and React).",
                "Knowledge of SQL (complex queries, JOIN, stored procedures, functions).",
                "Application containerization using Docker.",
                "Collaborative work with version control (Git, Pull Request, branch management).",
                "Ability to interact with technical teams and adapt to agile technologies.",
                "Design and consumption of REST APIs."
            ],
            tools: {
                languages: ["Java", "JavaScript", "TypeScript", "Python", "SQL"],
                frameworks: ["Spring Boot 3", "Spring Security", "Hibernate / JPA", "React", "Vite", "HTML5", "CSS3", "Bootstrap"],
                databases: ["PostgreSQL", "MySQL"],
                devops: ["Docker", "DigitalOcean", "Git", "GitHub", "Maven", "Postman", "IntelliJ IDEA", "Visual Studio Code", "NetBeans", "Figma"]
            }
        },
        languages: {
            title: 'Languages',
            items: [
                { name: 'English', level: 'Intermediate' },
                { name: 'Spanish', level: 'Native' }
            ]
        },
        contact: {
            headline: 'Interested in building something scalable?',
            subtext: 'Open to collaborations, freelance work, and full-time opportunities.',
            copyButton: 'Copy email',
            copiedConfirmation: 'Email copied',
            details: {
                email: 'juancastellanosg84@gmail.com',
                phone: '4137-1469',
                location: 'Escuintla, Guatemala'
            }
        },
        footer: {
            text: '© 2026 Juan Castellanos. All rights reserved.'
        }
    },
    es: {
        nav: {
            about: 'Perfil',
            experience: 'Experiencia',
            projects: 'Proyectos',
            skills: 'Habilidades',
            contact: 'Contacto',
        },
        hero: {
            badge: 'DISPONIBLE PARA TRABAJAR',
            title: 'Desarrollador Full Stack',
            subtitle: 'APIs seguras. Datos estructurados. Interfaces pensadas.',
            description: "Especializado en la creación de aplicaciones web escalables y seguras. Desde el diseño de bases de datos y arquitecturas backend, hasta interfaces dinámicas y despliegue en la nube.",
            viewWork: 'Ver Proyectos',
            contactMe: 'Contáctame',
            stackLine: 'SPRING BOOT • REACT • POSTGRESQL • DOCKER • CLOUD'
        },
        about: {
            title: 'Perfil Profesional',
            summary1: "Desarrollador Full Stack con experiencia en el desarrollo de aplicaciones web empresariales utilizando Java, Spring Boot y React.",
            summary2: "He participado en el ciclo completo de desarrollo de software, desde el diseño de arquitecturas backend y bases de datos relacionales hasta la implementación de interfaces de usuario y el despliegue en entornos cloud. Actualmente curso el décimo semestre de Ingeniería en Sistemas en la Universidad Mariano Gálvez de Guatemala.",
            principles: [
                "Agilidad de aprendizaje y adaptación a tecnologías ágiles.",
                "Responsabilidad y capacidad para trabajar en equipo.",
                "Entornos colaborativos.",
                "Destaco por mi capacidad."
            ]
        },
        experience: {
            title: 'Experiencia Profesional',
            jobs: [
                {
                    date: 'Mayo 2025 – Actualidad',
                    title: 'Programador de Aplicaciones',
                    company: 'TSI Tecnología e Informática',
                    description: 'Santa Lucía Cotzumalguapa, Escuintla, Guatemala.',
                    bullets: [
                        "Desarrollo y mantenimiento de aplicaciones de la empresa.",
                        "Implementación de mejoras y nuevas funcionalidades según las necesidades del negocio.",
                        "Corrección de incidencias y mantenimiento de los sistemas en funcionamiento.",
                        "Apoyo en el análisis de requerimientos para nuevos desarrollos y solicitudes de mejora.",
                        "Realización de pruebas para validar el correcto funcionamiento de las aplicaciones antes de su liberación.",
                        "Apoyo en la elaboración de documentación técnica cuando fue requerido."
                    ]
                },
                {
                    date: 'Agosto 2025 – Noviembre 2025',
                    title: 'Desarrollador Full Stack (Proyecto SaaS Empresarial)',
                    company: 'TCP - TIMETRACKER',
                    description: 'The Coastal Project – Empresa de Hospitalidad en EE. UU.',
                    bullets: [
                        "Participación en el análisis, diseño e implementación de un Sistema de Gestión del Tiempo Laboral para la empresa del sector hospitalidad de EE.UU.",
                        "Desarrollo de backend con Java 17 + Spring Boot 3, aplicando arquitectura en capas(Controller, Service, Repository).",
                        "Implementación de autenticación y autorización mediante Spring Security + JWT",
                        "Desarrollo frontend con React + TypeScript (Vite), consumo de APIs REST y manejo de sesiones autenticadas.",
                        "Participación en la definición de reglas de negocio (validaciones de tiempo, bloqueo por intentos fallidos, coherencia de jornadas).",
                        "Despliegue en entorno cloud (DigitalOcean) y pruebas en ambiente productivo."
                    ]
                }
            ]
        },
        projects: {
            title: 'Herramientas y Tecnologías', // Using this section for highlighted projects/tools as per request "destacando la herramientas y proyectos"
            list: [
                {
                    title: 'TCP – TIMETRACKER',
                    bullets: [
                        "Sistema de Gestión del Tiempo Laboral.",
                        "Seguridad con Spring Security + JWT.",
                        "Despliegue en DigitalOcean."
                    ],
                    tags: ["Java 17", "Spring Boot 3", "React", "TypeScript", "PostgreSQL", "Docker", "DigitalOcean"],
                    link: "#",
                    images: [
                        "/juan-castellanos-portfolio/projects/tcp/tcp-1.png",
                        "/juan-castellanos-portfolio/projects/tcp/tcp-2.png",
                        "/juan-castellanos-portfolio/projects/tcp/tcp-3.png",
                        "/juan-castellanos-portfolio/projects/tcp/tcp-4.png",
                        "/juan-castellanos-portfolio/projects/tcp/tcp-5.png",
                        "/juan-castellanos-portfolio/projects/tcp/tcp-6.png",
                        "/juan-castellanos-portfolio/projects/tcp/tcp-7.png"
                    ]
                }
            ]
        },
        skills: {
            title: 'Resumen de Habilidades',
            categories: {
                backend: 'Backend y BD',
                frontend: 'Frontend',
                devops: 'DevOps e Infraestructura'
            },
            list: [
                "Desarrollo de aplicaciones web con Java (Spring Boot y React).",
                "Conocimientos en SQL(consultas complejas, JOIN, procedimientos almacenados, funciones).",
                "Contenerización de aplicaciones utilizando Docker.",
                "Trabajo colaborativo con control de versionamiento(Git, Pull Request, manejo de ramas).",
                "Capacidad para interactuar con equipos técnicos y adaptarme a tecnologías ágiles.",
                "Diseño y consumo de APIs REST."
            ],
            tools: {
                languages: ["Java", "JavaScript", "TypeScript", "Python", "SQL"],
                frameworks: ["Spring Boot 3", "Spring Security", "Hibernate / JPA", "React", "Vite", "HTML5", "CSS3", "Bootstrap"],
                databases: ["PostgreSQL", "MySQL"],
                devops: ["Docker", "DigitalOcean", "Git", "GitHub", "Maven", "Postman", "IntelliJ IDEA", "Visual Studio Code", "NetBeans", "Figma"]
            }
        },
        languages: {
            title: 'Idiomas',
            items: [
                { name: 'Inglés', level: 'Intermedio' },
                { name: 'Español', level: 'Nativo' }
            ]
        },
        contact: {
            headline: '¿Interesado en construir algo escalable?',
            subtext: 'Abierto a colaboraciones, trabajo freelance y oportunidades de tiempo completo.',
            copyButton: 'Copiar email',
            copiedConfirmation: 'Email copiado',
            details: {
                email: 'juancastellanosg84@gmail.com',
                phone: '4137-1469',
                location: 'Escuintla, Guatemala'
            }
        },
        footer: {
            text: '© 2026 Juan Castellanos. Todos los derechos reservados.'
        }
    }
};
