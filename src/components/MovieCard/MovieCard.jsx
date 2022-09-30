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
      <button onClick={onDelete(props.id)}>X</button>
      <Link to={`/movie/${props.id}`}></Link>
    </div>
  );
};

export default MovieCard;
