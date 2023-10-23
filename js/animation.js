// Header Background Slide

const headerItens = document.querySelectorAll('.item');

const selector = document.querySelector('.selector');

const selectorReposition = item => {
    const itemWidth = item.clientWidth + 50;
    const itemHeight = item.clientHeight  + 20;

    selector.style.height = itemHeight;
    selector.style.maxWidth = (itemWidth) + 'px';
    
    selector.style.left = `calc(${item.offsetLeft}px - 25px)`;
}

headerItens.forEach((item) => {

    item.addEventListener('click', () => {
        selector.style.opacity = '1';
        item.classList.add('selected');

        headerItens.forEach((item) => {
            if (item.classList.contains('selected')) {
                item.classList.remove('selected');
                item.style.color = 'var(--clr-bg)';
            } else {
                item.style.color = 'black';
            }
            
        });

        selectorReposition(item);

        window.addEventListener('resize', () => {
            selectorReposition(item);
        })
    })

        
}) 

// header Hamburguer Menu

const menu = document.querySelector('.menu');

const firstBar = document.querySelector('.bar:nth-child(1)');
const secondBar = document.querySelector('.bar:nth-child(2)');
const thirdBar = document.querySelector('.bar:nth-child(3)');

menu.addEventListener('click', () => {
    if(!menu.classList.contains('active'))
    {
        menu.classList.toggle('active');
        
            firstBar.style.transition = 'transform 0.2s ease-in-out'
            firstBar.style.transformOrigin = 'center';
            firstBar.style.transform = 'translateY(12px) rotate(45deg)';
        
        secondBar.style.transition = 'opacity 0.31s ease';
        secondBar.style.opacity = 0;  
    
            thirdBar.style.transition = 'transform 0.2s ease-in-out';
            thirdBar.style.transformOrigin = 'center';
            thirdBar.style.transform = 'translateY(-12px) rotate(-45deg)';

    }   else {
        menu.classList.toggle('active');

        firstBar.style.transform = 'translateY(0px) rotate(0deg)';
        
        secondBar.style.opacity = 1;  
        
        thirdBar.style.transform = 'translateY(0px) rotate(0deg)';
    }
    
    
})

// Welcome Section

const section1 = document.querySelector('section:nth-child(1)');

const section3 = document.querySelector('section:nth-child(3)');


window.addEventListener('load', () => {
    section1.style.transform = "translateX(0px)";
    section1.style.opacity = "1";
})

window.addEventListener('load', () => {
    section3.style.transform = "translateX(0px)";
    section3.style.opacity = "1";
})

        
