/* function teste(){
    alert('Welcome!')
} */

let teste = () => alert('Welcome!');



function adicionar(){
    let text = document.querySelector('#text');
    let res = document.querySelector('#res')

    let valor = text.value.trim(); // o trim tira espacos no começo/fim
    
   
    if (valor === ''){
    alert ('Digite uma tarefa!');
    } else{

        let item = document.createElement('div');
        item.classList.add('item');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        let texto = document.createElement('span');
        texto.innerHTML = valor;
        let botao = document.createElement('button');
        botao.innerText = 'x';
        botao.classList.add('del');

        //juntando tudo na div
        item.appendChild(checkbox);
        item.appendChild(texto);
        item.appendChild(botao);

        //adicionar item dentro de res

        res.appendChild(item);


        botao.addEventListener( 'click', function(){
            res.removeChild(item);
        });

        checkbox.addEventListener('change', function(){
            if(checkbox.checked){
                texto.style.textDecoration = 'line-through';
                texto.style.opacity = '0.6';
            }else{
                texto.style.textDecoration = 'none';
                texto.style.opacity = '1';
            }
        });

        text.value = '';
        text.focus();
    }

    
}