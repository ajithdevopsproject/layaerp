document.addEventListener('DOMContentLoaded', function() {

 
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Initialize charts with animation
    setTimeout(() => {
        document.querySelectorAll('.pie-chart').forEach(chart => {
            chart.style.transition = 'background 1s ease-in-out';
        });
    }, 500);
	
	document.addEventListener('DOMContentLoaded', function() {
    // Initialize project management system
    initProjectManagement();
});

function initProjectManagement() {
    // Load initial content for dashboard
    loadTabContent('dashboard');
    
    // Set up tab navigation
    const submenuItems = document.querySelectorAll('.submenu-item');
    submenuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab
            submenuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Show selected tab content
            document.querySelectorAll('.content-tabs').forEach(tab => {
                tab.classList.remove('active');
                if (tab.id === tabId) {
                    tab.classList.add('active');
                    loadTabContent(tabId);
                }
            });
        });
    });
    

}
});