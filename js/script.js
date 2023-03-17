
let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");

btnBuscarFilme.onclick = () => {
    console.log(0);
  if(inputBuscarFilme.value.length > 0){
		let filmes = new Array();
    fetch("http://www.omdbapi.com/?apikey=f3259506&s="+inputBuscarFilme.value)
		.then((resp)=> resp.json())
		.then((resp)=> {
			resp.Search.forEach((item)=>{
				console.log(item);
				let filme = new Filme(
					item.imdbID,
					item.Title,
					item.Year,
					null,
					null,
					item.Poster,
					null,
					null,
					null,
					null,
					null
				);
				filmes.push(filme);
			});
			listarFilmes(filmes);			
		})	
  }
  return false;
}

let genero = ["Ação","Aventura","Ficção cientifica"];

let listarFilmes = async (filmes) => {
	let listaFilmes = await document.querySelector("#lista-filmes");
	listaFilmes.innerHTML = "";
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
	fetch("http://www.omdbapi.com/?apikey=f3259506&s="+id)
	.then((resp)=> resp.json())
	.then((resp)=> {
	
	
	
	});
	}
	