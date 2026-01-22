import { renderDetailView } from './components.js';

export const initRouter = () => {
    const dynamicProjectContainer = document.getElementById('dynamic-project-container');
    const pages = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const footerLocText = document.getElementById('loc-text');

    const updateActiveState = (hash) => {
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            // Active if exact match or if inside a project and the link is 'Projects'
            const isActive = href === hash || (hash.startsWith('#project-') && href === '#projects');
            link.classList.toggle('active', isActive);
            if (isActive) link.setAttribute('aria-current', 'page');
            else link.removeAttribute('aria-current');
        });

        // Update Footer Label
        if (footerLocText) {
            let label = 'DHAKA, BANGLADESH';
            if (hash.includes('project-')) label = 'CASE STUDY';
            else if (hash === '#projects') label = 'PORTFOLIO';
            else if (hash === '#about') label = 'ABOUT ME';
            else if (hash === '#contact') label = 'LET\'S TALK';

            footerLocText.textContent = label;
        }
    };

    const handleNavigation = () => {
        let hash = window.location.hash || '#home';
        if (hash === '#') hash = '#home';

        if (hash.startsWith('#project-')) {
            const projectId = hash.substring(1);
            const detailHtml = renderDetailView(projectId);

            if (detailHtml && dynamicProjectContainer) {
                dynamicProjectContainer.innerHTML = detailHtml;
                pages.forEach(p => p.classList.remove('active', 'fade-in'));
                dynamicProjectContainer.classList.add('active');

                // Small delay for fade-in animation
                setTimeout(() => dynamicProjectContainer.classList.add('fade-in'), 50);
                window.scrollTo({ top: 0, behavior: 'instant' });
            }
        } else {
            const target = document.querySelector(hash);
            if (target) {
                const section = target.closest('.page-section');
                if (section) {
                    const isNew = !section.classList.contains('active');
                    pages.forEach(p => p.classList.remove('active', 'fade-in'));
                    section.classList.add('active');
                    if (isNew) setTimeout(() => section.classList.add('fade-in'), 50);

                    // Scroll Logic
                    if (['#home', '#projects', '#contact'].includes(hash)) {
                        window.scrollTo({ top: 0, behavior: isNew ? 'instant' : 'smooth' });
                    } else if (!isNew) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    } else {
                        setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 50);
                    }
                }
            }
        }
        updateActiveState(hash);
    };

    window.addEventListener('hashchange', handleNavigation);

    // Initial call
    requestAnimationFrame(handleNavigation);
};
