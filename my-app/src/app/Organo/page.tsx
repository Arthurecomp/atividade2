import Botao from "@/components/Botao";
import Banner from "@/components2/Banner";
import CampoTexto from "@/components2/CampoTexto";

export default function Page2() {
  return (
    <body className="flex flex-col bg-blend-screen">
      <div>
        <Banner />
        <Botao />
        <CampoTexto nome="NOME" />
        <CampoTexto nome="TESTE" />
        <CampoTexto nome="TEST2" />
      </div>
    </body>
  );
}
