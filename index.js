document.getElementById('btn-deposit').addEventListener('click', function(){

const depositInput = document.getElementById('deposit-input');
const depositInputString = depositInput.value ;
const newdepositvalue = parseFloat(depositInputString);

depositInput.value = ''

const depositSetText = document.getElementById('deposit-set-text');
const depositSetTextString = depositSetText.innerText;
const newDepositSetText = parseFloat(depositSetTextString);


const totalAmount = newdepositvalue + newDepositSetText;
depositSetText.innerText = totalAmount;


const textblance = document.getElementById('text-blance');
const textblancestring = textblance.innerText;
const allTextBlence = parseFloat(textblancestring);

const allBlencePuls = totalAmount + allTextBlence;
textblance.innerText = allBlencePuls;

})