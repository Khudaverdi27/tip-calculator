let tip = document.querySelectorAll(".discount")
let inputCustom = document.querySelector(".inputCustom")
let inputBill = document.querySelector(".inputBill")
let countPerson = document.querySelector(".inputPerson ")
let errorMessage = document.querySelector(".errorMessage")
let errorMsg = document.querySelector(".errorMsg")
let tipAmount = document.querySelector("#tipAmount")
let totalPrice = document.querySelector("#totalPrice")
let btnReset = document.querySelector(".btn-reset")


tip.forEach((tipButtons) => {
    tipButtons.addEventListener("click", (e) => {
        let percentage;
        let total;
        let countPersonValue = countPerson.value
        let billValue = inputBill.value
        let discountValue = e.target.textContent.trim()
        if (!isNaN(billValue)) {
            if (countPersonValue != "") {
                //if tip buttons text content length =2
                if (discountValue.length == 2) {
                    percentage = (discountValue.slice(0, 1) / 100) * billValue

                    tipAmount.textContent = parseFloat((percentage / countPersonValue).toFixed(2))
                    total = billValue / countPersonValue + percentage / countPersonValue
                    totalPrice.textContent = total
                    //else tip buttons text content length 
                } else {
                    percentage = (discountValue.slice(0, 2) / 100) * billValue;
                    tipAmount.textContent = parseFloat((percentage / countPersonValue).toFixed(2))
                    total = billValue / countPersonValue + percentage / countPersonValue
                    //round number and take 2 numbers after dot
                    totalPrice.textContent = parseFloat(total.toFixed(2))
                }
            } else {
                errorMessage.style.display = "block"
            }
        } else {
            errorMsg.style.display = "block"
        }
    })
})
//Custom input calculation
inputCustom.addEventListener("click", (e) => {
    if (!isNaN(inputBill.value)) {
        if (countPerson.value != "") {
            if (e.target.value != "" && e.target.value / 1 == e.target.value) {
                let customValue = e.target.value
                let PerAmount = (inputBill.value * customValue / 100) / countPerson.value;
                let Pertotal = inputBill.value / countPerson.value + PerAmount
                tipAmount.textContent = parseFloat(PerAmount.toFixed(2))
                totalPrice.textContent = parseFloat(Pertotal.toFixed(2))
            }
        } else {
            errorMessage.style.display = "block"
        }
    } else {
        errorMsg.style.display = "block"
    }
})
//reset button event
btnReset.addEventListener("click", () => {
    totalPrice.textContent = "0.00"
    tipAmount.textContent = "0.00"
    inputBill.value = "0"
    countPerson.value = "0"
    inputCustom.value = "Custom"
})