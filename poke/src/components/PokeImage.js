import React, { useEffect, useState } from "react";
import axios from "axios";

const PokeImage = (props) => {
  const [image, setImage] = useState({});

  useEffect(() => {
    axios
      .get(`${props.poke.url}`)
      .then((res) => setImage(res.data.sprites))
      .catch((err) => console.log("img", err));
  }, []);

  return (
    <div className="pokewrap">
      <h3>{props.poke.name.toUpperCase()}</h3>
      <img src={image.front_default} alt={props.poke.name} />
    </div>
  );
};
export default PokeImage;
