// DOM
const li = document.getElementsByTagName('li');
for(let i = 0; i < li.length; i++) {
    // create Div
    const trigger = li[i];
    trigger.insertAdjacentHTML('beforeend', '<div></div>');

    // get Alt
    const div = trigger.getElementsByTagName('div')[0];
    const img = div.previousElementSibling;
    const alt = img.alt;

    // function
    function fadeIn() {
        div.insertAdjacentHTML('beforeend', `<p>${alt}</p>`);
        div.style.display = 'block';
        div.animate([{opacity: 0}, {opacity: 1}], 300);
    }

    function fadeOut() {
        div.style.opacity = 1;
        div.style.transitionProperty = 'opacity';
        div.style.transitionDuration = 300 + 'ms';
        div.style.opacity = 0;
        setTimeout(remove, 300);
    }

    function remove() {
        div.style.removeProperty('display')
        div.style.removeProperty('opacity');
        div.style.removeProperty('transition-property');
        div.style.removeProperty('transition-duration');
        const p = div.getElementsByTagName('p')[0];
        p.remove();
    }

    // event
    trigger.addEventListener('mouseenter', fadeIn);
    trigger.addEventListener('mouseleave', fadeOut);
}