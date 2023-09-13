import './App.css';
import WSPGallery from './components/WSPGallery';

function App() {

  const galleryImages = [

    {
      img: 'https://images.pexels.com/photos/18293981/pexels-photo-18293981/free-photo-of-ligero-ciudad-gente-edificio.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      img: 'https://images.pexels.com/photos/18254681/pexels-photo-18254681.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      img: 'https://images.pexels.com/photos/18306635/pexels-photo-18306635/free-photo-of-contraste.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      img: 'https://images.pexels.com/photos/14611936/pexels-photo-14611936.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      img: 'https://images.pexels.com/photos/18319967/pexels-photo-18319967.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    }
  ]

  return (
    <div className="App">
      <br />
      <div>
        <strong>Responsive Photo Gallery (No External Library) in React JS</strong>
      </div>
      <br /><br />

      <WSPGallery
        galleryImages={galleryImages}
      />

      <br /><br />
      <div>- WebStylePress -</div>
    </div>
  );
}

export default App;
