function pesquisar(){

    let section = document.getElementById("section-response");
    let label = document.getElementById("input").value
    console.log(label);
    
    for (let dado of dados){
        dado_arrumado = dado.titulo.replace(/\s+/g, '')
        label_arrumado = label.replace(/\s+/g, '')
        if(dado_arrumado === label_arrumado){
            section.innerHTML = `
            <div class="d-flex justify-center align-center" >
                    <div class="time-info description ">
                    <h2>
                        <a href="${dado.link}">${dado.titulo} </a>
                    </h2>
                    <p style="text-align: justify; margin: 0 30px;">
                        ${dado.descricao}
                    </p>
                    </div>
                </div>
            `
            break;
        }else{
            section.innerHTML += `
                <div class="d-flex justify-center align-center" >
                        <div class="time-info description ">
                        <h2>
                            <a href="${dado.link}">${dado.titulo} </a>
                        </h2>
                        <p style="text-align: justify; margin: 0 30px;">
                            ${dado.descricao}
                        </p>
                        </div>
                    </div>
                `
    }
    }
}
        



function limpar(){
    let label = document.getElementById("input").value = " "
}

