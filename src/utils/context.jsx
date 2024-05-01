// Create a new context
import React, { createContext, useContext, useState } from 'react';

export const SearchContext = createContext();

// Create a context provider
export const SearchProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <SearchContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </SearchContext.Provider>
  );
};
