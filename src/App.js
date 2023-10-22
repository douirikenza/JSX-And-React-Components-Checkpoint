// Importation de composants et de bibliothèques nécessaires
import { Name } from "./Name";       // Importe le composant 'Name' depuis le fichier 'Name.js'
import Price from "./Price";          // Importe le composant 'Price' depuis le fichier 'Price.js'
import Description from "./Description";  // Importe le composant 'Description' depuis le fichier 'Description.js'
import Image from "./Image";           // Importe le composant 'Image' depuis le fichier 'Image.js'
import Card from 'react-bootstrap/Card'; // Importe le composant 'Card' de la bibliothèque 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"; // Importe les styles CSS de Bootstrap
import product from "./product";       // Importe le module 'product' depuis le fichier 'product.js'
// Fonction principale d'application React
function App() {
  const firstName = "kenza";  // Définit une variable 'firstName' avec la valeur "fadoua"
  return (
    <>
      {/* Composant 'Card' de 'react-bootstrap' pour afficher un conteneur de carte */}
      <Card style={{ width: '18rem' }}>
        {/* Composant 'Image' - cela dépend de ce qui est implémenté dans le fichier 'Image.js' */}
        <Image></Image>
        <Card.Body>
          {/* Composant 'Name' - cela dépend de ce qui est implémenté dans le fichier 'Name.js' */}
          <Name></Name>
          {/* Composant 'Description' - cela dépend de ce qui est implémenté dans le fichier 'Description.js' */}
          <Description></Description>
          {/* Composant 'Price' - cela dépend de ce qui est implémenté dans le fichier 'Price.js' */}
          <Price></Price>
        </Card.Body>
      </Card>
      {/* Condition pour afficher une image si 'firstName' est défini */}
      {firstName && <img src={product.image} alt="this my salade de fruit" />}
    </>
  );
}

// Exporte la fonction 'App' en tant que composant principal de l'application
export default App;
