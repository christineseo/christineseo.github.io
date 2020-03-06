
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