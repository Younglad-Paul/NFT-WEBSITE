var img = document.getElementById('Buy_NFT')
var e = document.getElementById('5')
var e2 = document.getElementById('5_5')
var f = document.getElementById('6')
var f2 = document.getElementById('6_6')
var g = document.getElementById('7')
var g2 = document.getElementById('7_7')
var h = document.getElementById('8')
var h2 = document.getElementById('8_8')



function ez() {
    $('#nfts').css('display', 'none')
    $('#purchase').css('display', 'block')
    $('#spn').html('Award #5')
    img.innerHTML = "<img src='../assets/images/acom nft/TEAM AWARDS/black bunny 5.jpg'>"
}
function fz() {
    $('#nfts').css('display', 'none')
    $('#purchase').css('display', 'block')
    $('#spn').html('Award #6')
    img.innerHTML = "<img src='../assets/images/acom nft/TEAM AWARDS/black bunny 6.jpg'>"
}
function gz() {
    $('#nfts').css('display', 'none')
    $('#nfts').css('display', 'none')
    $('#purchase').css('display', 'block')
    $('#spn').html('Award #7')
    img.innerHTML = "<img src='../assets/images/acom nft/TEAM AWARDS/black bunny 7.jpg'>"
}
function hz() {
    $('#nfts').css('display', 'none')
    $('#purchase').css('display', 'block')
    $('#spn').html('Award #8')
    img.innerHTML = "<img src='../assets/images/acom nft/TEAM AWARDS/black bunny 8.jpg'>"
}



e.addEventListener('click', ez);
e2.addEventListener('click', ez);
f.addEventListener('click', fz);
f2.addEventListener('click', fz);
g.addEventListener('click', gz);
g2.addEventListener('click', gz);
h.addEventListener('click', hz);
h2.addEventListener('click', hz);
