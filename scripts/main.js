//for-buttonss
// memory button
const btnOne = document.getElementById("btn-8GB");
const btnTwo = document.getElementById("btn-16GB");
//storage button
const btnThree = document.getElementById("btn-256GB");
const btnFour = document.getElementById("btn-512GB");
const btnFive = document.getElementById("btn-1TB");
//delivary buttons
const btnSix = document.getElementById("btn-OntimeD");
const btnSeven = document.getElementById("btn-fastD");

// calculation table
const fixedCharge = document.getElementById("bestPrice");
const extraMemory = document.getElementById("memoryCost");
const extraStorage = document.getElementById("StorageCost");
const DelivaryCharge = document.getElementById("DelivaryCost");

// calculation table total
const totalPrice = document.getElementById("total");

// to make thing selected
function isContain(elem) {

    //return is class present
    return elem.classList.contains('selected');
}

//update total
function updateTotal() {
    fixedCharge.innerText = "1299";
    const fixedPrice = Number(fixedCharge.innerText);
    const MemoryPrice = Number(extraMemory.innerText);
    const StoragePrice = Number(extraStorage.innerText);
    const DelivaryPrice = Number(DelivaryCharge.innerText);
    const grandTotal = fixedPrice + MemoryPrice + StoragePrice + DelivaryPrice;

    // for calculation total
    totalPrice.innerText = grandTotal;
    // for final total with out promocode
    finalTotal.innerText = grandTotal;

}

// btn Memory for 8GB
btnOne.addEventListener('click', function () {
    if (!isContain(btnOne)) {
        btnOne.classList.add("selected");
        btnTwo.classList.remove("selected");
    }
    extraMemory.innerText = "0";
    updateTotal();
});
// btn Memory for 16GB
btnTwo.addEventListener('click', function () {
    if (!isContain(btnTwo)) {
        btnOne.classList.remove("selected");
        btnTwo.classList.add("selected");
    }
    extraMemory.innerText = "180";
    updateTotal();
});
// btn Storage for 256GB
btnThree.addEventListener('click', function () {
    if (!isContain(btnThree)) {
        btnThree.classList.add("selected");
        btnFour.classList.remove("selected");
        btnFive.classList.remove("selected");
    }
    extraStorage.innerText = "0";
    updateTotal();
});
// btn Storage for 512GB
btnFour.addEventListener('click', function () {
    if (!isContain(btnFour)) {
        btnThree.classList.remove("selected");
        btnFour.classList.add("selected");
        btnFive.classList.remove("selected");
    }
    extraStorage.innerText = "100";
    updateTotal();
});
// btn Storage for 1TB
btnFive.addEventListener('click', function () {
    if (!isContain(btnFive)) {
        btnThree.classList.remove("selected");
        btnFour.classList.remove("selected");
        btnFive.classList.add("selected");
    }
    extraStorage.innerText = "180";
    updateTotal();
});
// btn delivary for 25 aug
btnSix.addEventListener('click', function () {
    if (!isContain(btnSix)) {
        btnSix.classList.add("selected");
        btnSeven.classList.remove("selected");
    }
    DelivaryCharge.innerText = "0";
    updateTotal();
});
// btn delivary for 21 aug
btnSeven.addEventListener('click', function () {
    if (!isContain(btnSeven)) {
        btnSix.classList.remove("selected");
        btnSeven.classList.add("selected");
    }
    DelivaryCharge.innerText = "20";
    updateTotal();
});


// const couponCode = document.getElementById("promo");
// for code copon
const apply = document.getElementById("apply-button");
const promoCode = document.getElementById("promo");
const finalTotal = document.getElementById("final-total");

// for stevekaku code copen if condition+disable buttoning after 1 try
function discount() {
    if (promoCode.value == "stevekaku") {
        let discountTotal = totalPrice.innerText - (totalPrice.innerText * 20 / 100);
        finalTotal.innerText = Math.round(discountTotal);
        // using Math.round() to not get any fraction number
        document.getElementById("apply-button").disabled = true;
        document.getElementById("apply-button").style.backgroundColor = "grey";
        document.getElementById("apply-button").style.color = "light-grey";
        document.getElementById("apply-button").style.cursor = "none";
        promoCode.disabled = true;
    }
}