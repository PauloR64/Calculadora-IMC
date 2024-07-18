
const btn_calcular = document.getElementById('btn_calcular');


function imc () {

    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if ( nome !== '' && altura !== '' && peso !== '') {
        const valorImc = ( peso/(altura * altura));
        

        let classifição = "";

        if (valorImc < 18.5) {
            classifição = 'Voçê esta Abaixo do peso.'
        } else if ( valorImc < 25) {
            classifição = 'Voçê esta no peso ideal. Parabéns'
        }else if ( valorImc < 30) {
            classifição = 'Voçê esta levemente acima do peso!'
        }else if ( valorImc < 35) {
            classifição = 'Voçê esta com obesidade grau I'
        }else if ( valorImc < 40) {
            classifição = 'Voçê esta com obesidade grau II'
        }else{
            classifição = 'Voçê esta com obesidade grau III'
        }
        
        resultado.textContent = `${nome}, seu IMC é : ${valorImc.toFixed(2)}.${classifição}.`

    } else {
        resultado.textContent = "Preencha todos os campos!!"
    }
}

btn_calcular.addEventListener('click',imc);