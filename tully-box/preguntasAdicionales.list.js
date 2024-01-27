//---------- Showing Content Code  Related
// ListItems Problemas
let list_Problemas = document.querySelector(".output_problemas ul");
list_Problemas.innerHTML = "";

// ListItem Medios
let list_Medios = document.querySelector(".output_ee ul");
list_Medios.innerHTML = "";

for (let i = 0; i < 5; i++) {
  let result_Problemas = list_Problemas[i];
  let result_Medios = list_Medios[i];
  let listItem_Problemas = document.createElement("li");
  let listItem_Medios = document.createElement("li");
  listItem_Problemas.textContent = result_Problemas;
  listItem_Medios.textContent = result_Medios;
  list_Problemas.appendChild(listItem_Problemas);
  list_Medios.appendChild(list_Medios);
}
