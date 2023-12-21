"use client";

import { useRouter } from "next/navigation";
function Botao() {
  const router = useRouter();

  return (
    <button
      type="button"
      className="flex justify-center 
        px-24 py-12 rounded-full
        bg-black text-gray-100 hover:bg-gray-700 mt-2 mb-2"
      onClick={() => router.push("/teste")}
    >
      Click Me
    </button>
  );
}

export default Botao;
