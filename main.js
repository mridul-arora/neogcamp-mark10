const billAmount = document.querySelector("#billAmount");
const cashGiven = document.querySelector("#cashGiven");
const checkNotes = document.querySelector("#checkNotes");
const errorMsg = document.querySelector("#errorMsg");
const noOfNotes = document.querySelectorAll(".noOfNotes");

const availableNotes = [2000,500,100,20,10,5,1];

checkNotes.addEventListener("click", function validate(){
    hideMessage();
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }else{
            showMessage("Gpay kar de bhai");
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
}

function showMessage(msg){
    errorMsg.innerText = msg;
    errorMsg.style.display = "block";
}