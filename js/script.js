class Cart {
    constructor(image, status, cartIndex){
        this.image = image;
        this.status=status;
        this.cartIndex = cartIndex;
    }
}

const item1 = new Cart('image1', 'hide', 100);
const item2 = new Cart('image1', 'hide', 200);
const item3 = new Cart('image2', 'hide', 300);
const item4 = new Cart('image2', 'hide', 400);

const data = [item1, item2, item3, item4];

let firstClickIndex = null;
let secondClickIndex = null;


function searchClicked(el, index){
    const items = data.filter(item => item.status === 'show');
    if (items.length > 0 ) {
        secondClickIndex = index;
        el.status = 'show';

        //change status after click
        if(data[index].image === data[firstClickIndex].image){
            data[index].status = 'pair';
            data[firstClickIndex].status = 'pair';
        } else {
            data[index].status = 'hide';
            data[firstClickIndex].status = 'hide';
        }
    } else {
        firstClickIndex = index;
        el.status = 'show'; 
    }
}
  

function cartClicked(el, index){
    searchClicked(el, index);
    draw();
}

function draw() {
    data.forEach(() => {
        cart.innerHTML = "";
    });

    data.forEach((el, index) => {
        const div = document.createElement('div');
        const cart = document.getElementById('cart');
        cart.appendChild(div);
        div.innerHTML = el.status + " index:" + index + " " + el.image;   
        div.classList.add('cart');
        div.addEventListener('click', function(){
            if(data[index].status === 'pair'){
                return;
            } else {
                cartClicked(el, index)
            }
        });
    })
}
draw();


