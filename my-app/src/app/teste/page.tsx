import Botao from "@/components/Botao";
import Cabecalho from "@/components/Cabecalho";
import Footer from "@/components/Footer";
import Imagem from "@/components/Imagem";
import ListaItens from "@/components/ListaItens";
import Paragrafo from "@/components/Paragrafo";
import Quadrado from "@/components/Quadrado";
import Titulo from "@/components/Titulo";

export default function Home() {
  return (
    <body className=" bg-orange-400 grid-cols-1 h-full">
      <div>
        <Cabecalho />
      </div>
      <div className="grid grid-cols-2 h-full max-h-full">
        <div className=" m-1 py-2 px-2 border-spacing-1 border-gray-900 border-2 items-center flex justify-center">
          <Quadrado />
        </div>
        <div className="  m-1 py-2 px-2 border-spacing-1 border-gray-900 border-2 items-center flex justify-center">
          <Titulo />
        </div>
        <div className="  m-1 py-2 px-2 border-spacing-1 border-gray-900 border-2 items-center flex justify-center">
          <ListaItens />
        </div>
        <div className="  m-1 py-2 px-2 border-spacing-1 border-gray-900 border-2 items-center flex justify-center">
          <Imagem />
        </div>
        <div className="  m-1 py-2 px-2 border-spacing-1 border-gray-900 border-2 items-center flex justify-center">
          <Botao />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </body>
  );
}
