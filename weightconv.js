var input = document.querySelector('#lbsinput');
var gramop = document.querySelector('#gramoutp');
var kgop = document.querySelector('#kgoutp');
var ozop = document.querySelector('#ozoutp');
var outp = document.querySelector('#output');

outp.style.visibility = 'hidden';

input.addEventListener('input' , convWeight);

function convWeight(e){
    outp.style.visibility = 'visible';
    let pounds = e.target.value;
    let grams = pounds*453.592;
    let kgs = grams*.001;
    let ozs = pounds*16;

    gramop.innerHTML = grams;
    kgop.innerHTML = kgs;
    ozop.innerHTML = ozs;
}