var rose = document.getElementById("roses");
var lilly = document.getElementById("lilly");
var jasmine = document.getElementById("jasmine");

rose.addEventListener("click", showImage);
lilly.addEventListener("click", showImage);
jasmine.addEventListener("click", showImage);

function showImage() {

    var attr_name = this.attributes["data-img"].value;
    console.log(attr_name)
    var img = document.getElementById(attr_name);

    if(img.className === "hide"){
        img.className = "";
    }
    else{
        img.className = "hide";
    }
}



