import React, { createContext, useState, useContext } from 'react';

const IngredientsContext = createContext();

export const useIngredients = () => useContext(IngredientsContext);

export const IngredientsProvider = ({ children }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleSelectIngredient = (ingredient) => {
    setSelectedIngredients(prevIngredients => {
      if (prevIngredients.includes(ingredient)) {
        return prevIngredients.filter(item => item !== ingredient);
      } else {
        return [...prevIngredients, ingredient];
      }
    });
  };

  return (
    <IngredientsContext.Provider value={{ selectedIngredients, handleSelectIngredient }}>
      {children}
    </IngredientsContext.Provider>
  );
};