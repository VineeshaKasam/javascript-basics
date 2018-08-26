var mydetails = document.getElementById("myDetails");

var li_items = mydetails.querySelectorAll("li");

var inputs = mydetails.querySelectorAll("input")

for (var i=0; i<li_items.length; i++){
    li_items[i].addEventListener("click", clickFn);
    inputs[i].addEventListener("blur", changeFn)
    inputs[i].addEventListener("keypress", enterFn)
}

function clickFn(){
    this.className = "edit";
    var input = this.querySelector("input");
    input.focus();
    input.setSelectionRange(0,input.value.length);
}

function changeFn() {
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className = "";
}

function enterFn(event) {
    if(event.which === 13){
        changeFn.call(this);
    }
}
