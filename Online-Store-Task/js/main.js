var allBuyButtons = document.querySelectorAll(".buy");
var cartTable = document.querySelector("#cartTable");
var priceBtn = document.querySelector("#totalPriceBtn");
var priceText = document.querySelector("#total");
var totalValue = 0;

allBuyButtons.forEach(function (button) {
    button.onclick = function () {
        var itemName = button.parentElement.querySelector("h3").textContent;
        var itemPrice = +(button.getAttribute("price"));
        totalValue += itemPrice;

        var row = cartTable.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.innerHTML = itemName;
        cell2.innerHTML = itemPrice + " $";

        cartTable.style.display = "block";

        if (cartTable.style.display !== "none") {
            priceBtn.style.display = "block";
            priceBtn.style.border = "none";
            priceBtn.style.borderRadius = "30px";
            priceBtn.style.fontWeight = "700";
            priceBtn.style.cursor = "pointer";
            priceBtn.style.marginTop = "24px";
            priceBtn.style.width = "200px";
            priceBtn.style.height = "45px";
            priceBtn.style.backgroundColor = "#ffce00";
            priceBtn.style.color = "black";
            priceBtn.style.fontSize = "22px";
        }
    }
});

priceBtn.onclick = function () {
    priceText.innerHTML = "Cart Totals: " + totalValue + " $";
    priceText.style.display = "block";
    priceText.style.color = "white";
    priceText.style.fontSize = "24px";
    console.log("Total Price: " + totalValue + " $");
}
