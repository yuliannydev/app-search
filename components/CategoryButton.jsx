import React from "react";
import { Button } from "../styles/styles";

function CategoryButton({ filterCharacter, category }) {
  /*  console.log(category); */
  return (
    <Button type="button" onClick={() => filterCharacter(category)}>
      {category}
    </Button>
  );
}

export default CategoryButton;
