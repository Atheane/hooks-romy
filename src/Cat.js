import React, { useContext, useEffect } from 'react';
import { StoreContext } from './Store';

export default () => {
  const {
    data: {
      cat
    },
    action: {
      setCat
    }
  } = useContext(StoreContext);



  console.log(cat.color);
  return (
    <button
      style={{ backgroundColor: (cat.color === 'ginger') ? 'orange' : null}}
    > {cat.name} </button>
  )
}