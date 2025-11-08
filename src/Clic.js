import { useState} from "react";

function Clic(){
 const messages = ["Veuillez cliquer pour charger le texte","Master","Technologies", "Emergentes"];
  const [index, setIndex] = useState(0);

  const changerTexte = () => {
    setIndex((index + 1) % messages.length);
  };

  return (
    <div>
      <p>{messages[index]}</p>
      <button onClick={changerTexte}>Changer le texte</button>
    </div>
  );
}


export default Clic;