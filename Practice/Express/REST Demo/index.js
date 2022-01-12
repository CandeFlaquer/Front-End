const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require("uuid");

app.use(express.urlencoded({ extended: true }));
/* So that express parses req.body */
app.use(express.json()); /* So it parses json */
app.use(
  methodOverride("_method")
); /* Para poder utilzar el delete de express en el navegador */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
  {
    id: uuid(),
    username: "Todd",
    comment: "lol, chickens!",
  },
  {
    id: uuid(),
    username: "KND",
    comment: "Yoh mama",
  },
  {
    id: uuid(),
    username: "Darcan",
    comment: "is so cute!",
  },
  {
    id: uuid(),
    username: "Candi",
    comment: "Love you Manu",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
}); /* Creamos el formulario */

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({
    username,
    comment,
    id: uuid(),
  }); /* ^ Almacenamos la data del formulario de arriba */
  /* Acá abajo lo redireccionamos a l página index donde estan todos los comentarios */
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;
  //Actualizamos el comment de ese a el "newCommentText" que sacamos del body
  res.redirect("/comments");
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter(
    (c) => c.id !== id
  ); /* En express preferimos no mutar los array si no que hacerles una copia. Despues se hace con database deleteando y listo. */
  res.redirect("/comments");
});

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
  const { meat, qty } = req.body;
  res.send(`Here's your ${qty} ${meat} tacos.`);
});

app.listen(3000, () => {
  console.log("On port 3000!");
});
