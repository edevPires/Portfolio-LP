const header = document.querySelector('header');
const headerLinks = document.querySelectorAll('.header-item');

const designsContainer = document.querySelector('#designs');
const aboutContainer = document.querySelector('#about');
const designs = document.querySelectorAll('.design');
const designSection = document.querySelectorAll('.design-section');

const footerLinks = document.querySelectorAll('.footer-links .links span p')



window.addEventListener('scroll', () => {
    
    const scrollCoordinades = window.scrollY;

    if (scrollCoordinades > 50)
    {
        header.style.boxShadow = 'rgba(149, 157, 165, 0.2) 0px 8px 24px';
    } else
    {
        header.style.boxShadow = 'rgba(0, 0, 0, 0) 0px 0px 0px';
    }

})

function scroll(coordinades) {
    window.scrollTo({
        top: coordinades,
        behavior: "smooth"
    });
}

headerLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (link.classList.contains('trabalhos')) {
            const yOffset = designsContainer.offsetTop - header.offsetHeight - 100;
            scroll(yOffset);
        }
        if (link.classList.contains('sobre')) {
            const yOffset = aboutContainer.offsetTop - header.offsetHeight;
            scroll(yOffset)
        }
    })
});

footerLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (link.classList.contains('home')) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
        if (link.classList.contains('trabalhos')) {
            const yOffset = designsContainer.offsetTop - header.offsetHeight - 100;
            scroll(yOffset);
        }
        if (link.classList.contains('sobre')) {
            const yOffset = aboutContainer.offsetTop - header.offsetHeight;
            scroll(yOffset)
        }
    })
})


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
