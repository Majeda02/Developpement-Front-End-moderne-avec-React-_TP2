import { useState } from "react";

function FormulaireInscription(){
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');

  function handleChangeNom(event) {
    setNom(event.target.value);
    
  }
  function handleChangePrenom(event) {
    
    setPrenom(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Le nom saisi est : ${nom} \n Le prénom saisi est : ${prenom}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input type="text" value={nom} onChange={handleChangeNom} />
      </label>
      <label>
        Prénom :
        <input type="text" value={prenom} onChange={handleChangePrenom} />
      </label>
      <button type="submit">Soumettre</button>
    </form>
  ); 


}

export default FormulaireInscription;
