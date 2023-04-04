class Ator 
{
  constructor(id, nome){
      this.nome=nome;
      this.id=id;
  }
}

class Diretor 
{
  constructor(id, nome){
      this.nome=nome;
      this.id=id;
  }
}

class Filme 
{
  constructor(id, titulo, ano, genero, duracao, cartaz, sinopse, direcao, elenco, classificacao, avaliacao){
      this.id=id;
      this.titulo=titulo;
      this.ano=ano;
      this.genero=genero;
      this.duracao=duracao;
      this.sinopse=sinopse;
      this.cartaz=cartaz;
      this.direcao=direcao;
      this.elenco=elenco;
      this.classificacao=classificacao;
      this.avaliacao=avaliacao;
      this.btnDetalhes=null;
  }

getCard = () => {
  let card = document.createElement("div");
    card.setAttribute("class", "card , cardd");
    let imgCartaz = document.createElement("img");
  imgCartaz.setAttribute("class", "card-img-topz");
  imgCartaz.setAttribute("src", this.cartaz);
  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body , cardd-body");
  let hCardTitle = document.createElement("h5");
  hCardTitle.setAttribute("class", "card-title , cardd-title");
  let divDetalhes = document.createElement("div");
  divDetalhes.setAttribute("style","display:flex; justify-content:space-around;");
  let divAnoProducao = document.createElement("div");
  divAnoProducao.setAttribute("class", "p-ano-producao");
  divAnoProducao.setAttribute("style", "flex-grow:1;");
  hCardTitle.appendChild(document.createTextNode(this.titulo));
  divAnoProducao.appendChild(document.createTextNode(this.ano));
  divDetalhes.appendChild(divAnoProducao);
  card.appendChild(imgCartaz);
  card.appendChild(cardBody);
  cardBody.appendChild(hCardTitle);
  cardBody.appendChild(divDetalhes);

  this.setBtnDetalhes();
  cardBody.appendChild(this.getBtnDetalhes());

  return card;
  
}
  setBtnDetalhes = () =>{
      this.btnDetalhes = document.createElement('button');
      this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
      this.btnDetalhes.setAttribute("id", this.id);
      this.btnDetalhes.setAttribute("class", "btn btn-primary");
  }

  getBtnDetalhes = () =>{
      return this.btnDetalhes;
  }

  getDetalhesFilme = () =>{

      let detalhesFilme = document.createElement("div");
      detalhesFilme.setAttribute("class", "row g-0");
       detalhesFilme.setAttribute("style", "display:flex; justify-content:center; width:100%; margin-top:10vh");

      let div_ImgDetalhes = document.createElement("div");
      div_ImgDetalhes.setAttribute("class","col-md-4");

      let div_MainDetalhes = document.createElement("div");
      div_MainDetalhes.setAttribute("class","col-md-12");

      let mainDetalhes = document.createElement("div");
      mainDetalhes.setAttribute("class","card-body");

      let imgDetalhes = document.createElement("img");
      imgDetalhes.setAttribute("class", "img-fluid rounded-start");
      imgDetalhes.setAttribute("src", this.cartaz);

      let generoDetalhes = document.createElement("p");
      generoDetalhes.setAttribute("class","card-text");
      generoDetalhes.appendChild(document.createTextNode(this.genero));

      let tituloDetalhes = document.createElement("h5");
      tituloDetalhes.setAttribute("class","card-title");
      tituloDetalhes.appendChild(document.createTextNode(this.titulo));

      let premiosDetalhes = document.createElement("p");
      premiosDetalhes.setAttribute("class","card-text");
      premiosDetalhes.appendChild(document.createTextNode(this.classificacao));

      let anoDetalhes = document.createElement("p");
      anoDetalhes.setAttribute("class","card-text");
      anoDetalhes.appendChild(document.createTextNode(this.ano));

      let notaDetalhes = document.createElement("p");
      notaDetalhes.setAttribute("class","card-text");
      notaDetalhes.appendChild(document.createTextNode(this.avaliacao));

      let resumoDetalhes = document.createElement("p");
      resumoDetalhes.setAttribute("class","card-text");
      resumoDetalhes.appendChild(document.createTextNode(this.sinopse));

      let tempoDetalhes = document.createElement("p");
      tempoDetalhes.setAttribute("class","card-text");
      tempoDetalhes.appendChild(document.createTextNode(this.duracao));

      let elencoDetalhes = document.createElement("p");
      elencoDetalhes.setAttribute("class","card-text");
      elencoDetalhes.appendChild(document.createTextNode(this.elenco));

      let btnFechar = document.createElement("button");
      btnFechar.setAttribute("class","btn btn-primary");
      btnFechar.setAttribute("id","btn-fechar");
      btnFechar.textContent = "Voltar"

      let diretorDetalhes = document.createElement("p");
      diretorDetalhes.setAttribute("class","card-text");
      diretorDetalhes.appendChild(document.createTextNode(this.direcao));

      div_ImgDetalhes.appendChild(imgDetalhes);
      detalhesFilme.appendChild(div_ImgDetalhes);
      div_MainDetalhes.appendChild(mainDetalhes);
      detalhesFilme.appendChild(div_MainDetalhes);

      mainDetalhes.appendChild(tituloDetalhes);
      mainDetalhes.appendChild(resumoDetalhes);
      mainDetalhes.appendChild(generoDetalhes);
      mainDetalhes.appendChild(diretorDetalhes);
      mainDetalhes.appendChild(elencoDetalhes);
      mainDetalhes.appendChild(anoDetalhes);
      mainDetalhes.appendChild(tempoDetalhes);
      mainDetalhes.appendChild(notaDetalhes);
      mainDetalhes.appendChild(premiosDetalhes);
      mainDetalhes.appendChild(btnFechar);
      

      return detalhesFilme;
  }
}