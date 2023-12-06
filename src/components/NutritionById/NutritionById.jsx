import FetchNutritionById from 'components/Utils/FetchNutritionById';
import React, { useEffect, useState } from 'react';

function NutritionById({ id }) {
  const [nutrition, setNutrition] = useState('');

  useEffect(() => {
    FetchNutritionById(id).then(res => {
      console.log('res', res);
      return setNutrition(res);
    });
  }, [id]);

  return <div dangerouslySetInnerHTML={{ __html: nutrition }} />;
  //   <>{nutrition.data}</>;
}

export default NutritionById;
