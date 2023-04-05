
let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");
let favoritos = document.querySelector("#favoritos")

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        let filmes =  new Array();
    fetch("http://www.omdbapi.com/?apikey=21779dab&s="+inputBuscarFilme.value)
        .then((resp)=> resp.json())
        .then((resp)=> {
                resp.Search.forEach((item) => {
                    let filme=new Filme(
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
        });
    }
    return false;
};

let listarFilmes = async (filmes) => {
    let listaFilmes = await document.querySelector("#lista-filmes");
    listaFilmes.style.display="flex";
    listaFilmes.innerHTML = "";
    document.querySelector("#mostrar-filmes").innerHTML="";
    document.querySelector("#mostrar-filmes").style.display="none";
    if(filmes.length > 0){
        filmes.forEach(async(filme) => {
            listaFilmes.appendChild(await filme.getCard());
            filme.getBtnDetalhes().onclick=()=>{
                detalhesFilme(filme.id);
                document.querySelector("#mostrar-filmes").style.display="flex";
                document.querySelector("#lista-filmes").style.display="none";
            }
        });
    }
}

let detalhesFilme = async (id) =>{
    fetch("https://www.omdbapi.com/?apikey=f3259506&i="+id)
    .then((resp) => resp.json())
    .then((resp) => {
        console.log(resp);
        let filme = new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Genre.split(","),
            resp.Runtime,
            resp.Poster,
            resp.Plot,
            resp.Director,
            resp.Actors.split(","),
            resp.Awards,
            resp.imdbRating
        )
        document.querySelector("#mostrar-filmes").appendChild(filme.getDetalhesFilme());
        document.querySelector("#lista-filmes").style.display="none";
        document.querySelector("#mostrar-filmes").style.display="flex";

        document.querySelector("#btn-fechar").onclick = ()=>{

            document.querySelector("#lista-filmes").style.display="flex";
            document.querySelector("#mostrar-filmes").innerHTML="";
            document.querySelector("#mostrar-filmes").style.display="none";
        }

        document.querySelector("#btn-salvar").onclick = () =>{
            filmeSalvar(filme);
        }

        let filmeFavoritoStr = localStorage.getItem("favoritos");
        let movies = JSON.parse(filmeFavoritoStr);
        movies = JSON.stringify(movies);

    });
}

let filmeSalvar = (filme) => {
    let favoritosSrtg = localStorage.getItem("favoritos");
    let filmes = JSON.parse(favoritosSrtg);
    if (filmes !== null) {
        let removerFilme = filmes.findIndex(f => f.id === filme.id);
        if (removerFilme !== -1) {
            filmes.splice(removerFilme, 1); 
        } else {
            filmes.push(filme); 
        }
    } else {
        filmes = [filme]
    }
    filmes = JSON.stringify(filmes);
    localStorage.setItem("favoritos",filmes);
}

favoritos.onclick = () =>{
    ListarFavoritos();
}

    function ListarFavoritos() {
        let favoritos = localStorage.getItem("favoritos");
        favoritos = JSON.parse(favoritos);
        let filmes = new Array();
        favoritos.forEach((item) => {
            let filme = new Filme(
                item.id,
                item.titulo,
                item.ano,
                item.genero,
                item.duracao,
                item.cartaz,
                item.direcao,
                item.elenco,
                item.classificacao,
                item.avaliacao
            );
            filmes.push(filme);
        });
        listarFilmes(filmes);
    }

    



