import "./home.css";
import { connect } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import React, { Component } from "react";
import * as actions from "../../redux/actions/index";
import mainImage from "./img-cp2/main-image-cp2.jpg"


// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {

  componentDidMount() {
    this.props.getAllMovies();
  }

  render() {
    return (
      <div className="home">
        <h1>Henry Movies</h1>
        <h3>Movies</h3>
        <h4>Checkpoint M2</h4>
        <img src="./img-cp2/main-image-cp2.jpg" alt="henry-movies-logo" />
        {this.props.movies?.map((e) => (
          <MovieCard
            id={e.id}
            name={e.name}
            director={e.director}
            releaseYear={e.releaseYear}
            image={e.image}
            key={e.id}
          />
        ))}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

export const mapDispatchToProps = {
  getAllMovies: actions.getAllMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
