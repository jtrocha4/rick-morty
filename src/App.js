import './App.css';
import PeticionApi from './componets/PeticionApi';

function App() {
  return (
    <div>
      <h1>Rick & Morty Wiki</h1>
      <br></br>
      <h3>Descripcion</h3>
      <p>Después de haber estado desaparecido durante casi 20 años, Rick Sánchez llega de imprevisto a la puerta de la casa de su hija Beth y se va a vivir con ella y su familia utilizando el garaje como su laboratorio personal.</p>

      <p><b>Cantidad de temporadas: </b>6</p>
      <p><b>Cantidad de episodios: </b>55</p>
      <p><b>Creadores del programa: </b>Justin Roiland, Dan Harmon</p>
      <PeticionApi></PeticionApi>
    </div>
  );
}

export default App;
