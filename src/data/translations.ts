

export const translations = {
    en: {
        hero: {
            availability: "Available for new projects",
            location: "Based in Global",
            title_start: "I build scalable",
            title_end: "full-stack systems.",
            subtitle: "Software Engineer specializing in robust backend architectures and sleek user interfaces. Expert in Spring Boot, React, and Cloud Infrastructure.",
            view_systems: "View Systems",
            contact_me: "Contact Me",
            status: "status",
            active: "active",
            role: "role",
            role_value: "Full Stack Engineer",
            stack: "stack",
            upt: "upt"
        },
        systems: {
            title: "Systems",
            title_highlight: "I've Built",
            description: "A selection of robust, scalable applications engineered to solve real business problems.",
            view_case_study: "View Case Study",
            code: "Code",
            demo: "Demo"
        },
        philosophy: {
            title: "How I Build",
            principles: [
                {
                    title: "Clean Architecture",
                    description: "I separate concerns strictly. Domain logic stays pure, independent of frameworks and UI details, ensuring long-term maintainability."
                },
                {
                    title: "API-First Design",
                    description: "Systems communicate through well-defined, documented contracts (OpenAPI/Swagger). This decouples frontend from backend development."
                },
                {
                    title: "Scalable Data",
                    description: "Database schemas are normalized for integrity but indexed for performance. I plan for data growth from day one."
                },
                {
                    title: "Cloud Native",
                    description: "Infrastructure as Code (IaC) and containerization means 'it works on my machine' means it works in production too."
                }
            ]
        },
        contact: {
            title: "Ready to build something scalable?",
            description: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.",
            cta: "Say Hello",
            footer: "Juan Castellanos. Built with React & Tailwind."
        },
        projects: [
            {
                title: "TCP — TimeTracker SaaS",
                subtitle: "Enterprise-grade time tracking and payroll system",
                problem: "Companies needed a reliable way to track employee hours across multiple timezones with complex payroll rules, while ensuring data integrity and preventing time theft.",
                architecture: "Microservices architecture with a dedicated Auth service. Uses an event-driven approach for generating reports asynchronously to prevent blocking the main thread during peak usage.",
                techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS", "Redis"],
                features: [
                    "Role-based Access Control (RBAC)",
                    "Real-time clocked-in status",
                    "Automated payroll calculation",
                    "Geo-fencing validation",
                    "Exportable PDF/Excel reports"
                ],
                demoUrl: "#",
                repoUrl: "#"
            },
            {
                title: "EcoLogistics Core",
                subtitle: "Supply chain management platform for sustainable shipping",
                problem: "Legacy logistics systems failed to account for carbon footprint data. The client needed a system to optimize routes not just for speed, but for environmental impact.",
                architecture: "Monolithic modular architecture on Spring Boot for type-safety and performance. key-value store for caching frequent route queries.",
                techStack: ["Spring Boot", "Java", "React", "MySQL", "Google Maps API", "Terraform"],
                features: [
                    "Carbon footprint calculator",
                    "Route optimization algorithm",
                    "Vendor management portal",
                    "Real-time shipment tracking",
                    "Analytics dashboard"
                ],
                demoUrl: "#",
                repoUrl: "#"
            }
        ]
    },
    es: {
        hero: {
            availability: "Disponible para nuevos proyectos",
            location: "Basado en Global",
            title_start: "Construyo sistemas",
            title_end: "full-stack escalables.",
            subtitle: "Ingeniero de Software especializado en arquitecturas backend robustas e interfaces de usuario elegantes. Experto en Spring Boot, React e Infraestructura Cloud.",
            view_systems: "Ver Sistemas",
            contact_me: "Contáctame",
            status: "estado",
            active: "activo",
            role: "rol",
            role_value: "Ingeniero Full Stack",
            stack: "stack",
            upt: "upt"
        },
        systems: {
            title: "Sistemas",
            title_highlight: "Que he construido",
            description: "Una selección de aplicaciones robustas y escalables diseñadas para resolver problemas de negocio reales.",
            view_case_study: "Ver Caso de Estudio",
            code: "Código",
            demo: "Demo"
        },
        philosophy: {
            title: "Cómo Construyo",
            principles: [
                {
                    title: "Arquitectura Limpia",
                    description: "Separo las responsabilidades estrictamente. La lógica de dominio permanece pura, independiente de frameworks y detalles de UI, asegurando mantenibilidad a largo plazo."
                },
                {
                    title: "Diseño API-First",
                    description: "Los sistemas se comunican a través de contratos bien definidos y documentados (OpenAPI/Swagger). Esto desacopla el desarrollo frontend del backend."
                },
                {
                    title: "Datos Escalables",
                    description: "Los esquemas de base de datos están normalizados para integridad pero indexados para rendimiento. Planifico el crecimiento de datos desde el primer día."
                },
                {
                    title: "Cloud Native",
                    description: "Infraestructura como Código (IaC) y contenedorización significa que 'funciona en mi máquina' significa que funciona en producción también."
                }
            ]
        },
        contact: {
            title: "¿Listo para construir algo escalable?",
            description: "Actualmente estoy buscando nuevas oportunidades. Ya sea que tengas una pregunta o simplemente quieras saludar, mi bandeja de entrada siempre está abierta.",
            cta: "Di Hola",
            footer: "Juan Castellanos. Construido con React y Tailwind."
        },
        projects: [
            {
                title: "TCP — TimeTracker SaaS",
                subtitle: "Sistema de nómina y seguimiento de tiempo de grado empresarial",
                problem: "Las empresas necesitaban una forma confiable de rastrear horas de empleados en múltiples zonas horarias con reglas de nómina complejas, asegurando integridad de datos y previniendo robo de tiempo.",
                architecture: "Arquitectura de microservicios con un servicio de Auth dedicado. Utiliza un enfoque basado en eventos para generar reportes asincrónicamente para evitar bloquear el hilo principal durante picos de uso.",
                techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS", "Redis"],
                features: [
                    "Control de Acceso Basado en Roles (RBAC)",
                    "Estado de fichaje en tiempo real",
                    "Cálculo de nómina automatizado",
                    "Validación por geo-cercas",
                    "Reportes PDF/Excel exportables"
                ],
                demoUrl: "#",
                repoUrl: "#"
            },
            {
                title: "EcoLogistics Core",
                subtitle: "Plataforma de gestión de cadena de suministro para envíos sostenibles",
                problem: "Los sistemas de logística heredados no tenían en cuenta los datos de huella de carbono. El cliente necesitaba un sistema para optimizar rutas no solo por velocidad, sino por impacto ambiental.",
                architecture: "Arquitectura modular monolítica en Spring Boot para seguridad de tipos y rendimiento. Almacén clave-valor para caché de consultas de rutas frecuentes.",
                techStack: ["Spring Boot", "Java", "React", "MySQL", "Google Maps API", "Terraform"],
                features: [
                    "Calculadora de huella de carbono",
                    "Algoritmo de optimización de rutas",
                    "Portal de gestión de proveedores",
                    "Seguimiento de envíos en tiempo real",
                    "Panel de análisis"
                ],
                demoUrl: "#",
                repoUrl: "#"
            }
        ]
    }
};
