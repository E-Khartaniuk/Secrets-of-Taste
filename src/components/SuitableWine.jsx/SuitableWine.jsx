import FetchSuitableWine from 'components/Utils/FetchSuitableWine';
import React, { useEffect, useState } from 'react';

function SuitableWine({ dish }) {
  const [wine, setWine] = useState('not found');

  useEffect(() => {
    FetchSuitableWine('steak').then(res => {
      setWine(res);
    });
  }, [dish, setWine]);
  console.log('wine', wine);
  return (
    <>
      <h3>wine:</h3>
      <div>{wine}</div>
    </>
  );
}

export default SuitableWine;
