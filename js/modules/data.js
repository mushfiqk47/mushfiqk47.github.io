/**
 * Project Data Registry
 * Centralized source of truth for portfolio content.
 * 
 * Fields:
 * - isFeatured: boolean - Show this project on the home page featured section
 * - position: number - Display order (1 = first, 2 = second, etc.)
 */
export const projectsData = [
    {
        id: 'project-1',
        title: 'Flux',
        tags: 'HEALTH / DASHBOARD',
        isFeatured: true,
        position: 1,
        shortDescription: 'A dark-themed health tracking dashboard with energy, heart rate, activity, and sleep analytics.',
        heroImage: 'assets/img/projects/1.webp',
        thumbnail: 'assets/img/projects/thumbnails/1.webp',
        liveLink: 'https://www.behance.net/gallery/242941823/Flux-Health-Wellness-Dashboard-UI',
        role: 'UI/UX Designer',
        year: '2024',
        deliverables: 'Dashboard UI, Design System',
        heading: 'Visualizing wellness data.',
        description: 'Flux is a comprehensive health tracking dashboard designed to give users a clear, at-a-glance view of their daily wellness metrics. The dark interface reduces eye strain while vibrant accent colors highlight critical data points.',
        challenge: 'Health data is inherently complex, with multiple metrics competing for attention. Users often feel overwhelmed by dense dashboards that fail to prioritize actionable insights.',
        solution: 'We created a card-based layout with a clear visual hierarchy. Each metric card (Energy, Heart Rate, Activity, Sleep) uses consistent patterns but unique accent colors for quick recognition. The Wellness Index provides a single "score" to summarize overall health.',
        stack: ['Figma', 'Design Systems', 'Data Visualization', 'Dark UI'],
        results: ['85% user satisfaction in usability testing', 'Clear hierarchy reduced cognitive load', 'Pro tier upgrade flow increased conversions'],
        detailImage: 'assets/img/projects/1.webp'
    },
    {
        id: 'project-2',
        title: 'Sanzid Portfolio',
        tags: 'PORTFOLIO / WEB',
        isFeatured: true,
        position: 2,
        shortDescription: 'A dark, system-inspired portfolio for a UI/UX designer showcasing skills and projects.',
        heroImage: 'assets/img/projects/4.webp',
        thumbnail: 'assets/img/projects/thumbnails/4.webp',
        liveLink: 'https://sanzid1367.github.io/',
        role: 'UI/UX Designer',
        year: '2025',
        deliverables: 'Portfolio Website, Personal Branding',
        heading: 'Redefining digital presence.',
        description: 'A personal portfolio for Sanzid Zama, a UI/UX designer based in Dhaka. The site uses a dark, system-inspired aesthetic with technical terminology to communicate precision and expertise.',
        challenge: 'Generic portfolio templates fail to differentiate designers in a competitive market. The design itself must demonstrate the designer\'s skills and unique perspective.',
        solution: 'We crafted a dark-themed portfolio with a "system registry" metaphor. Technical labels like "System_Core", "Capabilities & Stack", and "Project Archive" create a unique narrative. The minimal color palette (black, white, green accents) keeps focus on the work.',
        stack: ['Figma', 'Web Design', 'Personal Branding', 'Dark UI'],
        results: ['Portfolio stands out in recruiter feedback', 'Clear project archive improves navigation', 'Contact CTA drives connection requests'],
        detailImage: 'assets/img/projects/4.webp'
    },
    {
        id: 'project-3',
        title: 'Mitchell',
        tags: 'REAL ESTATE / WEB',
        isFeatured: false,
        position: 3,
        shortDescription: 'A real estate investment platform connecting buyers with exclusive properties in Dhaka.',
        heroImage: 'assets/img/projects/3.webp',
        thumbnail: 'assets/img/projects/thumbnails/3.webp',
        liveLink: 'https://www.behance.net/gallery/241157729/Design-Builds-Trust-in-Real-Estate',
        role: 'UI/UX Designer',
        year: '2024',
        deliverables: 'Landing Page, Property Listings',
        heading: 'Your trusted realtor.',
        description: 'Mitchell is a real estate platform focused on investment properties in Dhaka, Bangladesh. The landing page establishes trust through social proof, clear value propositions, and a streamlined property search experience.',
        challenge: 'Real estate websites are often cluttered and overwhelming. Investors need quick access to key metrics like ROI, location advantages, and pricing without wading through irrelevant information.',
        solution: 'We built a clean, modern landing page with prominent CTAs, investment statistics ($500M+ value, 10K+ clients), and a curated property grid. The FAQ section addresses common investor concerns upfront.',
        stack: ['Figma', 'Web Design', 'Landing Page', 'Conversion Optimization'],
        results: ['25% increase in consultation bookings', 'Average time on page increased by 2 minutes', 'Testimonials boosted trust metrics'],
        detailImage: 'assets/img/projects/3.webp'
    },
    {
        id: 'project-4',
        title: 'StandupSync',
        tags: 'SAAS / PRODUCTIVITY',
        isFeatured: false,
        position: 4,
        shortDescription: 'A team standup management tool with daily check-ins, blocker tracking, and team pulse visualization.',
        heroImage: 'assets/img/projects/2.webp',
        thumbnail: 'assets/img/projects/thumbnails/2.webp',
        liveLink: 'https://www.behance.net/gallery/243084305/StandupSync-Remote-Team-Dashboard-UI',
        role: 'Product Designer',
        year: '2025',
        deliverables: 'Web App, Design System',
        heading: 'Your team\'s daily pulse.',
        description: 'StandupSync reimagines the daily standup for remote and hybrid teams. Instead of long meetings, team members post async updates covering yesterday\'s work, today\'s plans, and any blockers.',
        challenge: 'Daily standups often run long and interrupt deep work. Remote teams struggle with timezone differences, making synchronous meetings impractical.',
        solution: 'We designed an asynchronous check-in system with a structured Yesterday/Today/Blockers format. The Team Pulse visualization shows at-a-glance who has checked in. Active Blockers are surfaced prominently so managers can act quickly.',
        stack: ['Figma', 'User Research', 'SaaS Design'],
        results: ['Reduced standup time by 70%', 'Blocker resolution time improved by 40%', 'Adopted by 3 engineering teams'],
        detailImage: 'assets/img/projects/2.webp'
    }
];

/**
 * Get featured projects sorted by position
 * @returns {Array} Featured projects sorted by position
 */
export const getFeaturedProjects = () => {
    return projectsData
        .filter(p => p.isFeatured)
        .sort((a, b) => a.position - b.position);
};

/**
 * Get all projects sorted by position
 * @returns {Array} All projects sorted by position
 */
export const getAllProjectsSorted = () => {
    return [...projectsData].sort((a, b) => a.position - b.position);
};
