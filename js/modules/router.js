import { renderDetailView } from './components.js';
import { getProjectBySlug } from './data.js';

/**
 * Path-based Router using History API
 * Handles clean URLs like /home, /projects, /flux
 */
export const initRouter = () => {
    const dynamicProjectContainer = document.getElementById('dynamic-project-container');
    const pages = document.querySelectorAll('.page-section');
    const footerLocText = document.getElementById('loc-text');

    // Get the current path from URL
    const getPath = () => {
        let path = window.location.pathname;
        // Handle GitHub Pages redirect from 404.html
        const params = new URLSearchParams(window.location.search);
        const redirectedPath = params.get('p');
        if (redirectedPath) {
            // Clean up the URL and use the redirected path
            path = decodeURIComponent(redirectedPath);
            window.history.replaceState(null, '', path);
        }
        // Remove trailing slash and leading slash for consistency
        return path.replace(/^\/|\/$/g, '') || 'home';
    };

    // Check if a path is a project slug
    const isProjectSlug = (path) => {
        return getProjectBySlug(path) !== undefined;
    };

    // Navigate to a path
    const navigateTo = (path, pushState = true) => {
        const cleanPath = path.replace(/^\/|\/$/g, '') || 'home';
        if (pushState) {
            window.history.pushState(null, '', '/' + cleanPath);
        }
        handleNavigation();
    };

    const updateActiveState = (path) => {
        const isProject = isProjectSlug(path);
        const navLinks = document.querySelectorAll('.nav-links a, .mobile-links a, .footer-nav a, .logo');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (!href || href.startsWith('http') || href.startsWith('mailto') || href.includes('.pdf')) return;

            const linkPath = href.replace(/^\/|\/$/g, '');
            // Active if exact match or if inside a project and the link is 'projects'
            const isActive = linkPath === path || (isProject && linkPath === 'projects');
            link.classList.toggle('active', isActive);
            if (isActive) link.setAttribute('aria-current', 'page');
            else link.removeAttribute('aria-current');
        });

        // Update Footer Label
        if (footerLocText) {
            let label = 'DHAKA, BANGLADESH';
            if (isProject) label = 'CASE STUDY';
            else if (path === 'projects') label = 'PORTFOLIO';
            else if (path === 'about') label = 'ABOUT ME';
            else if (path === 'contact') label = "LET'S TALK";

            footerLocText.textContent = label;
        }
    };

    const handleNavigation = () => {
        const path = getPath();
        const project = getProjectBySlug(path);

        if (project) {
            // Render project detail view
            const detailHtml = renderDetailView(path);

            if (detailHtml && dynamicProjectContainer) {
                dynamicProjectContainer.innerHTML = detailHtml;
                pages.forEach(p => p.classList.remove('active', 'fade-in'));
                dynamicProjectContainer.classList.add('active');

                setTimeout(() => dynamicProjectContainer.classList.add('fade-in'), 50);
                window.scrollTo({ top: 0, behavior: 'instant' });
            }
        } else {
            // Render page section
            const sectionId = path === 'about' ? 'home' : path; // About is inside home
            const target = document.getElementById(sectionId) || document.getElementById('home');

            if (target) {
                const section = target.closest('.page-section') || target;
                if (section.classList.contains('page-section')) {
                    const isNew = !section.classList.contains('active');
                    pages.forEach(p => p.classList.remove('active', 'fade-in'));
                    section.classList.add('active');
                    if (isNew) setTimeout(() => section.classList.add('fade-in'), 50);

                    // Scroll Logic
                    if (['home', 'projects', 'contact'].includes(path)) {
                        window.scrollTo({ top: 0, behavior: isNew ? 'instant' : 'smooth' });
                    } else if (path === 'about') {
                        // Scroll to the about section within home
                        const aboutSection = document.getElementById('about');
                        if (aboutSection) {
                            setTimeout(() => {
                                aboutSection.scrollIntoView({ behavior: isNew ? 'instant' : 'smooth' });
                            }, isNew ? 50 : 0);
                        }
                    }
                }
            }
        }
        updateActiveState(path);
    };

    // Intercept all internal link clicks
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!href) return;

        // Skip external links, mailto, and file downloads
        if (href.startsWith('http') || href.startsWith('mailto') || href.includes('.pdf') || link.hasAttribute('target')) {
            return;
        }

        // Handle internal navigation
        e.preventDefault();

        // Clean the path (remove leading # or /)
        const path = href.replace(/^[#\/]/, '');
        navigateTo(path);
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', handleNavigation);

    // Initial call
    requestAnimationFrame(handleNavigation);

    // Expose for external use
    window.navigateTo = navigateTo;
};
