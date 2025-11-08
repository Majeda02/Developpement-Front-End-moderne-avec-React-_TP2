import { useState, useEffect } from "react";

function CompteurEffetTitre() {
  const [compte, setCompte] = useState(0);

  useEffect(() => {
    document.title = `Clics : ${compte}`;
  }, [compte]); // effet se déclenche à chaque changement du compteur

  return (
    <div>
      <p>Nombre de clics : {compte}</p>
      <button onClick={() => setCompte(compte + 1)}>Incrémenter</button>
    </div>
  );
}

export default CompteurEffetTitre;
