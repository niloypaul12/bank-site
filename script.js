// login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click',function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';

    const transactArea = document.getElementById('transaction-area');
    transactArea.style.display = 'block';
})
// deposit button event handler

const depositBtn = document.getElementById('addDeposit');

depositBtn.addEventListener('click',function(){
    const depositNumber = getInputNumber("depositAmount");

    if (depositNumber < 0 ) {
        alert('Deposit Number Cannot be Negative Value.')
        
    }
    else{
        updateSpanText("currentDeposit", depositNumber); //this is the call for deposit

        document.getElementById("depositAmount").value = ""; //making the input in deposit empty string after every click
        
        updateSpanText("currentBalance", depositNumber); //this is the call for balance addition
        // deposit work ends here
    }

})

// withdraw work starts here

const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
    const withdrawNumber = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw", withdrawNumber);

    updateSpanText("currentBalance", -1* withdrawNumber);

    document.getElementById("withdrawAmount").value = "";
    
})

function getInputNumber(id){
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;


}


function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;

    document.getElementById(id).innerText = totalAmount;

}

