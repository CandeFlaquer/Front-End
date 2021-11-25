/* https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png son 898*/

const h1 = document.querySelector("h1");
const container = document.querySelector("#container");

for (let i = 1; i <= 600; i++) {
  const pokey = document.createElement("div");
  const img = document.createElement("img");
  const p = document.createElement("p");
  pokey.classList.add("pokemon");

  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  p.innerText = `Nº ${i}`;

  pokey.append(img);
  pokey.append(p);
  container.append(pokey);

  if (i === 151 || i === 196 || i === 330 || i === 350)
    pokey.setAttribute("id", "favs");
}
