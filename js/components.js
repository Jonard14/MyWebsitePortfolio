// components.js
class SiteNav extends HTMLElement {
    connectedCallback() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const isIndexPage = currentPage === 'index.html';
        const isCertPage = currentPage === 'certifications.html';
        
        this.innerHTML = `
        <nav>
            <div class="nav-container">
            <div class="logo">
                <img src="img/profile.jpg" alt="Jonard Cyrus Francisco" class="profile-logo">
            </div>
            <button class="mobile-menu-btn" aria-label="Toggle menu">☰</button>
            <ul class="nav-links">
                <li><a href="${isIndexPage ? '#home' : 'index.html#home'}" ${this.isSectionActive('home')}>Home</a></li>
                <li><a href="${isIndexPage ? '#about' : 'index.html#about'}" ${this.isSectionActive('about')}>About</a></li>
                <li><a href="${isIndexPage ? '#skills' : 'index.html#skills'}" ${this.isSectionActive('skills')}>Skills</a></li>
                <li><a href="projects.html" ${this.isActive('projects.html', currentPage)}>Projects</a></li>
                <li><a href="${isCertPage ? '#certifications' : 'certifications.html#certifications'}" ${this.isSectionActive('certifications')}>Certifications</a></li>
                <li><a href="${isCertPage ? '#seminarworkshop' : 'certifications.html#seminarworkshop'}" ${this.isSectionActive('seminarworkshop')}>Seminar/Workshop</a></li>
                <li><a href="practicum.html" ${this.isActive('practicum.html', currentPage)}>Practicum</a></li>
                <li><a href="contact.html" ${this.isActive('contact.html', currentPage)}>Contact</a></li>
            </ul>
            </div>
        </nav>
        `;

        // Add scroll event listener for index and certifications page sections
        if (isIndexPage) {
            window.addEventListener('scroll', () => this.handleScroll(['home', 'about', 'skills']));
            this.handleScroll(['home', 'about', 'skills']);
        }
        if (isCertPage) {
            window.addEventListener('scroll', () => this.handleScroll(['certifications', 'seminarworkshop']));
            this.handleScroll(['certifications', 'seminarworkshop']);
        }
    }

    isActive(page, currentPage) {
        return page === currentPage ? 'class="active"' : '';
    }

    isSectionActive(sectionId) {
        // Highlight if hash matches section or if at top for 'home'
        const hash = window.location.hash;
        if (sectionId === 'home') {
            if (hash === '#home' || (!hash && window.location.pathname.endsWith('index.html'))) {
                return 'class="active"';
            }
        }
        return hash === `#${sectionId}` ? 'class="active"' : '';
    }

    handleScroll(sections) {
        const scrollPosition = window.scrollY + 100;
        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const navLink = this.querySelector(`a[href*="#${section}"]`);
                const sectionTop = element.offsetTop;
                const sectionBottom = sectionTop + element.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
        // Special case for "Home" at top of page
        if (sections.includes('home')) {
            const homeLink = this.querySelector(`a[href*="#home"]`);
            if (window.scrollY < 50) {
                homeLink.classList.add('active');
            } else {
                homeLink.classList.remove('active');
            }
        }
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <!-- Footer -->
            <footer>
                <div class="container">
                    <p>My Contacts</p><br>
                    <div class="social-links">
                        <a href="https://linkedin.com/in/jonard-cyrus-francisco/" class="social-link" target="_blank">💼</a>
                        <a href="https://github.com/Jonard14" class="social-link" target="_blank">💻</a>
                        <a href="mailto:jonardfrancisco.work@gmail.com" class="social-link">📧</a>
                    </div>
                    <!--<p>&copy; 2025 Jonard Cyrus Francisco. All rights reserved.</p>-->
                </div>
            </footer>
        `;
    }
}

customElements.define('site-nav', SiteNav);
customElements.define('site-footer', SiteFooter);