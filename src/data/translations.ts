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
            subtitle: 'Java (Spring Boot) & React',
            description: "Specialized in building scalable and secure web applications. From database design and backend architecture to dynamic user interfaces and cloud deployment.",
            viewWork: 'View Work',
            contactMe: 'Contact Me',
            techStack: {
                backend: 'Java / Spring Boot',
                frontend: 'React / TypeScript'
            }
        },
        about: {
            title: 'Professional Profile',
            summary1: "Full Stack Developer specialized in creating scalable and secure web applications using the Java (Spring Boot) and React ecosystem.",
            summary2: "I have practical experience in the entire software life cycle: from relational database design and backend architectures to the implementation of dynamic user interfaces and cloud deployment.",
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
                },
                {
                    date: 'Current',
                    title: 'Full Stack Design & Prototyping',
                    company: 'SGAF – PARTY RENTAL MANAGEMENT SYSTEM',
                    description: 'Project (In Development)',
                    bullets: [
                        "Design and prototyping of an administrative application for event furniture rental management (orders, inventory, reports, and configuration).",
                        "Dashboard design with operational KPIs (daily orders, estimated income, pending events) and monthly charts.",
                        "Focus on clear, intuitive User Experience (UX) oriented to reduce operational errors in small and medium businesses."
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
                    imageUrl: "/tcp-project.png" // Placeholder
                },
                {
                    title: 'SGAF – MANAGEMENT SYSTEM',
                    bullets: [
                        "Party Rental Management.",
                        "Operational KPIs Dashboard.",
                        "Inventory & Reports."
                    ],
                    tags: ["Prototyping", "UX/UI", "Full Stack Design"],
                    link: "#",
                    imageUrl: "/sgaf-project.png" // Placeholder
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
                languages: ["Java", "JavaScript", "Python", "SQL"],
                frameworks: ["Spring Boot 3", "Spring Security", "Hibernate / JPA", "React (Vite)", "Flutter"],
                databases: ["PostgreSQL", "MySQL"],
                devops: ["Docker", "DigitalOcean", "Git", "GitHub", "Maven", "Postman"]
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
            title: 'Contact',
            cta: 'Get in Touch',
            details: {
                email: 'juancastellanosg84@gmail.com',
                phone: '4137-1469',
                location: 'Escuintla, Guatemala'
            }
        },
        footer: {
            text: '2026 • Juan Daniel Castellanos González'
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
            subtitle: 'Java (Spring Boot) y React',
            description: "Especializado en la creación de aplicaciones web escalables y seguras. Desde el diseño de bases de datos y arquitecturas backend, hasta interfaces dinámicas y despliegue en la nube.",
            viewWork: 'Ver Proyectos',
            contactMe: 'Contáctame',
            techStack: {
                backend: 'Java / Spring Boot',
                frontend: 'React / TypeScript'
            }
        },
        about: {
            title: 'Perfil Profesional',
            summary1: "Desarrollador Full Stack especializado en la creación de aplicaciones web escalables y seguras utilizando el ecosistema Java (Spring Boot) y React.",
            summary2: "Cuento con experiencia práctica en todo el ciclo de vida del software: desde el diseño de bases de datos relacionales y arquitecturas backend, hasta la implementación de interfaces de usuario dinámicas y el despliegue en la nube.",
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
                },
                {
                    date: 'Actualidad',
                    title: 'Diseño y Prototipado Full Stack',
                    company: 'SGAF – SISTEMA DE GESTIÓN PARA ALQUILERES DE FIESTAS',
                    description: 'Proyecto (En desarrollo)',
                    bullets: [
                        "Diseño y prototipado de una aplicación administrativa para gestión de alquileres de mobiliario para eventos (pedidos, inventario, reportes y configuración).",
                        "Diseño de dashboard con KPIs operativos (pedidos del día, ingresos estimados, eventos pendientes) y gráficas mensuales.",
                        "Enfoque en experiencia de usuario (UX) clara, intuitiva y orientada a reducir errores operativos en negocios pequeños y medianos."
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
                    imageUrl: "/tcp-project.png" // Placeholder
                },
                {
                    title: 'SGAF – SISTEMA DE GESTIÓN',
                    bullets: [
                        "Gestión de alquileres de fiestas.",
                        "Dashboard con KPIs operativos.",
                        "UX clara e intuitiva."
                    ],
                    tags: ["Prototyping", "UX/UI", "Full Stack Design"],
                    link: "#",
                    imageUrl: "/sgaf-project.png" // Placeholder
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
                languages: ["Java", "JavaScript", "Python", "SQL"],
                frameworks: ["Spring Boot 3", "Spring Security", "Hibernate / JPA", "React (Vite)", "Flutter"],
                databases: ["PostgreSQL", "MySQL"],
                devops: ["Docker", "DigitalOcean", "Git", "GitHub", "Maven", "Postman"]
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
            title: 'Contacto',
            cta: 'Contactar',
            details: {
                email: 'juancastellanosg84@gmail.com',
                phone: '4137-1469',
                location: 'Escuintla, Guatemala'
            }
        },
        footer: {
            text: '2026 • Juan Daniel Castellanos González'
        }
    }
};
