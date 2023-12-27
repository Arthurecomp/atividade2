import Botao from "@/components/Botao";

export default function Page1() {
  return (
    <body className="flex flex-col h-screen">
      <header className="flex justify-between items-center bg-black h-24 border-4 border-sky-500 mb-0">
        <p className=" text-white items-start"> Header</p>
        <nav className="border-4 border-sky-500 w-1/2 h-12 mr-2 justify-center flex items-center">
          <p className="text-white   "> NAV</p>
        </nav>
      </header>
      <main className="grid grid-cols-4 bg-slate-900 border-4 border-lime-500 h-full ">
        <section className=" col-span-3 border-4 border-blue-700 flex flex-col h-full m-1">
          <article className="border-2 border-red-700 h-1/3 justify-center flex items-center m-1">
            <p className="text-white">Article</p>
          </article>
          <article className="border-2 border-red-700 h-1/3 justify-center flex items-center m-1">
            <p className="text-white">Article</p>
          </article>
          <article className="border-2 border-red-700 h-1/3 justify-center flex items-center m-1">
            <p className="text-white">Article</p>
          </article>
        </section>

        <aside className=" grid grid-rows-2 border-4 border-blue-700 m-1">
          <section className="border-2 border-red-700 m-1 justify-center flex items-center">
            <p className="text-white">section</p>
          </section>
          <section className="border-2 border-red-700 m-1 justify-center flex items-center">
            <p className="text-white">section</p>
          </section>
        </aside>
      </main>
      <footer className="bg-red-950 border-4 border-sky-600 h-24 flex justify-around items-center">
        <Botao nome={"Home"} />
        <p className="text-white text-xl">FOOTER</p>
      </footer>
    </body>
  );
}
