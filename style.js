let right = document.querySelectorAll('.sag');  
  let left = document.querySelectorAll('.sol');  
  let currency1 = document.querySelector('.currency1');  
  let currency2 = document.querySelector('.currency2');  
  let amount2 = document.getElementById('rinput');  
  let amount1 = document.getElementById('linput');  
   
  let cur;  
  let currency;  
   
  right.forEach(event => {  
      event.addEventListener('click', function(){  
          cur = this.innerText  
          getvalue()  
      })   
  });  
   
  left.forEach(event => {  
      event.addEventListener('click', function(){  
          currency = this.innerText  
          getvalue()  
      })   
  });  
   
  const getvalue = async () => {  
      let out;  
      await fetch(`https://api.exchangerate.host/latest?base=${currency}&symbols=${cur}`)  
      .then(response => response.json())  
      .then((data) => {  
          out = Object.values(data.rates)[0]  
          console.log(data)  
      })  
      if ((cur == 'RUB') && (currency == 'RUB')) {  
          amount2.value = amount1.value  
      }  
      if ((cur == 'RUB') && (currency == 'EUR')) {  
          amount2.value = amount1.value * out  
          currency1.innerHTML = "1 Rub" +data.rates.EUR+ "EUR"
      }  
      if ((cur == 'RUB') && (currency == 'USD')) {  
          amount2.value = amount1.value * out  
      }  
      if ((cur == 'RUB') && (currency == 'AZN')) {  
          amount2.value = amount1.value * out  
      }  
      else if ((cur == 'USD') && (currency == 'USD')) {  
          amount2.value = amount1.value  
      }  
      else if ((cur == 'USD') && (currency == 'EUR')) {  
          amount2.value = amount1.value * out  
      }  
      else if ((cur == 'USD') && (currency == 'RUB')) {  
          amount2.value = amount1.value * out  
      }  
      else if ((cur == 'USD') && (currency == 'AZN')) {  
          amount2.value = amount1.value * out  
      }  
      else if ((cur == 'EUR') && (currency == 'EUR')) {  
          amount2.value = amount1.value  
      }  
      else if ((cur == 'EUR') && (currency == 'USD')) {  
          amount2.value = amount1.value * out  
      }  
      else if ((cur == 'EUR') && (currency == 'RUB')) {  
          amount2.value = amount1.value * out  
      }  
      else if ((cur == 'EUR') && (currency == 'AZN')) {  
          amount2.value = amount1.value * out  
      }  
      else if ((cur == 'AZN') && (currency == 'AZN')) {  
          amount2.value = amount1.value  
      }  
      else if ((cur == 'AZN') && (currency == 'EUR')) {  
          amount2.value = amount1.value * out  
      }  
      else if ((cur == 'AZN') && (currency == 'RUB')) {  
          amount2.value = amount1.value * out;  
      }  
      else if ((cur == 'AZN') && (currency == 'USD')) {  
          amount2.value = amount1.value * out  
      }  
  }  
   
  right.forEach((event) => {  
      event.addEventListener('click', function() {  
          right.forEach((event) => {  
              event.classList.remove('active')  
              this.classList.add('active')  
          })  
      })  
  })  
   
  left.forEach((event) => {  
      event.addEventListener('click', function() {  
          left.forEach((event) => {  
              event.classList.remove('active')  
              this.classList.add('active')  
          })  
      })  
  })