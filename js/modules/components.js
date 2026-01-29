import { projectsData } from './data.js';

/**
 * Renders the HTML string for a project card.
 * @param {Object} project - The project data object.
 * @param {number} index - The index of the project.
 * @param {boolean} isFeatured - Whether this is for the featured section.
 * @returns {string} HTML string.
 */
export const renderProjectCard = (project, index, isFeatured) => `
    <a href="/${project.slug}" class="project-card reveal" aria-label="View project: ${project.title}">
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
 * @param {string} projectSlug - The slug of the project to render.
 * @returns {string} HTML string.
 */
export const renderDetailView = (projectSlug) => {
    const project = projectsData.find(p => p.slug === projectSlug);
    if (!project) return '';

    const idx = projectsData.findIndex(p => p.slug === projectSlug);
    const prev = projectsData[idx - 1] || projectsData[projectsData.length - 1];
    const next = projectsData[idx + 1] || projectsData[0];

    return `
        <section class="project-content">
            <div class="sticky-cta-bar">
                <div class="container">
                    <a href="${project.liveLink}" target="_blank" rel="noopener" class="btn-live">View Live ↗</a>
                    <a href="/contact" class="btn-live btn-secondary">Hire Me</a>
                </div>
            </div>
            <div class="container">
                <div class="detail-grid">
                <aside class="sticky-sidebar">
                    <div class="project-header-row">
                        <h1 class="project-title">${project.title}</h1>
                        <div class="project-meta-inline">
                            <div class="meta-item">
                                <span class="meta-label-inline">Role</span>
                                <span class="meta-value">${project.role}</span>
                            </div>
                            <div class="meta-divider"></div>
                            <div class="meta-item">
                                <span class="meta-label-inline">Year</span>
                                <span class="meta-value">${project.year}</span>
                            </div>
                            <div class="meta-divider"></div>
                            <div class="meta-item">
                                <span class="meta-label-inline">Deliverables</span>
                                <span class="meta-value">${project.deliverables}</span>
                            </div>
                            <div class="meta-divider"></div>
                            <div class="skills-inline">
                                ${project.stack.map(t => `<span class="skill-chip">${t}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </aside>
                <article>
                    <div class="overview-header">
                        <span class="meta-label">Overview</span>
                        <h2 class="display-title">${project.heading}</h2>
                    </div>
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
                        <a href="/${prev.slug}" class="nav-link prev" aria-label="Previous project: ${prev.title}">← ${prev.title}</a>
                        <a href="/${next.slug}" class="nav-link next" aria-label="Next project: ${next.title}">${next.title} →</a>
                    </nav>
                </article>
                </div>
            </div>
        </section>
    `;
};
