import Header from "./components/Header";
import Footer from "./components/Footer"; // ESModules
import Home from "./pages/Home";
import Product from "./pages/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrinho from "./components/Carrinho";
import { createContext, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api";

export const ContextoCarrinho = createContext(null);

function App() {
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);

  const adicionarProduto = (quantidade, produto) => {
    const produtoAnterior = itensCarrinho.find(
      (item) => item.produto.id === produto.id
    );
    const quantidadeAnterior = produtoAnterior ? produtoAnterior.quantidade : 0;
    const novaQuantidade = quantidade + quantidadeAnterior;

    const novaLista = [
      ...itensCarrinho.filter((item) => item.produto.id !== produto.id),
      { quantidade: novaQuantidade, produto },
    ];

    setCarrinhoAberto(true);
    setItensCarrinho(novaLista);
    atualizarValorTotal(novaLista);
  };

  const removerProduto = (quantidade, produto) => {
    const produtoAnterior = itensCarrinho.find(
      (item) => item.produto.id === produto.id
    );
    const quantidadeAnterior = produtoAnterior ? produtoAnterior.quantidade : 0;

    const novaQuantidade = quantidadeAnterior - quantidade;

    const novaLista = [
      ...itensCarrinho.filter((item) => item.produto.id !== produto.id),
    ];

    novaQuantidade > 0
      ? novaLista.push({ quantidade: novaQuantidade, produto })
      : "";

    setCarrinhoAberto(true);
    setItensCarrinho(novaLista);
    atualizarValorTotal(novaLista);
  };

  const atualizarValorTotal = (novaLista) => {
    let valorTotalTemp = 0;

    novaLista.forEach(
      (item) => (valorTotalTemp += item.produto.precoDesconto * item.quantidade)
    );

    setValorTotal(valorTotalTemp);
  };

  return (
    <BrowserRouter>
      <ContextoCarrinho.Provider
        value={{
          carrinhoAberto,
          setCarrinhoAberto,
          itensCarrinho,
          setItensCarrinho,
          adicionarProduto,
          removerProduto,
          valorTotal,
          setValorTotal,
        }}
      >
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>

        <Carrinho />

        <Footer />
      </ContextoCarrinho.Provider>
    </BrowserRouter>
  );
}

export default App;
