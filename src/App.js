import './App.css';
import Video from './Pages/Video';


function App() {
  return (
    <div className="App">
      <div className = 'appVideos'>
        <Video 
          likes = {1}
          messages = {2}
          shares = {3}
          name = 'Nome'
          description = 'Descrição'
          music = 'Título da música - Autor'
          url = "https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/ZqU6oFX6.mp4.mp4?alt=media&token=9839e872-2d5e-4da3-9299-17eb2949831d"
        />
        <Video 
          likes = {1}
          messages = {2}
          shares = {3}
          name = 'Nome'
          description = 'Descrição'
          music = 'Título da música - Autor'
          url = "https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4 "
        />
      </div>
    </div>
  );
}

export default App;
