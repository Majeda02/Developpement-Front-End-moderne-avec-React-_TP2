import Compteur from './Compteur';
import MessageBouton from './MessageBouton';
import FormulaireNom from './FormulaireNom';
import CompteurEffet from './CompteurEffet';
import Clic from './Clic';
import FormulaireInscription from './FormulaireInscription';
import CompteurEffetTitre from './CompteurEffetTitre';

function App() {
  return (
    <div>
    {/* 
      <Compteur />
      <MessageBouton />
      <FormulaireNom />
      <CompteurEffet />   
    */}
    
      <h1>Étape 6 : Exercices pratiques</h1>

      <h2>Exercice 1 : Affichage dynamique</h2>
      <Clic />

      <h2>Exercice 2 : Formulaire d’inscription</h2>
      <FormulaireInscription />

      <h2>Exercice 3 : Compteur avec effet personnalisé</h2>
      <CompteurEffetTitre/>


    </div>
  );
}

export default App;