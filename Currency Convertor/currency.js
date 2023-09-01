fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(msg=>display(msg))

const select=document.querySelectorAll(".countries")
function display(res){
    let curr=Object.entries(res)
    for(let i=0;i<curr.length;i++){
        let opt=`<option value="${curr[i][0]}">${curr[i][0]}</option>`
        select[0].innerHTML+=opt
        select[1].innerHTML+=opt
    }
}
const btn=document.getElementById("btn");
const inputValue1=document.getElementById("input1")
btn.addEventListener("click",calculate)
function calculate(){
    let curr1=select[0].value;
    let curr2=select[1].value;
    if(curr1==curr2){
        alert("choose different country")
    }else{
        convert(curr1,curr2,inputValue1.value)
    }
}

function convert(curr1,curr2,val){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${val}&from=${curr1}&to=${curr2}`)
    .then(resp => resp.json())
    .then((data) => {
        document.getElementById("input2").value=Object.values(data.rates)[0]
  });
}