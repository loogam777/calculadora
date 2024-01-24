function calcula(tipo, valor){ // funcao pra deixa os valor 


// if e else pra pega os numero e acao 

 if(tipo === 'num'){

    // let valorCampo = document.getElementById('resultado').value //maneira mais hard

    document.getElementById('resultado').value +=  valor  //maneira mais facil 

 }
 
 else if (tipo === 'acao'){
   
   if (valor === 'c'){

    document.getElementById('resultado').value = ''

   }

  if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){

  document.getElementById('resultado').value += valor

  }

  if (valor === '='){

    let valorCampo = eval(document.getElementById('resultado').value)
    document.getElementById('resultado').value = valorCampo

  }

 }

 

}