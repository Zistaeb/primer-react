import logo from './logo.svg';
import './App.css';
import {Form} from './Form';

const movies = [{
  name: 'Avengers',
  available: 5
},
{
  name: 'Terminator',
  available: 3
}]

function App() {
  return( 
    <div>
      <h2> Peliculas </h2> 
  {movies.map(movie => (
    <Form movie = {movie}/>
  ))}
    </div>
  );
}

export default App;
