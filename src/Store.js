import React, { createContext, useState } from 'react';

export const StoreContext = createContext(null);

export default ({ children }) => {

  const [cat, setCat] = useState({});

  const store = {
    data: {
      cat
    },
    action: {
      setCat
    },
  };

  useEffect(
    () => {
      axios.get(
        
      ).then((data) => setCat(data.cat))
  }, [cat, dog]);

  return(
    <StoreContext.Provider value={store}>
      { children }
    </StoreContext.Provider>
  )
}