document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile_menu');
    const responsiveMenu = document.getElementById('responsive-menu');
    
    // Toggle menu when clicking the menu button
    mobileMenuButton.addEventListener('click', function(e) {
        e.preventDefault();
        responsiveMenu.classList.toggle('open');
    });

    // Close menu when clicking menu items
    const menuItems = responsiveMenu.getElementsByTagName('a');
    for(let item of menuItems) {
        item.addEventListener('click', function() {
            responsiveMenu.classList.remove('open');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!responsiveMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            responsiveMenu.classList.remove('open');
        }
    });
});
