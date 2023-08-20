"use strict";

const init = function(e) {
    let a = document.querySelector('#Buy_NFT');
    a.innerHTML = "<img src='assets/images/acom nft/black bunny 1.jpg'>"
};

document.addEventListener('DOMContentLoader', function () {
    init();});




// var img = document.getElementById('Buy_NFT')
                                
// function active() {
//     img.innerHTML = "<img src='assets/images/acom nft/black bunny 1.jpg'> "
//     window.document.location ='../'
// }

// var a = document.getElementById('1')

// a.addEventListener('click', active)

var img = document.getElementById('Buy_NFT')

function id (e){
    if(e == 'a'){
        img.setAttribute('id', 'a')
    }
}
