/**
 * UI Interactions Module
 * Handles animations, mobile menu, and visual effects.
 */

export const initUI = () => {
    initNavbar();
    initMobileMenu();
    initRevealObserver();
    initClipPathNavigation();
    initIcons();
};

const initNavbar = () => {
    const nav = document.getElementById('main-nav');
    if (!nav) return;

    // Throttled scroll listener
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                nav.classList.toggle('scrolled', window.scrollY > 50);
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
};

const initMobileMenu = () => {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-links a');

    if (!mobileBtn || !mobileOverlay) return;

    const toggleMenu = (isActive) => {
        const expanded = isActive ? 'true' : 'false';
        mobileBtn.setAttribute('aria-expanded', expanded);
        mobileBtn.classList.toggle('active', isActive);
        mobileOverlay.classList.toggle('active', isActive);
        document.body.classList.toggle('menu-open', isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';
    };

    mobileBtn.addEventListener('click', () => toggleMenu(!mobileBtn.classList.contains('active')));

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });
};

const initRevealObserver = () => {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .expertise-card, .bento-tile, .tool-tile').forEach(el => revealObserver.observe(el));
};

const initIcons = () => {
    if (window.lucide) window.lucide.createIcons();
};

// --- CLIP PATH SOCIAL GRID LOGIC ---
const initClipPathNavigation = () => {
    const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
    const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
    const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
    const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
    const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

    const ENTRANCE_KEYFRAMES = {
        left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
        bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
        top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
        right: [TOP_LEFT_CLIP, NO_CLIP],
    };

    const EXIT_KEYFRAMES = {
        left: [NO_CLIP, TOP_RIGHT_CLIP],
        bottom: [NO_CLIP, TOP_RIGHT_CLIP],
        top: [NO_CLIP, TOP_RIGHT_CLIP],
        right: [NO_CLIP, BOTTOM_LEFT_CLIP],
    };

    const getNearestSide = (e, element) => {
        const box = element.getBoundingClientRect();
        const proximityToLeft = { proximity: Math.abs(box.left - e.clientX), side: "left" };
        const proximityToRight = { proximity: Math.abs(box.right - e.clientX), side: "right" };
        const proximityToTop = { proximity: Math.abs(box.top - e.clientY), side: "top" };
        const proximityToBottom = { proximity: Math.abs(box.bottom - e.clientY), side: "bottom" };

        const sortedProximity = [
            proximityToLeft, proximityToRight, proximityToTop, proximityToBottom
        ].sort((a, b) => a.proximity - b.proximity);

        return sortedProximity[0].side;
    };

    document.querySelectorAll('.clip-link-box').forEach(box => {
        const overlay = box.querySelector('.clip-link-overlay');
        if (!overlay) return;

        box.addEventListener('mouseenter', (e) => {
            const side = getNearestSide(e, box);
            const keyframes = ENTRANCE_KEYFRAMES[side];
            if (keyframes) {
                overlay.animate([
                    { clipPath: keyframes[0] },
                    { clipPath: keyframes[1] }
                ], { duration: 300, easing: 'ease-out', fill: 'forwards' });
            }
        });

        box.addEventListener('mouseleave', (e) => {
            const side = getNearestSide(e, box);
            const keyframes = EXIT_KEYFRAMES[side];
            if (keyframes) {
                overlay.animate([
                    { clipPath: keyframes[0] },
                    { clipPath: keyframes[1] }
                ], { duration: 300, easing: 'ease-out', fill: 'forwards' });
            }
        });
    });
};
