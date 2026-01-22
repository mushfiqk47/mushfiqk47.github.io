/**
 * Contact Page Interactions
 * Handles clipboard operations and contact form logic (if added later).
 */

export const initContact = () => {
    const copyBtn = document.getElementById('copy-email-btn');
    const feedback = document.querySelector('.copy-feedback');

    if (copyBtn && feedback) {
        copyBtn.addEventListener('click', async () => {
            const email = copyBtn.dataset.email;

            try {
                await navigator.clipboard.writeText(email);

                // Visual Feedback
                feedback.classList.add('active');
                copyBtn.classList.add('copied');

                // Reset after 2s
                setTimeout(() => {
                    feedback.classList.remove('active');
                    copyBtn.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
                // Fallback (e.g., open mailto)
                window.location.href = `mailto:${email}`;
            }
        });
    }
};
