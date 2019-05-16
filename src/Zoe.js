import React, { useState } from 'react';

export default () => {
  const [color, changeColor] = useState({ name: 'Zoe' });
  // const [color, changeColor] = useState({ name: 'Zoe' });
  // const [color, changeColor] = useState({ name: 'Zoe' });
  // const [color, changeColor] = useState({ name: 'Zoe' });
  // const [color, changeColor] = useState({ name: 'Zoe' });

  console.log(color);
  return (
    <button
      onClick={() => changeColor({ name: 'Zoe', color: 'ginger' })}
      style={{ backgroundColor: (color.color === 'ginger') ? 'orange' : null}}
    > Zoé </button>
  )
}