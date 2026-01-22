import { projectsData } from './data.js';
import { renderProjectCard } from './components.js';
import { initRouter } from './router.js';
import { initUI } from './ui.js';
import { initContact } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Content Rendering ---
    const featuredGrid = document.getElementById('featured-projects-grid');
    if (featuredGrid) {
        featuredGrid.innerHTML = projectsData.slice(0, 2)
            .map((p, i) => renderProjectCard(p, i, true))
            .join('');
    }

    const fullGrid = document.querySelector('.projects-full-grid');
    if (fullGrid) {
        fullGrid.innerHTML = projectsData
            .map((p, i) => renderProjectCard(p, i, false))
            .join('');
    }

    // --- 2. System Initialization ---
    initRouter();
    initUI();
    initContact();

    // Log init for debug (remove in production if strict)
    console.log('System Initialized: MUSHFIQ KABIR Digital Portfolio');
});
