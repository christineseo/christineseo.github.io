
$(".dropdown").on("show.bs.dropdown", function(event){
    var x = $(event.relatedTarget).text(); // Get the text of the element
    alert(x);
  });

function none(){
    document.getElementById('bread').src="img/bread1.png"
}

function sugarmilk(){
    document.getElementById('bread').src="img/bread2.png"
}

function choc(){
    document.getElementById('bread').src="img/bread3.png"
}

function vanilla(){
    document.getElementById('bread').src="img/bread4.png"
}

function one(x){
    document.getElementById('amount').innerHTML=x
}

//cart functionality 
var cart = [];

var Item = function(name,price,amount){
    this.name = name
    this.price = price
    this.amount = amount
}

//adding to cart 
function addItemToCart(name,price,amount){
    for (var i in cart){
        if (cart[i].name === name){
            cart[i].amount += amount;
            saveCart();
            return;
        }
    }

    var item = new Item(name, price, amount);
    cart.push(item);
    saveCart();
}

//removing from cart 
function removeItemFromCartAll(name){
    for (var i in cart){
        if (cart[i].name === name){
                cart.splice(i,1);
            }
            break;
        }
        saveCart(); 
    }    

function removeItem() {
 var elem = document.getElementById('item');
    elem.parentNode.removeChild(elem);
    return false;
    }

function removeItem1() {
 var elem = document.getElementById('item1');
    elem.parentNode.removeChild(elem);
    return false;
    }