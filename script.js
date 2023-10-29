

  let efficiency = document.getElementById('dname');
  const btn = document.getElementsByClassName('calculatorSubmit');
  let result1 = document.getElementById('result');

  btn[0].addEventListener("click", getMonthlyRequirements);

  function getMonthlyRequirements(event) {
    event.preventDefault();
    let monthlyEnergyUsage = parseFloat(document.getElementById('fname').value);
    let sunHours = parseFloat(document.getElementById('lname').value);
    let solarPanelWattage = parseFloat(document.getElementById('xname').value);
    let result = solarPanelWattage * sunHours * (efficiency.value / 100);

    result = result * 30
    result = result/1000
    let percent = result/monthlyEnergyUsage * 100
    percent = Math.ceil(percent) + '%'


    if(result >= monthlyEnergyUsage){
      result1.textContent = 'Result: Your monthly generation is ' + result + ' KW, which exceeds your monthly usage at ' + percent + ' of your bill.' ;
    }else{
      result1.textContent = 'Result: Your monthly generation is ' + result + ' KW, which is ' + percent + ' of your monthly usage' ;
    }
    return result;
  }





