//alterer o vlaor de str para ir validando as condições 

let str = 'qaaaa'

function CodelandUsernameValidation(str) { 

  console.clear();
  
  const string = str;

  let Validator = true;

   let size = string.split('')

  const ValidInit = ['a', 'b' ,'c' , 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

   if(size.length < 4){
    console.log('seu nome deve conter pelo menos 4 letras')
    Validator = !Validator;
    // return false
   }
    
    if(size.length > 25){
    console.log('Seu nome não deve conter mais do que 25 caracteres')
    Validator = !Validator;
    // return false
    }

  for (let i = 0; i < size.length; i++){

    if(!ValidInit.includes(size[0])){
      console.log('O primeiro caractere do seu nome deve ser uma letra ')
      Validator = !Validator;
      break;
    }

    if(!ValidInit.includes(size[i])){
      console.log('Seu nome deve conter apenas letras')
      Validator = !Validator;
      break;
    }
   
  }

  console.log(Validator)

}

CodelandUsernameValidation(str);