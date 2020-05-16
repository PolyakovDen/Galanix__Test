var modal = document.getElementById('myModal');
var modalImg = document.getElementById('img01');
var span = document.getElementsByClassName('close')[0];
var img = document.querySelectorAll('.main-img');
var imgArr = Array.from(img);

function elemImg() {
    for (var i = 0; i < imgArr.length; i++) {
        imgArr[i].addEventListener("click", showImg);
    }
}

function showImg () {
    modal.style.display = "block";
    modalImg.src = this.src;
}

span.onclick = function() {
    modal.style.display = "none";
}

elemImg();