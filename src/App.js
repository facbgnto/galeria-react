import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import './App.css';
function App() {
  return (
  
    <div className="App">
     
        <div class="container">
                <div class="row p-3 justify-content-center">
                    <div class=" p-3  bg-dark text-white ">
                        <Header class="bg" titulo="Galería de Imágenes de Reptiles con React." />
                    </div>
                </div>
                <div  class="row p-3 justify-content-center">
                      <div  id="cards" class=" p-3  bg-dark text-white">
                          <Card titulo="Cocodrilo" url="https://cdn.pixabay.com/photo/2019/01/15/22/48/crocodile-3934988__340.jpg" descripcion="una familia de saurópsidos, arcosaurios comúnmente conocidos como cocodrilos. Incluye a catorce especies actuales"></Card>
                          <Card titulo="Mamba Negra" url="https://cdn.pixabay.com/photo/2015/02/28/15/25/black-mamba-653644__340.jpg" descripcion="La serpiente venenosa más larga de África, pues puede alcanzar los 4,5 metros, aunque la media está en torno a 2,5 metros"></Card>
                          <Card titulo="Gecko Leopardo" url="https://cdn.pixabay.com/photo/2017/05/09/21/49/gecko-2299365_960_720.jpg" descripcion="Se caracterizan por tener ojos y patas relativamente grandes, en particular los dedos de las patas"></Card>
                          <Card titulo="Dragon Barbudo" url="https://media.istockphoto.com/photos/pogana-bearded-dragon-reptile-lizard-iguana-picture-id1333660004?b=1&k=20&m=1333660004&s=170667a&w=0&h=BYoFwluAyUbwF7s_mKw98jeeDtAXHOjQKc_7jIH8Rpg=" descripcion="Una especie de saurópsido escamoso de la familia de los agámidos originario de las regiones desérticas y semidesérticas de Australia"></Card>
                          <Card titulo="Piton Bola" url="https://media.istockphoto.com/photos/beautiful-pet-snake-picture-id1166387571?k=20&m=1166387571&s=612x612&w=0&h=ldNTGCBV-Pxb54L_9jkoZYafxupOXaj-frOm4rTqLMA=" descripcion="su cuerpo es robusto de coloración negruzca con manchas café claro con bordes blanquecinos y vientre blanco con manchas, tienen dos franjas claras distintivas que corren a los lados de la cabeza"></Card>
                          <Card titulo="Camaleon" url="https://cdn.pixabay.com/photo/2014/11/21/15/25/chameleon-540655__340.jpg" descripcion="Es un reptil de tamaño medio que en estado adulto alcanza hasta los 280-301 mm (incluyendo cola), si bien la media es menor. La longitud del cuerpo (cabeza-cuerpo) es de 145 mm (llegando en ocasiones a los 165 mm)"></Card>
                      </div>
                </div>
                <div  class="row p-3 justify-content-center">
                      <div  class=" p-3  bg-dark text-white">
                          <Footer/>
                      </div>          
                </div>
            
          </div>
        </div>
  );
}

export default App;
