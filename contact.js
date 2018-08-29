var modal = document.getElementsByClassName("modal");
var submit = document.getElementById("submit");
var span = document.getElementsByClassName("close")[0];
var form = document.getElementById("form");
var header = document.getElementById("header");
var container = document.getElementsByClassName("container");

submit.onclick = function() {
	console.log(modal)
    modal[0].style.display = "block";
    form.style.display = "none";
    header.style.display = "none";
    submit.style.display = "none";
    container[0].style.display = "none";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


