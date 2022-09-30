import React from "react";
import { Route } from "react-router-dom";
import CreateMovie from "./components/CreateMovie/CreateMovie";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Nav from "./components/Nav/Nav";


function App() {
  return (
    <div>
      <Route path="/" component={Nav} />
      
      <Route exact path="/" component={Home} />
      
      <Route path="/movie/:id" component={MovieDetail} />
      
      <Route path="/movies/create" component={CreateMovie} />   
      
    </div>
  );
}
export default App;
