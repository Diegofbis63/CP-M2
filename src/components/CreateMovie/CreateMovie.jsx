import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/index";

// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CreateMovie = (props) => {

  const dispatch = useDispatch();

  const [movie, setCharacter] = React.useState({
    
    description: "",
    name: "",
    director: "",
    releaseYear: 0,
    
  });

  const handleInputChange = function (e) {
    e.preventDefault();
    if (e.target.name === 'movie'){
      setCharacter({
        ...movie,
        movie :{
          name: e.target.value
        },
      });
    }
    else{
      setCharacter({
        ...movie,
        [e.target.name]: e.target.value,
      });
    }

  };

  const handleOnSubmit = function (e){
    e.preventDefault();
    dispatch(actions.createMovie(movie));
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label name="name">Name: </label>
        <input
          type="text"
          name="name"
          value={movie.name}
          onChange={handleInputChange}
        />

        <label name="name">ReleaseYear: </label>
        <input
          type="number"
          name="releaseYear"
          value={movie.name}
          onChange={handleInputChange}
        />

        <label name="name">Description: </label>
        <textarea
          type="text"
          name="description"
          value={movie.description}
          onChange={handleInputChange}
        />

        <label name="name">Director: </label>
        <input
          
          type="text"
          name="director"
          value={movie.director}
          onChange={handleInputChange}
        />
        <button type="submit">Create Movie</button>
      </form>
           
    </div>
  );
};

export default CreateMovie;
