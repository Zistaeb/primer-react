import React from 'react';
import {Theme} from './Theme';
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

function App(){
  return( 
    <Theme>
      <h2> Peliculas </h2> 
  {movies.map((movie, i) => (
    <Form key={i} movie={movie}/>
  ))}
    </Theme>
  );
}

export default App;
