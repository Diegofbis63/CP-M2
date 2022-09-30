import React from "react";
import * as actions from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tambien lo de react-redux).
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.
// TIP: Aqui seria un buen momento para utilizar el hook useSelector.

const MovieDetail = (props) => {

  const dispatch = useDispatch();
  let id = props.match.params.id;

  React.useEffect(() => {
    dispatch(actions.getMovieDetail(id))
  },[id, dispatch])

  let movies = useSelector((state) => state.movieDetail);

  return (
    <div>
      <h1>{movies.name}</h1>
      <h4>{movies.director}</h4>
      <h4>{movies.description}</h4>
      <h4>{movies.releaseYear}</h4>
    </div>
  );
};

export default MovieDetail;
