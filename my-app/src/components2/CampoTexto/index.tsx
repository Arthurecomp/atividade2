interface CampoTextoProps {
  nome: string;
}

function CampoTexto(props: CampoTextoProps) {
  return (
    <div className="flex flex-col">
      <label> {props.nome}</label>
      <input placeholder="Digite seu ${props.nome}" />
    </div>
  );
}

export default CampoTexto;
