import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextoCarrinho } from "../App";

const Header = () => {
  const { carrinhoAberto, setCarrinhoAberto, itensCarrinho } =
    useContext(ContextoCarrinho);
  let quantidadeCarrinho = 0;
  // const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0);

  itensCarrinho.forEach((item) => (quantidadeCarrinho += item.quantidade));

  return (
    <header>
      <Link to={"/"}>
        <img
          src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.128/mercadolibre/pt_logo_large_plus.webp"
          alt="Logo do MercadoLivre"
        />
      </Link>

      <div className="relative">
        <svg
          id="svg-icone"
          width="22"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="svg-icone"
          onClick={() => setCarrinhoAberto(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>

        {itensCarrinho.length > 0 ? (
          <p className="carrinho__numero">{quantidadeCarrinho}</p>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};

export default Header;

// function Header() {

// }

// const Header = () => {

// }
