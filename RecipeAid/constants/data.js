import { icons } from "./icons";

const recipes = [
    {
        user: "Manuel Augusto",
        title: "Bacalhau à Brás",
        image: icons.bacalhauabras,
        description: "Bacalhau à Brás is a traditional Portuguese dish made with shredded codfish, onions, and potatoes.",
        ingredients: [
            "Codfish",
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
        image: icons.porcogrelhado,
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
        image: icons.arrozdepato,
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
];

const myRecipes = [];

const savedRecipes = [];

export { recipes, myRecipes, savedRecipes };