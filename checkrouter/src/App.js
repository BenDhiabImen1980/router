// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import MovieList from './component/MovieList.js'
import Description from './component/Description'
import {BrowserRouter,Route} from 'react-router-dom'
import{movies} from './data'
function App() {
  
  return (
    <BrowserRouter>
      <Route exact path= "/" render= {(props)=><MovieList {...props} movies={movies}/>} />
      <Route path="/Description/:id" component={Description}/>
    </BrowserRouter>
  );
}

export default App;
