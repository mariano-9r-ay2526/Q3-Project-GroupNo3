var basefare = 50; 
var perKMrate = 15; 
var baseKM = 2; 

function calculateRegular() {
    var start = document.getElementById("startStation").value;
    var end = document.getElementById("endStation").value;
    var distance = Math.abs(start - end);
    var price = Math.max(basefare, basefare + (distance - baseKM) * perKMrate);
    document.getElementById("fareResult").innerText = "Regular Fare: ₱" + price.toFixed(2);
}

function calculateDiscounted() {
    var start = document.getElementById("startStation").value;
    var end = document.getElementById("endStation").value;
    var distance = Math.abs(start - end);
    var regularPrice = Math.max(basefare, basefare + (distance - baseKM) * perKMrate);
    var discountPrice = regularPrice * 0.8;
    document.getElementById("fareResult").innerText = "Discounted Fare: ₱" + discountPrice.toFixed(2);
}

