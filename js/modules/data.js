/**
 * Project Data Registry
 * Centralized source of truth for portfolio content.
 */
export const projectsData = [
    {
        id: 'project-1',
        title: 'Neural Interface',
        tags: 'AI / DASHBOARD',
        shortDescription: 'AI-driven sentiment analysis for high-frequency trading environments.',
        heroImage: 'assets/img/projects/1.jpg',
        thumbnail: 'assets/img/projects/thumbnails/1.jpg',
        role: 'Lead UI Designer',
        year: '2025',
        deliverables: 'Design System, React App',
        heading: 'Visualizing the invisible.',
        description: 'Neural Interface alleviates cognitive overload in high-frequency trading environments. By employing AI-driven summarization, we filter out noise and highlight only the most critical anomalies.',
        challenge: 'Traders face an overwhelming amount of data, leading to decision fatigue and missed opportunities. The existing tools were cluttered and lacked hierarchy.',
        solution: 'We developed a "Quiet Mode" interface that uses generative AI to summarize market sentiment. The UI adapts to market volatility, becoming more alert (red/high contrast) during crashes and calmer (blue/low contrast) during stable periods.',
        stack: ['React', 'D3.js', 'Python', 'Figma'],
        results: ['30% reduction in trade execution time', 'User error rate dropped by 15%', 'Adopted by 3 major hedge funds'],
        detailImage: 'assets/img/projects/1.jpg'
    },
    {
        id: 'project-2',
        title: 'Synth Wave',
        tags: 'MOBILE / AUDIO',
        shortDescription: 'Fluid, gestural controls for sculpting sound on touch surfaces.',
        heroImage: 'assets/img/projects/2.jpg',
        thumbnail: 'assets/img/projects/thumbnails/2.jpg',
        role: 'Product Designer',
        year: '2025',
        deliverables: 'Mobile App, Branding',
        heading: 'Sculpting sound with touch.',
        description: 'Synth Wave reimagines the synthesizer interface for the glass screens of modern devices. We moved away from skeuomorphic knobs to fluid, gestural controls that allow musicians to "mold" their sound.',
        challenge: 'Translating the tactile feedback of physical knobs to a flat screen is difficult. Musicians felt disconnected from the sound creation process on mobile.',
        solution: 'We utilized haptic feedback and 3D fluid simulations to create a "digital clay" interface. Users can pinch, pull, and smooth waveforms directly, making sound design feel physical.',
        stack: ['SwiftUI', 'AudioKit', 'Metal', 'Blender'],
        results: ['Featured in "App Store Editor\'s Choice"', '50k+ downloads in first month', 'Average session time increased by 40%'],
        detailImage: 'assets/img/projects/2.jpg'
    },
    {
        id: 'project-3',
        title: 'Cognitive Flow',
        tags: 'PRODUCTIVITY / WEB',
        shortDescription: 'A minimal workspace designed to induce and maintain flow states.',
        heroImage: 'assets/img/projects/3.jpg',
        thumbnail: 'assets/img/projects/thumbnails/3.jpg',
        role: 'UX Researcher',
        year: '2024',
        deliverables: 'Web App, User Testing',
        heading: 'Designing for deep work.',
        description: 'Cognitive Flow is a productivity tool designed to induce and maintain "flow states" for creators. We stripped away every non-essential pixel. The interface uses a dynamic monochromatic palette.',
        challenge: 'Most productivity apps are distracting themselves, filled with gamification and notifications that break concentration.',
        solution: 'We built an "Anti-Interface". The UI fades away when the user starts typing or designing. It only reappears when summoned. A "Focus Tunnel" visual effect helps users visually lock into their task.',
        stack: ['Vue.js', 'Electron', 'Firebase', 'Framer'],
        results: ['Users reported 2x longer deep work sessions', 'Lowest churn rate in category (2%)', 'Viral growth in the writer community'],
        detailImage: 'assets/img/projects/3.jpg'
    },
    {
        id: 'project-4',
        title: 'Organic Commerce',
        tags: 'E-COMMERCE / BRAND',
        shortDescription: 'Narrative-driven digital store for sustainable fashion brands.',
        heroImage: 'assets/img/projects/4.jpg',
        thumbnail: 'assets/img/projects/thumbnails/4.jpg',
        role: 'Full Stack Designer',
        year: '2025',
        deliverables: 'E-commerce, Branding',
        heading: 'Digital sustainability.',
        description: 'For this sustainable fashion brand, we wanted the digital store to feel as natural as the materials they use. We moved away from the cold, transactional feel of standard e-commerce to a narrative journey.',
        challenge: 'E-commerce sites often feel impersonal and urgency-driven, which clashed with the brand\'s slow-fashion ethos.',
        solution: 'We replaced the traditional grid with a "editorial walk" layout. Product details unfold like a story. The checkout process is designed as a conversation, not a form filling exercise.',
        stack: ['Next.js', 'Shopify Headless', 'WebGL', 'Tailwind'],
        results: ['Conversion rate for high-ticket items up 25%', 'Return rate dropped by 10%', 'Brand sentiment score reached all-time high'],
        detailImage: 'assets/img/projects/4.jpg'
    }
];
