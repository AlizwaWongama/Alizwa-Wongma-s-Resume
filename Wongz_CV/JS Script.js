const DarkmodeButton = document.getElementById('dark-mode-button');
const body = document.body;

DarkmodeButton.addEventListener('click' , () =>
{
    body.classList.toggle('dark-mode');
    
    const elementsToToggle = [document.querySelector('header'),document.querySelector('section'),togglebutton];

    elementsToToggle.forEach(element => {
        element.classList.toggle('dark-mode')
    })
})   