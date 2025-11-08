import { useState } from "react";

function FormulaireInscription(){
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');

  function handleChangeNom(event) {
    setNom(event.target.value);
    
  }
  function handleChangeEmail(event) {
    
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Le nom saisi est : ${nom} \n L'email saisi est : ${email}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input type="text" value={nom} onChange={handleChangeNom} />
      </label>
      <label>
        Email :
        <input type="email" value={email} onChange={handleChangeEmail} />
      </label>
      <button type="submit">Soumettre</button>
    </form>
  ); 


}

export default FormulaireInscription;
