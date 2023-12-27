import Link from "react-dom";
import Botao from "../Botao";

function Cabecalho() {
  return (
    <header className="flex items-end justify-between border-0 px-0 h-36 m-0 bg-slate-600 ">
      <div>
        <img
          src="imagens\globo.png"
          alt="imagem do globo"
          className=" align-middle h-32 ml-3 mt-2 mb-2"
        ></img>
      </div>
      <div className="mb-0">
        <Botao nome={"Home"} />
        <Botao lugar="Grid/FlexBox" nome={"Atividade1"} />
        <Botao lugar="Atividade2" nome={"Atividade2"} />
        <Botao lugar="Organo" nome={"Organo"} />
      </div>
    </header>
  );
}

export default Cabecalho;
