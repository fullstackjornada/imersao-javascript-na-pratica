import { useEffect, useState } from "react";
import Produto from "../components/Produto";
import axios from "axios";

const Home = () => {
  const [produtos, setProdutos] = useState([]);

  // Variavel normal
  const variavel = "teste";
  // variavel = "teste2";

  // const [variavelEstado, setVariavelEstado] = useState("teste");

  // Forma errada
  // variavelEstado = "teste2";
  // Forma certa
  // setVariavelEstado("teste2");

  // Hook
  useEffect(() => {
    const requisicaoAxios = async () => {
      const { data } = await axios.get("/produto");

      console.log(data);
      setProdutos(data);
    };

    requisicaoAxios();
  }, []);

  if (produtos.length === 0) return <></>;

  return (
    <section className="secao-produto">
      <div className="container">
        <h1>Todos os produtos</h1>

        <div className="produtos">
          {produtos.map((produto) => (
            <Produto {...produto} key={produto.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
