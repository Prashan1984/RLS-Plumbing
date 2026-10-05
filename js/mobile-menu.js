document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile_menu');
    const responsiveMenu = document.getElementById('responsive-menu');
    const siteHeader = document.querySelector('.site-header');

    // Anchor the menu directly beneath the fixed header instead of a hardcoded offset
    const syncMenuTop = function() {
        responsiveMenu.style.top = siteHeader.offsetHeight + 'px';
    };
    syncMenuTop();
    window.addEventListener('resize', syncMenuTop);

    const setMenuOpen = function(isOpen) {
        responsiveMenu.classList.toggle('open', isOpen);
        mobileMenuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    };

    // Toggle menu when clicking the menu button
    mobileMenuButton.addEventListener('click', function(e) {
        e.preventDefault();
        setMenuOpen(!responsiveMenu.classList.contains('open'));
    });

    // Close menu when clicking menu items
    const menuItems = responsiveMenu.getElementsByTagName('a');
    for (let item of menuItems) {
        item.addEventListener('click', function() {
            setMenuOpen(false);
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!responsiveMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            setMenuOpen(false);
        }
    });
});
