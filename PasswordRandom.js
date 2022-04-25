const pLength = document.getElementById('pGLength')
const pUpperCases = document.getElementById('pGUpperCase');
const pLowerCase = document.getElementById('pGLowerCase');
const pSymbols = document.getElementById('pGSymbols');
const pNumbers = document.getElementById('pGNumbers');
const submit = document.getElementById('submit');
const password = document.getElementById('password');
const copy = document.getElementById('copy')




const stringLower = 'qwertyuiopasdfghjklzxcvbnm'
const stringMayus = stringLower.toUpperCase();
const allNumber = 1234567890
const specialCaracter = '!@#$%^&*=-_"'
/* let total = stringAll + stringMayus + allNumber + specialCaracter
 */









submit.addEventListener('click',()=>{
    let inicialPassword = "";
    (pUpperCases.checked) ? inicialPassword += stringMayus : '';
    (pLowerCase.checked) ? inicialPassword += stringLower : '';
    (pSymbols.checked) ? inicialPassword += specialCaracter : '';
    (pNumbers.checked) ? inicialPassword += allNumber : '';

    password.value = generatePassword(pLength.value, inicialPassword)
})


function generatePassword(l, inicialPassword){
  let pass = "";
  for(let i=0; i < l; i++){
    pass += inicialPassword.charAt(Math.floor(Math.random()* inicialPassword.length));
  }
  return pass;
}


copy.addEventListener('click',()=>{ 
  if(password.value == ''){
    alert('please generate a password')
  }else{
    password.select();
    document.execCommand('copy');
  }
  
})