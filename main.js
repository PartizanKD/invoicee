const domInvoiceNumber = document.getElementById('invoiceNumber');
const domOpenCreate = document.getElementById('btnCreate');
const domSubtotal = document.getElementById('subtotal');//дописала. строка с подсчетом
const domInvoiceDiscount = document.getElementById('invoiceDiscount');
const domInvoiceTaxes = document.getElementById('invoiceTaxes');
const domTotal = document.getElementById('total');//дописала. строка с подсчетом
const domIBAN = document.getElementById('invoiceIBAN');//дописала. строка с XXXX XXXX XXXX

const domModalWindow = document.getElementById('popupWindow');
const domBtnDelete = document.getElementById('btnPopupDelete');//delete в попап
const domCloseCreate = document.getElementById('btnPopupClose');//close в попапе
const domBtnCreate = document.getElementById('btnPopupCreate');//создание элемента в попап
const domQty = document.getElementById('inpPopupQty');
const domCost = document.getElementById('inpPopupCost');
const domPopupTotal= document.getElementById('popupTotal');//там где умножаются Qty*Cost
const domWorkItem = document.getElementById('inpPopupWorkItem');
const domDescription = document.getElementById('inpPopupDescription');

const domListOfInvoice = document.getElementById('listWorkItems');



domInvoiceNumber.value = JSON.parse(localStorage.getItem('keyNumber'));
domInvoiceDiscount.value = JSON.parse(localStorage.getItem('keyDiscount'));
domInvoiceTaxes.value = JSON.parse(localStorage.getItem('keyTaxes'));
domListOfInvoice.innerHTML = JSON.parse(localStorage.getItem('keyListOfInvoice'));
console.log('keyListOfInvoice', JSON.parse(localStorage.getItem('keyListOfInvoice')));

domInvoiceNumber.addEventListener('keyup', () => {localStorageOfInvoice(domInvoiceNumber.value, 'keyNumber')} );
domInvoiceDiscount.addEventListener('keyup', () => {localStorageOfInvoice(domInvoiceDiscount.value, 'keyDiscount')} );
domInvoiceTaxes.addEventListener('keyup', () => {localStorageOfInvoice(domInvoiceTaxes.value, 'keyTaxes')} );
domListOfInvoice.addEventListener('change', () => {localStorageOfInvoice(domListOfInvoice.value, 'keyListOfInvoice')} );
domCloseCreate.addEventListener('click',()=> {domModalWindow.style.display = 'none'; cleanInput()})

domOpenCreate.addEventListener('click', () =>
{domModalWindow.style.display = 'block';
domModalWindow.style.position = 'fixed';
domModalWindow.style.zIndex = '1';})

domBtnCreate.addEventListener('click', () =>
{
    domModalWindow.style.display = 'none';
   domPopupTotal.value = domQty.value*domCost.value;
    let liLast = document.createElement('div');
    liLast.innerHTML = `

    <section class=" text-xs text-black  pb-1" >
              <div class="grid grid-cols-8">
                <div class="col-span-4">${domWorkItem.value}
                <div class="row-span-1 text-gray-600">${domDescription.value}</div></div>
                <div>${domQty.value}</div>
                <div>${domCost.value}</div>
                <div class="col-span-2 text-right">${domPopupTotal.value}
                </div>
              </div>
            </section>`


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
function cleanInput() {
    domWorkItem.value=""
    domDescription.value=""
    domQty.value=""
    domCost.value=""
}