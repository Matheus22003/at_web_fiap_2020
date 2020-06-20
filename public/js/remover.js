function remover(numeroBtn) {
    $(`#remover${numeroBtn}`).click(() => {
        //Inicio Adiconar Item e mostrar qtde
        var qtde = Number($(`#qtde${numeroBtn}`).text());

        if (qtde <= 0) {
            alert(`Não pode deixar com menos de 0`)
        }
        else {
            $(`#qtde${numeroBtn}`).text(qtde - 1);
            //Fim Adiconar Item e mostrar qtde

            const preco = Number($(`#preco${numeroBtn}`).text());
            var valorFinal = Number($(`#valorFinal`).text());

            $(`#valorFinal`).text(valorFinal - preco);
        }




    })

}