import React, { createContext, useContext, useState } from 'react'

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([
        {
            user: "John Doe",
            title: "Bacalhau à Brás",
            image: "https://casacaroba.com/wp-content/uploads/2023/06/bacalhau-a-bras-scaled.jpg",
            description: "Bacalhau à Brás is a traditional Portuguese dish made with salted cod, onions, potatoes, and eggs.",
            ingredients: [
                "Bacalhau (salted cod)",
                "Onions",
                "Potatoes",
                "Eggs",
                "Olive oil",
                "Parsley"
            ],
            rating: 4.5,
        },
        {
            user: "Albert Einstein",
            title: "Porco Grelhado",
            image: "https://www.apir.org.pt/wp-content/uploads/2020/01/lombinho-600x600.jpg",
            description: "Porco Grelhado is a traditional Portuguese dish made with grilled pork loin.",
            ingredients: [
                "Pork loin",
                "Garlic",
                "Paprika",
                "White wine",
                "Olive oil",
                "Salt"
            ],
            rating: 4.8,
        },
        {
            user: "Manuel Augusto",
            title: "Arroz de Pato",
            image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/101C5A5D-C290-4A58-B372-A0100BC48778/Derivates/1FAC3616-88EB-4B3F-B68A-7B0CB5DAF2C9.jpg",
            description: "Arroz de Pato is a traditional Portuguese dish made with duck, rice, and chouriço.",
            ingredients: [
                "Duck",
                "Rice",
                "Chouriço",
                "Onions",
                "Garlic",
                "Olive oil",
                "Parsley"
            ],
            rating: 4.6,
        }
    ]);

    const addRecipe = (newRecipe) => {
        setRecipes([...recipes, newRecipe]);
    }

    const [savedRecipes, setSavedRecipes] = useState([]);

    const addSavedRecipe = (recipe) => {
        setSavedRecipes([...savedRecipes, recipe]);
    }

    const myRecipes = recipes.filter(recipe => recipe.user === "Manuel Augusto");

    const value = {
        recipes,
        setRecipes,
        addRecipe,
        savedRecipes,
        setSavedRecipes,
        addSavedRecipe,
        myRecipes
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider