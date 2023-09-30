// Header Background Slide

const headerItens = document.querySelectorAll('.item');

const selector = document.querySelector('.selector');


headerItens.forEach((item) => {
    item.addEventListener('click', () => {
        selector.style.opacity = '1';
        item.classList.add('selected');

        headerItens.forEach((item) => {
            if (item.classList.contains('selected')) {
                item.classList.remove('selected');
                item.style.color = 'white';
            } else {
                item.style.color = 'black';
            }
            
        });    

        const itemWidth = item.clientWidth + 50;
        const itemHeight = item.clientHeight  + 20;

        selector.style.height = itemHeight;
        selector.style.maxWidth = (itemWidth) + 'px';
        
        selector.style.left = `calc(${item.offsetLeft}px - 25px)`;
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
        
        setTimeout(() => {
            firstBar.style.transition = 'transform 0.2s ease-in-out'
            firstBar.style.transformOrigin = 'center';
            firstBar.style.transform = 'translateY(12px) rotate(45deg)';
        }, 100);     
        
        secondBar.style.transition = 'opacity 0.1s ease';
        secondBar.style.opacity = 0;  
              
    
        setTimeout(() => {
            thirdBar.style.transition = 'transform 0.2s ease-in-out';
            thirdBar.style.transformOrigin = 'center';
            thirdBar.style.transform = 'translateY(-12px) rotate(-45deg)';
        }, 100);
    }else{
        menu.classList.toggle('active');

        firstBar.style.transform = 'translateY(0px) rotate(0deg)';
        
        setTimeout(() => {
            secondBar.style.opacity = 1;  
        }, 200); 
        
        thirdBar.style.transform = 'translateY(0px) rotate(0deg)';
    }
    
    
})


        
