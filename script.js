


function celtoany() {
    let valued = document.getElementById("typeof");
    let answer = valued.options[valued.selectedIndex];
    let celsius = document.getElementById("celsius");
   // let k = document.getElementById("kel").value;

    const resultof = document.getElementById("ans")
    if(answer.value =="default")
    {
        resultof.innerHTML = "kindly choose the valid unit of temperature";
        resultof.style.color="red";
    }
    else if (answer.text == "Kelvins") {
        let output = parseInt(celsius.value) + 273.15;
        resultof.innerHTML = output;
        resultof.style.color="red";
        
    }
    else {
        let output = (celsius.value * 9) / 5 + 32;
        resultof.innerHTML = output;
        resultof.style.color="red";
    }
}
