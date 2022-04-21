let right = document.querySelectorAll('.sag');   
let left = document.querySelectorAll('.sol');   
let p = document.querySelector('p');   
let amount2 = document.getElementById('rinput');   
let amount1 = document.getElementById('linput');  
let sagm=document.querySelector('.solM')  
let solm=document.querySelector('.sagM')  
let soll = document.getElementById('sol')
   
let sol;   
let sag;   
   
amount1.addEventListener('keyup', function(){         
    getvalue()   
})    

 
right.forEach(event => {   
    event.addEventListener('click', function(){   
        sol = this.innerText        
        getvalue()   
    })    
});   
   
left.forEach(event => {   
    event.addEventListener('click', function(){   
        sag = this.innerText   
        getvalue()   
    })    
});   
   
const getvalue = async () => {   
    let out;   
    await fetch(`https:api.exchangerate.host/latest?base=${sag}&symbols=${sol}`)   
    .then(response => response.json())   
    .then((data) => {   
        out = Object.values(data.rates)[0]   
        console.log(data)   
    })  
    function r(){
        amount2.addEventListener('keyup', function(){         
            amount1.value = amount2.value / out
         })  
    }
    


    if ((sol == 'RUB') && (sag == 'RUB')) {   
        amount2.value = amount1.value   
        solm.innerText = '1RUB = ' +out + 'RUB'
        sagm.innerText = '1RUB = ' + 1/out + 'RUB'
    
    }   
    if ((sol == 'RUB') && (sag == 'EUR')) {   
        amount2.value = amount1.value * out 
        solm.innerText = '1RUB = ' +out + 'EUR'
        sagm.innerText = '1EUR = ' + 1/out + 'RUB'
        r()
    }   
    if ((sol == 'RUB') && (sag == 'USD')) {  
        amount2.value = amount1.value * out; 
        solm.innerText = '1RUB = ' +out + 'USD'
        sagm.innerText = '1USD = ' + 1/out + 'RUB'
        r()
    }   
    if ((sol == 'RUB') && (sag == 'AZN')) {   
        amount2.value = amount1.value * out  
        solm.innerText = '1RUB = ' +out + 'AZN'
        sagm.innerText = '1AZN = ' + 1/out + 'RUB'
        r() 
    }   
    else if ((sol == 'USD') && (sag == 'USD')) {   
        amount2.value = amount1.value   
        solm.innerText = '1USD = ' +out + 'USD'
        sagm.innerText = '1USD = ' + 1/out + 'USD'
    }   
    else if ((sol == 'USD') && (sag == 'EUR')) {   
        amount2.value = amount1.value * out 
        solm.innerText = '1USD = ' +out + 'EUR'
        sagm.innerText = '1EUR = ' + 1/out + 'USD' 
        r() 
    }   
    else if ((sol == 'USD') && (sag == 'RUB')) {   
        amount2.value = amount1.value * out 
        solm.innerText = '1USD = ' +out + 'RUB'
        sagm.innerText = '1RUB = ' + 1/out + 'USD'
        r()  
    }   
    else if ((sol == 'USD') && (sag == 'AZN')) {   
        amount2.value = amount1.value * out
        solm.innerText = '1USD = ' +out + 'AZN'
        sagm.innerText = '1AZN = ' + 1/out + 'USD' 
        r()  
    }   
    else if ((sol == 'EUR') && (sag == 'EUR')) {   
        amount2.value = amount1.value   
        solm.innerText = '1EUR = ' +out + 'EUR'
        sagm.innerText = '1EUR = ' + 1/out + 'EUR'
    }   
    else if ((sol == 'EUR') && (sag == 'USD')) {   
        amount2.value = amount1.value * out
        solm.innerText = '1EUR = ' +out + 'USD'
        sagm.innerText = '1USD = ' + 1/out + 'EUR' 
        r()  
    }   
    else if ((sol == 'EUR') && (sag == 'RUB')) {   
        amount2.value = amount1.value * out  
        solm.innerText = '1EUR = ' +out + 'RUB'
        sagm.innerText = '1RUB = ' + 1/out + 'EUR' 
        r()
    }   
    else if ((sol == 'EUR') && (sag == 'AZN')) {   
        amount2.value = amount1.value * out 
        solm.innerText = '1EUR = ' +out + 'AZN'
        sagm.innerText = '1AZN = ' + 1/out + 'EUR'  
        r()
    }   
    else if ((sol == 'AZN') && (sag == 'AZN')) {   
        amount2.value = amount1.value   
        solm.innerText = '1AZN = ' +out + 'AZN'
        sagm.innerText = '1AZN = ' + 1
    }   
    else if ((sol == 'AZN') && (sag == 'RUB')) {   
        amount2.value = amount1.value * out;  
        solm.innerText = '1AZN = ' +out + 'RUB'
        sagm.innerText = '1RUB = ' + 1/out + 'AZN' 
        r()
    }   
    else if ((sol == 'AZN') && (sag == 'USD')) {   
        amount2.value = amount1.value * out   
        solm.innerText = '1AZN = ' +out + 'USD'
        sagm.innerText = '1USD = ' + 1/out + 'AZN'
        r()
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