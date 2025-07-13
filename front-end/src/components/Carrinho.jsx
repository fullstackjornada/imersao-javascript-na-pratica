import React, { useContext } from "react";
import { ContextoCarrinho } from "../App";
import axios from "axios";

const Carrinho = () => {
  // const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const {
    carrinhoAberto,
    setCarrinhoAberto,
    itensCarrinho,
    setItensCarrinho,
    adicionarProduto,
    removerProduto,
    valorTotal,
    setValorTotal,
  } = useContext(ContextoCarrinho);

  const fecharPedido = async () => {
    const { data } = await axios.post("/pedido", {
      valorTotal,
      itensVenda: itensCarrinho,
    });

    console.log(data);

    window.alert("Seu pedido foi criado com sucesso!");

    setValorTotal(0);
    setItensCarrinho([]);
    setCarrinhoAberto(false);
  };

  if (!carrinhoAberto) return <></>;

  return (
    <div className="carrinho">
      <div className="carrinho__titulo">
        <h2>Carrinho</h2>

        <p
          className="carrinho__fechar"
          onClick={() => setCarrinhoAberto(false)}
        >
          X
        </p>
      </div>

      {itensCarrinho.length > 0 ? (
        <>
          <div className="carrinho__produtos">
            {/* itensCarrinho = [
          {quantidade: 1, produto: {}},
          {quantidade: 2, produto: {}}
        ] */}
            {itensCarrinho.map(({ quantidade, produto }, index) => (
              <div className="carrinho__produto" key={index}>
                <div className="carrinho__img-titulo">
                  <div className="carrinho__img">
                    <img
                      src={JSON.parse(produto.imagens)[0]}
                      alt="Imagem do produto"
                    />
                  </div>

                  <p>{produto.titulo}</p>
                </div>

                <div className="carrinho__quantidade">
                  <div className="carrinho__icone-qtd">
                    <p
                      className="carrinho__sinal"
                      onClick={() => removerProduto(1, produto)}
                    >
                      -
                    </p>
                    <p>{quantidade}</p>
                    <p
                      className="carrinho__sinal"
                      onClick={() => adicionarProduto(1, produto)}
                    >
                      +
                    </p>
                  </div>

                  <p>
                    R${" "}
                    {(quantidade * produto.precoDesconto).toLocaleString(
                      "pt-BR"
                    )}
                  </p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    onClick={() => removerProduto(quantidade, produto)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="carrinho__pedido">
            <p>
              <span className="bold">Valor total:</span> R${" "}
              {valorTotal.toLocaleString("pt-BR")}
            </p>

            <button onClick={() => fecharPedido()}>Fechar pedido</button>
          </div>
        </>
      ) : (
        <p className="text-center">Seu carrinho está vazio</p>
      )}
    </div>
  );
};

export default Carrinho;
