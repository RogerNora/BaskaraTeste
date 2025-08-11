  // captura os elementos do HTML
const A = document.getElementById("par_A");
const B = document.getElementById("par_B");
const C = document.getElementById("par_C");
const botao = document.getElementById("calculaAi");
const resultado = document.getElementById("resultado");

// evento de clique
botao.addEventListener("click", function(){
    
// captura os valores como texto
const valorA = A.value.trim();
const valorB = B.value.trim();
const valorC = C.value.trim();

  // verifica se os campos estão preenchidos
if (valorA === "" || valorB === "" || valorC === "") {
resultado.textContent = "Preencha todos os campos!";
return;
}  
    
//le os valores como numeros
const a = Number(A.value);
const b = Number(B.value);
const c = Number(C.value);
    
    //verifica se são numeros validos
if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    
    // verifica se é mesmo uma equação de segundo grau
    if(a ===0){
        resultado.textContent = "Para de frescura e faz na mao";
    } else{
        //calcula delta
        const delta = b*b-4*a*c;
            
        if (delta<0){
            resultado.textContent = "Não tem raiz real"
        } else {
        // tira raiz quadrada de delta
            const raizDelta = Math.sqrt(delta);
            //calcula as raizes 
            const x1 = (-b+raizDelta)/(2*a);
            const x2 = (-b-raizDelta)/(2*a);
            //mostra o resultado 
            resultado.textContent = `Raizes x1 = ${x1}  e x2 = ${x2}`
        }               
    }
    } else {
            //caso seja numero invalido
            resultado.textContent = "Por favor, insira valores válidos.";
    } 
});



