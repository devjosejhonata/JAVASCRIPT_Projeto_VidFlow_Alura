
const containerVideos = document.querySelector(".videos__container");

//Buscando dados da api e exibindo na pagina
async function buscarEMostrarVideos(){

   try {
      const busca = await fetch("http://localhost:3000/videos");
      const videos = await busca.json();

      videos.forEach(video => {
         containerVideos.innerHTML += `
            <li class="videos__item">
               <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
               <div class="descricao-video">
                     <img class="img-canal" src = "${video.imagem}" alt="Logo do Canal">
                     <h3 class="titulo-video">${video.titulo}</h3>
                     <p class="titulo-canal">${video.descricao}</p>
                  </div>
            </li>
         `;    
      })
   } catch(error) {
      containerVideos.innerHTML = `<p>Houve um erro ao carregar os vídeos: ${error}</p>`;
   }
}

buscarEMostrarVideos();

//barra de pesquisa
const barraDePesquisa = document.querySelector(".pesquisar__input");

barraDePesquisa.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa() {
   const videos = document.querySelectorAll(".videos__item");
   const valorFiltro = barraDePesquisa.value.toLowerCase(); // Obtenha o valor fora do loop

   videos.forEach(video => {
      const titulo = video.querySelector(".titulo-video").textContent.toLowerCase();

      // Verifica se o título inclui o valor do filtro ou se o campo de pesquisa está vazio
      video.style.display = titulo.includes(valorFiltro) || valorFiltro === "" ? "block" : "none";
   });
}

/*
function filtrarPesquisa() {
   const videos = document.querySelectorAll(".videos__item");

   if (barraDePesquisa.value != "") {
      for (let video of videos) {
         let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
         let valorFiltro = barraDePesquisa.value.toLowerCase();

         if(!titulo.includes(valorFiltro)) {
            video.style.display = "none";
         } else {
            video.style.display = "block";
         }
      }
   } else {
      video.style.display = "block";
   }
}
*/