export function Header() {
  return (
    <header className="flex w-screen flex-row justify-between bg-slate-900 px-40 py-6 text-slate-200">
      <h3 className="font-alt text-lg font-semibold">Arte & Ofício</h3>

      <div className="flex flex-row justify-center gap-4 font-sans">
        <a href="">Início</a>
        <a href="">Catálogo</a>
        <a href="">Sobre Nós</a>
        <a href="">Contato</a>
      </div>
    </header>
  );
}
