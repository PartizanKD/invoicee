const domNumber = document.getElementById('invoiceNumber');

domNumber.value = JSON.parse(localStorage.getItem('test'));

//const LOCAL_NUMBER = domNumber.value;

domNumber.addEventListener('keyup', invoiceNumber);
function invoiceNumber() {
    let LOCAL_NUMBER = domNumber.value;
    localStorage.setItem('test', JSON.stringify(LOCAL_NUMBER));
    console.log(JSON.parse(localStorage.getItem('test')));
}