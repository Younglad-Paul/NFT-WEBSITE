var img = document.getElementById('Buy_NFT')
var y = document.getElementById('9')
var y2 = document.getElementById('9_9')
var j = document.getElementById('10')
const j2 = document.getElementById('10_10')

function yz() {
    $('#nfts').css('display', 'none')
    $('#purchase').css('display', 'block')
    $('#spn').html('Award #9')
    img.innerHTML = "<img src='../assets/images/acom nft/TEAM FESTIVAL/striped bunny 9.jpg'>"
}
function jz() {
    $('#nfts').css('display', 'none')
    $('#purchase').css('display', 'block')
    $('#spn').html('Award #10')
    img.innerHTML = "<img src='../assets/images/acom nft/TEAM FESTIVAL/striped bunny 10.jpg'>"
}



y.addEventListener('click', yz);
y2.addEventListener('click', yz);
j.addEventListener('click', jz);
j2.addEventListener('click', jz);