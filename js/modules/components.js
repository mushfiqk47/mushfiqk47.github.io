import { projectsData } from './data.js';

/**
 * Renders the HTML string for a project card.
 * @param {Object} project - The project data object.
 * @param {number} index - The index of the project.
 * @param {boolean} isFeatured - Whether this is for the featured section.
 * @returns {string} HTML string.
 */
export const renderProjectCard = (project, index, isFeatured) => `
    <a href="#${project.id}" class="project-card reveal" aria-label="View project: ${project.title}">
        <div class="card-image-wrapper">
            <img src="${project.thumbnail}" alt="" loading="lazy" class="project-thumb">
            <div class="card-overlay">
                <span class="view-project-btn">View Case Study</span>
            </div>
        </div>
        <div class="card-info">
            <div class="card-titles-wrapper">
                <h3 class="card-title">${project.title}</h3>
                <span class="project-id-badge">0${index + 1}</span>
            </div>
            <p class="card-description">${project.shortDescription}</p>
            <div class="card-tags">
                ${project.tags.split('/').map(tag => `<span class="mini-tag">${tag.trim()}</span>`).join('')}
            </div>
        </div>
    </a>
`;

/**
 * Renders the full detail view for a specific project.
 * @param {string} projectId - The ID of the project to render.
 * @returns {string} HTML string.
 */
export const renderDetailView = (projectId) => {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return '';

    const idx = projectsData.findIndex(p => p.id === projectId);
    const prev = projectsData[idx - 1] || projectsData[projectsData.length - 1];
    const next = projectsData[idx + 1] || projectsData[0];

    return `
        <div class="project-hero">
            <img src="${project.heroImage}" alt="Hero image for ${project.title}" class="hero-img">
        </div>
        <section class="project-content">
            <div class="container">
                <div class="detail-grid">
                <aside class="sticky-sidebar">
                    <h1 class="hero-title">${project.title}</h1>
                    <dl class="project-meta">
                        <dt class="meta-label">ROLE</dt> <dd>${project.role}</dd>
                        <dt class="meta-label">YEAR</dt> <dd>${project.year}</dd>
                        <dt class="meta-label">DELIVERABLES</dt> <dd>${project.deliverables}</dd>
                    </dl>
                    <div class="tech-stack-section">
                        <span class="meta-label">SKILL STACK</span>
                        <div class="skills-tag-cloud">
                            ${project.stack.map(t => `<span class="skill-tag">${t}</span>`).join('')}
                        </div>
                    </div>
                    <div class="cta-wrapper">
                        <a href="${project.liveLink}" target="_blank" rel="noopener" class="btn-live">Live Link  ↗</a>
                        <a href="#contact" class="btn-live btn-secondary">Work with me</a>
                    </div>
                </aside>
                <article>
                    <span class="meta-label">Overview</span>
                    <h2 class="display-title">${project.heading}</h2>
                    <p class="lead-text">${project.description}</p>
                    
                    <div class="case-study-grid">
                        <div class="card">
                            <span class="meta-label">THE CHALLENGE</span>
                            <p>${project.challenge}</p>
                        </div>
                        <div class="card">
                            <span class="meta-label">THE SOLUTION</span>
                            <p>${project.solution}</p>
                        </div>
                    </div>

                    <div class="detail-gallery">
                        <img src="${project.detailImage}" alt="Detailed view of the solution" loading="lazy">
                    </div>

                    <div class="results-section card-solar">
                        <span class="meta-label inverted">KEY RESULTS</span>
                        <ul class="results-list">
                            ${project.results.map(r => `<li>— ${r}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <nav class="project-nav" aria-label="Project Navigation">
                        <a href="#${prev.id}" class="nav-link prev" aria-label="Previous project: ${prev.title}">← ${prev.title}</a>
                        <a href="#${next.id}" class="nav-link next" aria-label="Next project: ${next.title}">${next.title} →</a>
                    </nav>
                </article>
                </div>
            </div>
        </section>
    `;
};
