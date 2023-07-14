function amount(){
    let result=document.getElementById("result")
    let units=document.getElementById("unit").value
    units=Math.abs(units)
    let unit=units
    let price=0.0
    if (units <= 100) {
        price = 0.0;
      } else if (units <= 200) {
        price = units * 2.25;
      } else if (units <= 400) {
        price = 225 + (units - 200) * 4.50;
      } else if (units <= 500) {
        price = 1125 + (units - 400) * 6.00;
      } else if (units <= 600) {
        price = 2400 + (units - 500) * 8.00;
      } else if (units <= 800) {
        price = 2750 + (units - 600) * 9.00;
      } else if (units <= 1000) {
        price = 4550 + (units - 800) * 10.00;
      } else if (units > 1000) {
        price = 6550 + (units - 1000) * 11.00;
      }
    result.querySelector("#unitPrice").innerHTML=`Consumed Unit: ${unit}`
    result.querySelector("#totalAmount").innerHTML=`Total Charges: Rs.${price}`
}