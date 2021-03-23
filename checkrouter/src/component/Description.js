import React from "react";
import { movies } from "../data";

const Description = (props) => {
  return (
    <div>

        {movies
          .filter((el) => el.Id == props.match.params.id)
          .map((elm,i) => <div key={i}>{elm.description}</div>
      )}
    </div>
  );
};

export default Description;
