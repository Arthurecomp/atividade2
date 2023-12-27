"use client";
import "./style.css";
import { useRouter } from "next/navigation";

interface BotaoProp {
  nome?: String;
  lugar?: String;
}

function Botao({ lugar = "/ ", nome = "" }: BotaoProp) {
  const router = useRouter();

  return (
    <button
      className="button-36 mr-2"
      type="button"
      onClick={() => router.push(`${lugar}`)}
    >
      {nome}
    </button>
  );
}

export default Botao;
