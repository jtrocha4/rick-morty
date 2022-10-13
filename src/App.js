import './App.css';
import Paginacion from './componets/Paginacion';
import PeticionApi from './componets/PeticionApi';

function App() {
  return (
    <div className='container mt-3'>
      <div className='container-fluid' id='info'>
        <h1>Rick & Morty Wiki</h1>
        <br></br>
        <h3>Descripcion</h3>
        <p>Después de haber estado desaparecido durante casi 20 años, Rick Sánchez llega de imprevisto a la puerta de la casa de su hija Beth y se va a vivir con ella y su familia utilizando el garaje como su laboratorio personal.</p>

        <p><b>Cantidad de temporadas: </b>6</p>
        <p><b>Cantidad de episodios: </b>55</p>
        <p><b>Creadores del programa: </b>Justin Roiland, Dan Harmon</p>
      </div>
      <Paginacion></Paginacion>
      <PeticionApi></PeticionApi>
    </div>
  );
}

export default App;
