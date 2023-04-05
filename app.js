const card = document.querySelector(".card");
const body = document.body;
body.style.maxWidth = "1200px";
body.style.margin = "0 auto";
body.style.padding = "0 10px";
body.style.fontFamily = " 'Delicious Handrawn', cursive, sans-serif";
body.style.backgroundColor = "orange";

function render() {
  pokemons.forEach((e, index, arr) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <img src="${e.img}" alt="logo" style="width:150px; height:150px;"/>
      <hr/ style="border:1px solid black">
      <h3 style="font-size:32px; line-height:26px;">${e.name}</h3>
      <p style="font-size:28px; line-height:22px;">${e.candy}</p>
      <ul style="display:flex; justify-content:space-evenly; text-align:center; list-style:none; padding:0;
       <li style="font-weight:bold; font-size:26px; line-height:20px;">${e.height}</li>
       <li style="font-weight:bold; font-size:26px; line-height:20px;">${e.weight}</li>
      </ul>
      <button type="onclick" style="font-family: 'Delicious Handrawn', cursive;font-size:28px; line-height:22px; padding: 5px 8px; cursor:pointer; border-radius: 20px; background-color:white;">Add to cart</button>
    `;

    pokemons.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });

    div.style.width = "280px";
    div.style.height = "360px";
    div.style.margin = "10px 0";
    div.style.backgroundColor = "white";
    div.style.borderRadius = "20px";
    div.style.textAlign = "center";
    div.style.border = "2px solid black";
    card.append(div);
    card.style.display = "flex";
    card.style.alignItems = "center";
    card.style.justifyContent = "space-between";
    card.style.flexWrap = "wrap";
  });
}

render();
