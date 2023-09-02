const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');


document.getElementById('one').addEventListener('click', function () {
    one.style.backgroundColor = 'red';
    two.style.backgroundColor = '';
    three.style.backgroundColor = '';
    four.style.backgroundColor = '';
    five.style.backgroundColor = '';
    six.style.backgroundColor = '';
})
document.getElementById('two').addEventListener('click', function () {
    one.style.backgroundColor = '';
    two.style.backgroundColor = 'green';
    three.style.backgroundColor = '';
    four.style.backgroundColor = '';
    five.style.backgroundColor = '';
    six.style.backgroundColor = '';
})
document.getElementById('three').addEventListener('click', function () {
    one.style.backgroundColor = '';
    two.style.backgroundColor = '';
    three.style.backgroundColor = 'blue';
    four.style.backgroundColor = '';
    five.style.backgroundColor = '';
    six.style.backgroundColor = '';
})
document.getElementById('four').addEventListener('click', function () {
    one.style.backgroundColor = '';
    two.style.backgroundColor = '';
    three.style.backgroundColor = '';
    four.style.backgroundColor = 'purple';
    five.style.backgroundColor = '';
    six.style.backgroundColor = '';
})
document.getElementById('five').addEventListener('click', function () {
    one.style.backgroundColor = '';
    two.style.backgroundColor = '';
    three.style.backgroundColor = '';
    four.style.backgroundColor = '';
    five.style.backgroundColor = 'gray';
    six.style.backgroundColor = '';
})
document.getElementById('six').addEventListener('click', function () {
    one.style.backgroundColor = '';
    two.style.backgroundColor = '';
    three.style.backgroundColor = '';
    four.style.backgroundColor = '';
    five.style.backgroundColor = '';
    six.style.backgroundColor = 'salmon';
})