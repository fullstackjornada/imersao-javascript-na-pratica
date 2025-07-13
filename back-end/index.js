import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(express.json());
app.use(cors());

app.get("/produto", async (req, res) => {
  const produtos = await prisma.produto.findMany();

  res.json(produtos);
});

app.post("/produto", async (req, res) => {
  // Desestruturação
  //   const body = req.body; // {}
  //   const { body } = req; // {}
  const {
    titulo,
    preco,
    precoParcelado,
    precoDesconto,
    caracteristicas,
    imagens,
    estoque,
    freteGratis,
    full,
  } = req.body;

  const novoProduto = await prisma.produto.create({
    data: {
      titulo,
      preco,
      precoParcelado,
      precoDesconto,
      caracteristicas: JSON.stringify(caracteristicas),
      imagens: JSON.stringify(imagens),
      estoque,
      freteGratis,
      full,
    },
  });

  //   console.log(body.nome);
  //   console.log(body.imersao);

  res.json(novoProduto);
});

app.get("/produto/:id", async (req, res) => {
  const { id } = req.params;

  const produto = await prisma.produto.findUnique({
    where: { id: Number(id) },
  });

  res.json(produto);
});

app.delete("/produto/:id", async (req, res) => {
  const { id } = req.params;

  const produtoDeletar = await prisma.produto.delete({
    where: { id: Number(id) },
  });

  res.json(produtoDeletar);
});

app.post("/pedido", async (req, res) => {
  const { valorTotal, itensVenda } = req.body;

  const novoPedido = await prisma.pedido.create({
    data: {
      valorTotal,
      itensVenda: JSON.stringify(itensVenda),
    },
  });

  res.json(novoPedido);
});

// app.post("/produto/:id", (req, res) => {
//   // Desestruturação
//   //   const body = req.body; // {}
//   const { body } = req; // {}
//   const { nome, imersao } = body;

//   //   Forma normal
//   const idDaMinhaRequisicao = req.params.id;
//   //   Forma desestruturada
//   const { id } = req.params;
//   //   PascalCase
//   // camelCase

//   //   console.log(idDaMinhaRequisicao, id);
//   //   console.log(body.nome);
//   //   console.log(body.imersao);

//   res.json({ nome, imersao, id });
// });

app.listen(3000, () =>
  console.log("Meu servidor está rodando na porta http://localhost:3000")
);

// GET - Pegar informações
// PUT/PATCH - Editar informações
// DELETE - Deletar informações
// POST - Criar informações
// Endpoint
// Rota

// Arrow Function
// const Header = () => console.log()

// Forma tradicional
// function Header() {
// console.log()
// }
