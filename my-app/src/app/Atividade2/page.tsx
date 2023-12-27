import Botao from "@/components/Botao";
import Cabecalho from "@/components/Cabecalho";
import Footer from "@/components/Footer";
import Imagem from "@/components/Imagem";
import ListaItens from "@/components/ListaItens";
import Paragrafo from "@/components/Paragrafo";
import Quadrado from "@/components/Quadrado";
import Titulo from "@/components/Titulo";

export default function Page2() {
  return (
    <body className="grid grid-cols-2 gap-3 border-spacing-1 border-4 border-lime-500 ">
      <div className="flex items-center justify-around border-spacing-1 border-4 border-sky-500 align-middle  py-0 px-0 w-full">
        <h1>QUESTÃO 1 : </h1>
        <Quadrado />
      </div>
      <div className="flex items-center justify-around border-spacing-1 border-4 border-sky-500 align-middle  py-0 px-0 w-full ">
        <h1> QUESTÃO 2 </h1>
        <Titulo />
      </div>
      <div className="flex items-center justify-around border-spacing-1 border-4 border-sky-500 align-middle  py-0 px-0 w-full">
        <h1> QUESTÃO 3 </h1>
        <Botao nome={"voltar"} />
      </div>
      <div className="flex items-center justify-around border-spacing-1 border-4 border-sky-500 align-middle  py-0 px-0 w-full">
        <h1> QUESTÃO 4 </h1>
        <ListaItens />
      </div>
      <div className="flex items-center justify-around border-spacing-1 border-4 border-sky-500 align-middle  py-0 px-0 w-full">
        <h1> QUESTÃO 5 </h1>
        <Imagem />
      </div>
      <div className="flex items-center justify-around border-spacing-1 border-4 border-sky-500 align-middle  py-0 px-0 w-full">
        <h1> QUESTÃO 6 </h1>
        <Paragrafo />
      </div>
      <div className="flex items-center justify-around border-spacing-1 border-4 border-sky-500 align-middle  py-0 px-0 w-full">
        <h1> QUESTÃO 7 </h1>
        <Cabecalho />
      </div>
      <div className="flex items-center justify-around border-spacing-1 border-4 border-sky-500 align-middle  py-0 px-0 w-full">
        <h1> QUESTÃO 8 </h1>
        <Footer />
      </div>
    </body>
  );
}
