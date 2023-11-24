
function toggleAccessibilityWindow() {
    const accessibilityWindow = document.getElementById('accessibilityWindow');
    accessibilityWindow.style.display = accessibilityWindow.style.display === 'none' ? 'block' : 'none';
}
function startDrag() {
    const window = document.getElementById('accessibilityWindow');
    let offsetX, offsetY;

    window.style.cursor = 'grab';

    function handleDragStart(e) {
        offsetX = e.clientX - window.getBoundingClientRect().left;
        offsetY = e.clientY - window.getBoundingClientRect().top;
        window.style.cursor = 'grabbing';
    }

    function handleDragEnd() {
        window.style.cursor = 'grab';
    }

    function handleDragMove(e) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        window.style.left = `${x}px`;
        window.style.top = `${y}px`;
    }

    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', handleDragMove);
        handleDragEnd();
    });

    handleDragStart(event);
}

function changeWindowPosition() {
    alert('Changing position...');
}

function changeLanguage() {
}
function closeAccessibilityWindow() {
    document.getElementById('accessibilityWindow').style.display = 'none';
}


function resetSettings() {
    alert('Resetting settings...');
}

function searchFunction(event) {
    alert('Searching...');
}
function toggleLanguageOptions() {
    const languageOptions = document.getElementById('languageOptions');
    languageOptions.style.display = languageOptions.style.display === 'none' ? 'block' : 'none';
}