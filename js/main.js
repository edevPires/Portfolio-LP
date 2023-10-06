const designs = document.querySelectorAll('.design');

function resizeImages(design)
{
    const width = design.offsetWidth;

    design.style.height = width + 'px';
}

designs.forEach(design => {
    resizeImages(design);

    window.addEventListener('resize', () => {
        resizeImages(design);
    })
});