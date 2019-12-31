class Cart {
    constructor(image, status, symbol, index){
        this.image = image;
        this.status = status;
        this.symbol = symbol;
        this.index = index;
    }
}

const item1 = new Cart('zdjecie1', 'hide', 1, 0 );
const item2 = new Cart('zdjecie1', 'hide', 1, 1 );
const item3 = new Cart('zdjecie2', 'hide', 2, 2);
const item4 = new Cart('zdjecie2', 'hide', 2, 3);


const data = [item1, item2, item3, item4];

function search(){
   for(let i=0; i<data.length; i++){
       if(data[i].status == 'show'){
           return i;
       } else if (data[i].status === 'tempShow'){
           return 'clearTemp';
       }
   }
   return 'noShow';
}

function clicked(index){
    const searchIndex = search();
    if(searchIndex == 'noShow'){
        data[index].status = 'show';

    } else if (searchIndex == 'clearTemp'){
        for (let i = 0; i < data.length; i++) {
            if(data[i].status==='tempShow'){
                data[i].status='hide';
            }
        }
    }
    
    else {
        if(data[searchIndex].image === data[index].image){
            data[searchIndex].status = 'paired';
            data[index].status = 'paired';
        } else {
            data[searchIndex].status = 'tempShow';
            data[index].status = 'tempShow';
        }
    }
   
draw();
}

// print cart
function draw(){
    data.forEach(() => {
        cart.innerHTML = "";
    });

    data.forEach((el, index) => {
        const cartContainer = document.getElementById('cart');
        const cart = document.createElement('div');
        cart.innerHTML = data[index].status + "   " + data[index].image + "   "+ data[index].index;

        cart.classList.add('cart');
        cartContainer.appendChild(cart);
        
        cart.addEventListener('click', function(){
            clicked(index);
        });
    });
}

draw();