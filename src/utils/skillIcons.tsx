import type { JSX } from 'react';
import { FaJava } from "react-icons/fa";
import {
    SiJavascript, SiPython, SiPostgresql, SiMysql,
    SiSpringboot, SiSpringsecurity, SiHibernate, SiReact, SiVite, SiFlutter,
    SiDocker, SiDigitalocean, SiGit, SiGithub, SiApachemaven, SiPostman, SiLinux,
    SiHtml5, SiCss3, SiTailwindcss
} from 'react-icons/si';
import { VscCode, VscDatabase } from "react-icons/vsc";

export const getSkillIcon = (skillName: string): JSX.Element => {
    // Normalize string to lowercase and remove spaces/special chars for matching
    const normalizedKey = skillName.toLowerCase().replace(/[^a-z0-9]/g, '');

    if (normalizedKey.includes('java') && !normalizedKey.includes('script')) return <FaJava />;
    if (normalizedKey.includes('javascript')) return <SiJavascript />;
    if (normalizedKey.includes('python')) return <SiPython />;
    if (normalizedKey.includes('sql') && !normalizedKey.includes('my') && !normalizedKey.includes('post')) return <VscDatabase />; // Generic SQL
    if (normalizedKey.includes('postgresql')) return <SiPostgresql />;
    if (normalizedKey.includes('mysql')) return <SiMysql />;

    if (normalizedKey.includes('springboot')) return <SiSpringboot />;
    if (normalizedKey.includes('springsecurity')) return <SiSpringsecurity />;
    if (normalizedKey.includes('hibernate') || normalizedKey.includes('jpa')) return <SiHibernate />;
    if (normalizedKey.includes('react')) return <SiReact />;
    if (normalizedKey.includes('vite')) return <SiVite />;
    if (normalizedKey.includes('flutter')) return <SiFlutter />;
    if (normalizedKey.includes('html')) return <SiHtml5 />;
    if (normalizedKey.includes('css')) return <SiCss3 />;
    if (normalizedKey.includes('tailwind')) return <SiTailwindcss />;

    if (normalizedKey.includes('docker')) return <SiDocker />;
    if (normalizedKey.includes('digitalocean')) return <SiDigitalocean />;
    if (normalizedKey.includes('git') && !normalizedKey.includes('github')) return <SiGit />;
    if (normalizedKey.includes('github')) return <SiGithub />;
    if (normalizedKey.includes('maven')) return <SiApachemaven />;
    if (normalizedKey.includes('postman')) return <SiPostman />;
    if (normalizedKey.includes('linux')) return <SiLinux />;

    // Default icon
    return <VscCode />;
};
