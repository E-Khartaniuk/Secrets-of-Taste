import React from 'react';

function RecipeInstructions({ instructionsHTML }) {
  return <div dangerouslySetInnerHTML={{ __html: instructionsHTML }} />;
}

export default RecipeInstructions;
