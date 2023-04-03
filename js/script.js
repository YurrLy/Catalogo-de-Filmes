
let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");


btnBuscarFilme.onclick = () => {
    console.log(0);
  if(inputBuscarFilme.value.length > 0){
	console.log(inputBuscarFilme.value);
		let filmes = new Array();
    fetch("http://www.omdbapi.com/?apikey=f3259506&s=%22"+inputBuscarFilme.value)
		.then((resp)=> resp.json())
		.then((resp)=> {
			console.log(resp);
			if (resp.Search) {
                resp.Search.forEach((item) => {
                    console.log(item);
                    let filme=new Filme(
                        item.imdbID,
                        item.Title,
                        item.Year,
                        item.Genre,
                        null,
                        item.Poster,
                        null,
                        null,
                        null,
                        item.Rated,
                        null
                    );
                    filmes.push(filme);
                });
                listarFilmes(filmes);
            } else {
                console.log("Nenhum filme encontrado.");
            }});
  }
  return false;
};






// http://www.omdbapi.com/?apikey=f3259506&i="+inputBuscarFilme.value



let genero = ["Ação","Aventura","Ficção cientifica"];
let listarFilmes = async (filmes) => {
	console.log("yurilindo")
	let listaFilmes = await document.querySelector("#lista-filmes");
	listaFilmes.style.display = "flex";
	
	console.log(listaFilmes);
	if(filmes.length > 0) {
		filmes.forEach(async(filme) => {
			console.log(filme);
			listaFilmes.appendChild(await filme.getCard());
			filme.getBtnDetalhes().onclick=()=>{
				detalhesFilme(filme.id);
			}
		});
	}
}

let detalhesFilme = async (id)=>{
	fetch("http://www.omdbapi.com/?apikey=f3259506&i="+id)
	.then((resp)=> resp.json())
	.then((resp)=> {
		console.log(resp);
		let filme = new Filme(
		resp.imdb1D,
		resp.Title,
		resp.Year,
		resp.Genre.split(","),
		resp.Runtime,
		resp.Poster ,
		resp.plot,
		resp.Director,
		resp.Actors.split(","),
		resp.Awards,
		resp.imdbRating
		)
		document.querySelector("#mostrar-filme").appendChild(filme.getDetalhesFilme());
		document.querySelector("#lista-filmes").style.display="none";
		document.querySelector("#mostrar-filme").style.display="flex";
	});
	}
	
	