/* Dropdown for Download button of Resume & CV */
document.addEventListener('DOMContentLoaded', function() {
    // Dropdown functionality
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const menu = this.nextElementSibling;
            const isShown = menu.classList.contains('show');
            
            // Close all other dropdowns first
            document.querySelectorAll('.dropdown-menu.show').forEach(openMenu => {
                if (openMenu !== menu) {
                    openMenu.classList.remove('show');
                    openMenu.previousElementSibling.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Toggle current dropdown
            menu.classList.toggle('show');
            this.setAttribute('aria-expanded', isShown ? 'false' : 'true');
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function() {
        document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
            menu.classList.remove('show');
            menu.previousElementSibling.setAttribute('aria-expanded', 'false');
        });
    });
});