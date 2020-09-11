const toggle = document.querySelector('#toggle');
const root = document.documentElement;
let darkMode = true;

function handleDarkMode(e) {

    darkMode = !darkMode;

    console.log(darkMode);
    
    this.classList.toggle('light');
    this.classList.toggle('dark');

    if (darkMode) {
        root.style.setProperty('--bg-colour', 'hsl(230, 17%, 14%)');
        root.style.setProperty('--stat-bg-color', 'hsl(228, 28%, 20%)');
        root.style.setProperty('--text-color', 'hsl(0, 0%, 100%)');
        root.style.setProperty('--desaturated-text-color', 'hsl(228, 34%, 66%)');
        root.style.setProperty('--toggle-color', 'linear-gradient(45deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))');
    } else {
        root.style.setProperty('--bg-colour', 'hsl(0, 0%, 100%)');
        root.style.setProperty('--stat-bg-color', 'hsl(227, 47%, 96%)');
        root.style.setProperty('--text-color', 'hsl(228, 12%, 44%)');
        root.style.setProperty('--desaturated-text-color', 'hsl(228, 12%, 44%)');
        root.style.setProperty('--toggle-color', 'linear-gradient(45deg, hsl(230, 22%, 74%), hsl(230, 22%, 74%))');
    }

}

toggle.addEventListener('click', handleDarkMode);


