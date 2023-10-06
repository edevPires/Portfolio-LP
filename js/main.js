const headerLinks = document.querySelectorAll('.header-item');


headerLinks.forEach(link => {
    link.addEventListener('click', () => {
        alert('click');
    })
});

const designsContainer = document.querySelector('#designs');
const designs = document.querySelectorAll('.design');


function resizeImages(design)
{
    const width = design.offsetWidth;

    design.style.height = width + 'px';
}

designs.forEach(design => {
    resizeImages(design);

    designsContainer.style.height = 'fit-content';

    window.addEventListener('resize', () => {
        resizeImages(design);
    })
});