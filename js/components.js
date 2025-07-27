// components.js
class SiteNav extends HTMLElement {
    connectedCallback() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const isIndexPage = currentPage === 'index.html';
        
        this.innerHTML = `
        <nav>
            <div class="nav-container">
            <div class="logo">
                <img src="img/profile.jpg" alt="Jonard Cyrus Francisco" class="profile-logo">
            </div>
            <button class="mobile-menu-btn" aria-label="Toggle menu">☰</button>
            <ul class="nav-links">
                <li><a href="index.html" ${this.isActive('index.html', currentPage)}>Home</a></li>
                <li><a href="${isIndexPage ? '#about' : 'index.html#about'}" 
                    ${this.isSectionActive('about')}>About</a></li>
                <li><a href="${isIndexPage ? '#skills' : 'index.html#skills'}" 
                    ${this.isSectionActive('skills')}>Skills</a></li>
                <li><a href="projects.html" ${this.isActive('projects.html', currentPage)}>Projects</a></li>
                <li><a href="certifications.html" ${this.isActive('certifications.html', currentPage)}>Certifications</a></li>
                <li><a href="practicum.html" ${this.isActive('practicum.html', currentPage)}>Practicum</a></li>
                <li><a href="contact.html" ${this.isActive('contact.html', currentPage)}>Contact</a></li>
            </ul>
            </div>
        </nav>
        `;

        // Add scroll event listener for index page sections
        if (isIndexPage) {
        window.addEventListener('scroll', this.handleScroll.bind(this));
        this.handleScroll(); // Initial check
        }
    }

    isActive(page, currentPage) {
        return page === currentPage ? 'class="active"' : '';
    }

    isSectionActive(sectionId) {
        if (window.location.pathname.split('/').pop() !== 'index.html') return '';
        return window.location.hash === `#${sectionId}` ? 'class="active"' : '';
    }

    handleScroll() {
        const sections = ['about', 'skills'];
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
            const navLink = this.querySelector(`a[href="#${section}"]`);
            const sectionTop = element.offsetTop;
            const sectionBottom = sectionTop + element.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navLink.classList.add('active');
            } else {
            navLink.classList.remove('active');
            }
        }
        });
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