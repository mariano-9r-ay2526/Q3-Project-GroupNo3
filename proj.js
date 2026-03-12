function computeFare(){

    const baseFare = 50;
    const perKMrate = 15;
    const baseKM = 2;

    let pickup = parseInt(document.getElementById("pickup").value);
    let dropoff = parseInt(document.getElementById("dropoff").value);
    let discountRate = parseFloat(document.getElementById("passenger").value);

    let distance = Math.abs(dropoff - pickup);
    let totalFare;

    if(distance <= baseKM){
        totalFare = baseFare;
    } else {
        let extraKM = distance - baseKM;
        totalFare = baseFare + (extraKM * perKMrate);
    }

    totalFare = totalFare - (totalFare * discountRate);

    document.getElementById("fare").innerHTML = "PHP " + totalFare.toFixed(2);
}
