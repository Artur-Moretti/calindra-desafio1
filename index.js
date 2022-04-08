

const btn = $("#botao");
const pesquisar = $("#pesquisa").val();
let conteudo;
console.log(pesquisar)
btn.on("click", function (event) {
    event.preventDefault();
    busca();
});

function busca() {

    $.ajax({
        url:`https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=`+$("#pesquisa").val()+`&source=nanook`,
    

        success: function (resultado) {
           
             let corpo = "";
        for(let i=0; i < resultado.products.length; i++ ){
          corpo += "<h2 style='margin:15px'>" + resultado.products[i].name + "</h2>"

        }

        $('#resultado').html(corpo)
           
        }
    });
    
}