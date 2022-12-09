const billAmt = document.querySelector("#billAmount");
const cashG = document.querySelector("#cashGiven");
const checkNotes = document.querySelector("#checkNotes");
const errorMsg = document.querySelector("#errorMsg");
const noOfNotes = document.querySelectorAll(".noOfNotes");
const result = document.querySelectorAll(".whenAnyExceptionHide");

const availableNotes = [2000,500,100,20,10,5,1];

result[0].style.display = "none";
result[1].style.display = "none";

checkNotes.addEventListener("click", function validate(){
    const billAmount = Number(billAmt.value);
    const cashGiven = Number(cashG.value);
    hideMessage();

    if(billAmount > 0){
        if(cashGiven > billAmount){
            const amountToBeReturned = cashGiven - billAmount;
            calculateChange(amountToBeReturned);
        }else if(cashGiven < billAmount){
            showMessage("Gpay kar de bhai");
        }else{
            showMessage("Thanks, for shopping with us!");
        }
    }else{
        showMessage("invalid Bill Amount");
    }
});

function calculateChange(amount){
    for(let i=0;i<availableNotes.length;i++){
        const numberofNotes =  Math.trunc(amount/availableNotes[i]);        
        amount = amount % availableNotes[i];
        noOfNotes[i].innerText = numberofNotes;
    }    
}

function hideMessage(){
    errorMsg.style.display = "none";
    result[0].style.display = "block";
    result[1].style.display = "block";
}

function showMessage(msg){
    errorMsg.innerText = msg;
    errorMsg.style.display = "block";
    result[0].style.display = "none";
    result[1].style.display = "none";
}