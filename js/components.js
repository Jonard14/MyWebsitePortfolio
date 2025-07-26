class SiteNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <!-- Navigation -->
            <nav>
                <div class="nav-container">
                    <div class="logo">
                        <img src="img/profile.jpg" alt="Jonard Cyrus Francisco" class="profile-logo">
                    </div>
                    <button class="mobile-menu-btn" aria-label="Toggle menu">☰</button>
                    <ul class="nav-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="certifications.html">Certifications</a></li>
                        <li><a href="practicum.html">Practicum</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </nav>
        `;
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