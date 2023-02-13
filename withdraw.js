document.getElementById('btn-withdraw').addEventListener('click', function(){

    const withdrawinput = document.getElementById('withdraw-input');
    const withdrawIputString = withdrawinput.value ;
    const newWithdrawinput = parseFloat(withdrawIputString);
    
    withdrawinput.value = " ";
  

    const whitdrawSetText = document.getElementById('whitdraw-set-text');
    const whitdrawSetTextString = whitdrawSetText.innerText;
    const whitdrawSetTexrNew = parseFloat(whitdrawSetTextString);
    

    const totalAmountWithdraw = newWithdrawinput + whitdrawSetTexrNew;
    whitdrawSetText.innerText = totalAmountWithdraw ;


    const textBlance = document.getElementById('text-blance');
    const textBlanceString = textBlance.innerText;
    const textBlanceAllAmount = parseFloat(textBlanceString);

    
   const allBlenceOupt = textBlanceAllAmount - totalAmountWithdraw;
   textBlance.innerText = allBlenceOupt;
})