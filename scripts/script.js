const toggle = document.querySelector('#toggle');

function handleDarkMode() {
    
    this.classList.toggle('dark');
    this.classList.toggle('light');

}

toggle.addEventListener('click', handleDarkMode);