import "./movieCard.css";

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/index";
// Importar las actions como Object Modules, sino los test no funcionarán!

//PARA QUE LOS TEST CORRAN, DEBEN HACER ESTE COMPONENTE COMO UN FUNCIONAL COMPONENT.

const MovieCard = (props) => {

  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(actions.deleteMovie(id))
  }
  return (
    <div className="card">
      <button onClick={onDelete(props.id)}>x</button>
      <Link to={`/movie/${props.id}`}></Link>
      <h3>{props.name}</h3>
      <img src={props.image} alt={props.name} />
      <p>ReleaseYear: {props.releaseYear}</p>
      <p>Director: {props.director}</p>
    </div>
  );
};

export default MovieCard;
