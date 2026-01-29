import { projectsData, getFeaturedProjects, getAllProjectsSorted } from './data.js';
import { renderProjectCard } from './components.js';
import { initRouter } from './router.js';
import { initUI } from './ui.js';
import { initContact } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Content Rendering ---
    const featuredGrid = document.getElementById('featured-projects-grid');
    if (featuredGrid) {
        featuredGrid.innerHTML = getFeaturedProjects()
            .map((p, i) => renderProjectCard(p, i, true))
            .join('');
    }

    const fullGrid = document.querySelector('.projects-full-grid');
    if (fullGrid) {
        fullGrid.innerHTML = getAllProjectsSorted()
            .map((p, i) => renderProjectCard(p, i, false))
            .join('');
    }

    // --- 2. System Initialization ---
    initRouter();
    initUI();
    initContact();
});
