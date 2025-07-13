import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container container--footer">
        <div className="diferenciais">
          <div className="diferencial">
            <img
              src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/payment.svg"
              alt="Ícone do Diferencial"
            />

            <h2 className="diferencial__h2">Escolha como pagar</h2>

            <p>
              Com Mercado Pago, você paga com cartão, boleto ou Pix. Você também
              pode pagar em até 12x sem cartão com a Linha de Crédito.
            </p>
          </div>

          <div className="barra-vertical"></div>

          <div className="diferencial">
            <img
              src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/shipping.svg"
              alt="Ícone do Diferencial"
            />

            <h2 className="diferencial__h2">Frete grátis a partir de R$ 19</h2>

            <p>
              Ao se cadastrar no Mercado Livre, você tem frete grátis em
              milhares de produtos.
            </p>
          </div>

          <div className="barra-vertical"></div>

          <div className="diferencial">
            <img
              src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/protected.svg"
              alt="Ícone do Diferencial"
            />

            <h2 className="diferencial__h2">Segurança, do início ao fim</h2>

            <p>
              Você não gostou do que comprou? Devolva! No Mercado Livre não há
              nada que você não possa fazer, porque você está sempre protegido.
            </p>
          </div>
        </div>

        <div className="copyright">
          <p>Copyright © 1999-2025 Ebazar.com.br LTDA.</p>
          <p>
            CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas, nº 3.003,
            Bonfim, Osasco/SP - CEP 06233-903 - empresa do grupo Mercado Livre.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
