document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    
    function toggleMobileMenu() {
        mobileMenuOverlay.classList.toggle('show');
        // Close other menus when mobile menu opens
        if (mobileMenuOverlay.classList.contains('show')) {
            advancedSidebar.classList.remove('show');
            messageWindow.classList.remove('show');
        }
    }
    
    mobileMenuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMobileMenu();
    });
    
    // More menu button - shows advanced menu
    const moreMenuButton = document.getElementById('moreMenuButton');
    const advancedSidebar = document.getElementById('advancedSidebar');
    
    moreMenuButton.addEventListener('click', function(e) {
        e.stopPropagation();
        advancedSidebar.classList.toggle('show');
        // Close other menus when advanced menu opens
        if (advancedSidebar.classList.contains('show')) {
            mobileMenuOverlay.classList.remove('show');
            messageWindow.classList.remove('show');
        }
    });
    
    // Notification button - shows message window
    const notificationButton = document.getElementById('notificationButton');
    const messageWindow = document.getElementById('messageWindow');
    const closeMessageWindow = document.getElementById('closeMessageWindow');
    
    notificationButton.addEventListener('click', function(e) {
        e.stopPropagation();
        messageWindow.classList.toggle('show');
        // Close other menus when message window opens
        if (messageWindow.classList.contains('show')) {
            mobileMenuOverlay.classList.remove('show');
            advancedSidebar.classList.remove('show');
        }
    });
    
    closeMessageWindow.addEventListener('click', function() {
        messageWindow.classList.remove('show');
    });
    
    // Close menus when clicking outside
    document.addEventListener('click', function(event) {
        // Mobile menu
        if (!mobileMenuOverlay.contains(event.target) && event.target !== mobileMenuToggle) {
            mobileMenuOverlay.classList.remove('show');
        }
        
        // Advanced menu
        if (!advancedSidebar.contains(event.target) && event.target !== moreMenuButton) {
            advancedSidebar.classList.remove('show');
        }
        
        // Message window
        if (!messageWindow.contains(event.target) && event.target !== notificationButton) {
            messageWindow.classList.remove('show');
        }
    });
    
    // Auto-close mobile menu when resizing to desktop
    function handleResize() {
        if (window.innerWidth >= 992 && mobileMenuOverlay.classList.contains('show')) {
            mobileMenuOverlay.classList.remove('show');
        }
    }
    
    window.addEventListener('resize', handleResize);
    
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl, {
            placement: 'bottom'
        });
    });
    
    // Digital Clock
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // Convert 0 to 12
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        document.getElementById('clockDisplay').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    }
    
    // Only run clock if the element exists (for mobile where it's hidden)
    if (document.getElementById('digitalClock')) {
        updateClock();
        setInterval(updateClock, 1000);
    }
    
    // Initialize charts with animation
    setTimeout(() => {
        document.querySelectorAll('.pie-chart').forEach(chart => {
            chart.style.transition = 'background 1s ease-in-out';
        });
    }, 500);
});