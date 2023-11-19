function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
function openTab(tabId) {
    // Hide all tab contents
    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function(content) {
      content.classList.remove('active');
    });
  
    // Show the selected tab content
    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');
  }
  