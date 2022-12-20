/*const domInvoiceNumber = document.getElementById('invoiceNumber');
const domInvoiceDiscount = document.getElementById('invoiceDiscount');
const domInvoiceTaxes = document.getElementById('invoiceTaxes');
const domWorkItem = document.getElementById('inpPopupWorkItem');
const domDescription = document.getElementById('inpPopupDescription');
const domQty = document.getElementById('inpPopupQty');
const domCost = document.getElementById('inpPopupCost');
const domModalWindow = document.getElementById('popupWindow');
const domOpenCreate = document.getElementById('btnCreate');
const domCloseCreate = document.getElementById('btnPopupClose');
const domListOfInvoice = document.getElementById('listOfInvoice');*/

const domInvoiceNumber = document.getElementById('invoiceNumber');
const domInvoiceDiscount = document.getElementById('invoiceDiscount');
const domInvoiceTaxes = document.getElementById('invoiceTaxes');
const domWorkItem = document.getElementById('workItem');
const domDescription = document.getElementById('description');
const domQty = document.getElementById('qty');
const domCost = document.getElementById('cost');
const domModalWindow = document.getElementById('modal');
const domOpenCreate = document.getElementById('openCreate');
const domCloseCreate = document.getElementById('closeCreate');
const domListOfInvoice = document.getElementById('listOfInvoice');

domInvoiceNumber.value = JSON.parse(localStorage.getItem('keyNumber'));
domInvoiceDiscount.value = JSON.parse(localStorage.getItem('keyDiscount'));
domInvoiceTaxes.value = JSON.parse(localStorage.getItem('keyTaxes'));
domListOfInvoice.innerHTML = JSON.parse(localStorage.getItem('keyListOfInvoice'));
console.log('keyListOfInvoice', JSON.parse(localStorage.getItem('keyListOfInvoice')));

domInvoiceNumber.addEventListener('keyup', () => {localStorageOfInvoice(domInvoiceNumber.value, 'keyNumber')} );
domInvoiceDiscount.addEventListener('keyup', () => {localStorageOfInvoice(domInvoiceDiscount.value, 'keyDiscount')} );
domInvoiceTaxes.addEventListener('keyup', () => {localStorageOfInvoice(domInvoiceTaxes.value, 'keyTaxes')} );
domListOfInvoice.addEventListener('change', () => {localStorageOfInvoice(domListOfInvoice.value, 'keyListOfInvoice')} );

domOpenCreate.addEventListener('click', () =>
{domModalWindow.style.display = 'block';
domModalWindow.style.position = 'fixed';})
domCloseCreate.addEventListener('click', () =>
{
    domModalWindow.style.display = 'none';
    let liLast = document.createElement('li');
    liLast.innerHTML = `${domWorkItem.value} + ${domDescription.value} + ${domQty.value} + ${domCost.value}`;
    domListOfInvoice.append(liLast);
    localStorageOfInvoice(domListOfInvoice.innerHTML, 'keyListOfInvoice');
})

domInvoiceNumber.addEventListener('keydown', (event) =>{onlyNumbersAndMax(event, domInvoiceNumber.value, 9999)} );
domInvoiceDiscount.addEventListener('keydown', (event) =>{onlyNumbersAndMax(event, domInvoiceDiscount.value, 99)} );
domInvoiceTaxes.addEventListener('keydown', (event) =>{onlyNumbersAndMax(event, domInvoiceTaxes.value, 99)} );
domQty.addEventListener('keydown', (event) =>{onlyNumbersAndMax(event, domQty.value, 9999999)} );
domCost.addEventListener('keydown', (event) =>{onlyNumbersAndMax(event, domCost.value, 9999999)} );

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