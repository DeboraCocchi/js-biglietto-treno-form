const generaBigl = document.getElementById('genera-bigl');

document.getElementById('reset-fields').addEventListener('click', function(){
  document.getElementById('totalprice').innerHTML  = ``;
  document.getElementById('sconto').innerHTML  = ``;
})

generaBigl.addEventListener('click', function(){
  const userAge = document.querySelector('#eta').value;
  const userDistance = document.querySelector('#km').value;
  const userName = document.querySelector('#user-name').value;
  const userSurname = document.querySelector('#user-surname').value;
  let discount;
  
  if(userAge<=0 || isNaN(userAge) || userDistance<=0 ||isNaN(userDistance) || userName===null || userSurname===null ){
    document.getElementById('totalprice').innerHTML  = `Compila tutti i campi richiesti`;
    document.querySelector('#eta').value= ' ';
    document.querySelector('#km').value='';
    document.querySelector('#user-name').value='';
    document.querySelector('#user-surname').value='';
    
  }
  
  else{
      if(userAge < 18){
          discount = 0.2;
          document.getElementById('sconto').innerHTML=`&#8594;  Puoi beneficiare dello sconto junior pari al <strong>${discount*100}% !</strong>`
        }else if(userAge >= 65){
          discount = 0.4;
          document.getElementById('sconto').innerHTML=`&#8594; Puoi beneficiare dello sconto senior pari al <strong>${discount*100}% !</strong>`
        }else{
          discount = 0;
        } 

    
    const ticketPrice = userDistance * 0.21 * (1 - discount);
    console.log('prezzo del biglietto', ticketPrice);
    console.log('sconto', discount);
    const roundedPrice = ticketPrice.toFixed(2);
    document.getElementById('totalprice').innerHTML  = `Ciao ${userName}
    ${userSurname}, <br> Il prezzo totale del tuo biglietto è:<strong> ${roundedPrice} €</strong> 
    `;  
  }
  });
