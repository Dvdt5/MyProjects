const submitBtn = document.getElementById("submit-btn");
const userInput = document.getElementById("cc-number");
const textMsg = document.getElementById("answer");


submitBtn.addEventListener("click",() => {
    //Create regex for checking numbers
    const regex = /[^0-9]/g;
    if (userInput.value.match(regex) !== null) {
        textMsg.innerText = "Please enter only numbers!";
        return;
    }

    //If statement for checking numbers length
    if ((userInput.value.split("")).length !== 16) {
        textMsg.innerText = "Please enter a 16 digit number.";
        return;
    }

    //Making the input an array so we can iterate numbers and reverse it so we start counting from right
    let userArr = userInput.value.split("").reverse();
    let sum = 0;
    
    for (let i = 0; i < 16;i++){
        let makeDataNumber = Number(userArr[i])
        if (i % 2 === 0) {
            sum += makeDataNumber;
        } else if ((makeDataNumber*2) > 9) {
            sum += (makeDataNumber * 2) - (9);
        } else {
            sum += makeDataNumber * 2;
        }
    }
    if (sum % 10 !== 0) {
    textMsg.innerText = `${userInput.value} is not a valid Credit Card number.`;
    } else {
    textMsg.innerText = `${userInput.value} is a valid Credit Card number.`;
    }

});