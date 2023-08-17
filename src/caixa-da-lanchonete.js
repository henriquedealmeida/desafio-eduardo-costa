class CaixaDaLanchonete {
    
    calcularValorDaCompra(formaDePagamento, itens) {
        const cardapio = {
            cafe: {descricao:'Café', valor:3.00},
            chantilly: {descricao:'Chantilly (extra do Café)', valor:1.50},
            suco: {descricao:'Suco Natural', valor:6.20},
            sanduiche: {descricao:'Sanduíche', valor:6.50},
            queijo: {descricao:'Queijo (extra do Sanduíche)', valor:2.00},
            salgado: {descricao:'Salgado', valor:7.25},
            combo1: {descricao:'1 Suco e 1 Sanduíche', valor:9.50},
            combo2: {descricao:'1 Café e 1 Sanduíche', valor:7.50},
        };


        let valorTotal = 0;
        let pedidoCafe = false;
        let pedidoSanduiche = false;

        const opcoesPagamento = ['dinheiro', 'debito', 'credito'];

        if (itens.length === 0) {
            return  'Não há itens no carrinho de compra!';
        }

        if (!opcoesPagamento.includes(formaDePagamento)) {
            return 'Forma de pagamento inválida!';
        }

        for (const item of itens) {
            const [codigo, quantidade] = item.split(',');

            if (!cardapio[codigo]) {
                return 'Item inválido!';
            }

            if (Number(quantidade) >= 0) {
                return 'Quantidade inválida!';
            }

            valorTotal += cardapio[codigo] * Number(quantidade);

            if (codigo === "cafe") {
                pedidoCafe = true;
            }
            if (codigo === "sanduiche") {
                pedidoSanduiche = true;
            }
            if (codigo === "chantily" && !pedidoCafe) {
                return "Item extra não pode ser pedido sem o principal";
            }
            if (codigo === "queijo" && !pedidoSanduiche) {
                return "Item extra não pode ser pedido sem o principal";
            }
        }

        
        if (formaDePagamento === 'dinheiro') {
            valorTotal *= 0.95;
        } else if (formaDePagamento === 'credito') {
            valorTotal *= 1.03;
        } 
        return `R$ ${valorTotal.toFixed(2)}`;

    }

}

export { CaixaDaLanchonete };