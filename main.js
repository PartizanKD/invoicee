const domInvoiceNumber = document.getElementById('invoiceNumber');
const domInvoiceDiscount = document.getElementById('invoiceDiscount');
const domInvoiceTaxes = document.getElementById('invoiceTaxes');

domInvoiceNumber.value = JSON.parse(localStorage.getItem('keyNumber'));
domInvoiceDiscount.value = JSON.parse(localStorage.getItem('keyDiscount'));
domInvoiceTaxes.value = JSON.parse(localStorage.getItem('keyTaxes'));

domInvoiceNumber.addEventListener('keyup', () => {localStorageOfInvoice(domInvoiceNumber.value, 'keyNumber')} );
domInvoiceDiscount.addEventListener('keyup', () => {localStorageOfInvoice(domInvoiceDiscount.value, 'keyDiscount')} );
domInvoiceTaxes.addEventListener('keyup', () => {localStorageOfInvoice(domInvoiceTaxes.value, 'keyTaxes')} );
domInvoiceNumber.addEventListener('keydown', (event) =>{onlyNumbersAndMax(event, domInvoiceNumber.value, 9999)} );
domInvoiceDiscount.addEventListener('keydown', (event) =>{onlyNumbersAndMax(event, domInvoiceDiscount.value, 99)} );
domInvoiceTaxes.addEventListener('keydown', (event) =>{onlyNumbersAndMax(event, domInvoiceTaxes.value, 99)} );

function localStorageOfInvoice(value, key) {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(JSON.parse(localStorage.getItem(key)));
}

function onlyNumbersAndMax(event, value,  max) {
    if ((event.key >= 0 && event.key <= 9 && (value + event.key) <= max && event.key !== ' ')
        || event.key === 'Backspace' || event.key === 'Delete'
        || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {

    } else {
        event.preventDefault();
    }
}