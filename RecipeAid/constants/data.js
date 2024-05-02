import { icons } from "./icons";
import { recipesImages } from "./recipesJS";

const recipes = [
    {
        user: "Manuel Augusto",
        title: "Bacalhau à Brás",
        image: recipesImages.bacalhauBras,
        description: "Bacalhau à Brás is a traditional Portuguese dish made with shredded codfish, onions, and potatoes.",
        ingredients: [
            "Codfish",
            "Potatoes",
            "Eggs",
            "Olive oil",
            "Parsley"
        ],
        rating: 4.5,
        category: ["fish", "traditional"]
    },
    {
        user: "Albert Einstein",
        title: "Porco Grelhado",
        image: recipesImages.porcoGrelhado,
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
        category: ["steak", "grilled"]
    },
    {
        user: "Manuel Augusto",
        title: "Arroz de Pato",
        image: recipesImages.arrozPato,
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
        category: ["traditional", "rice"]
    }
];

const myRecipes = recipes.filter(recipe => recipe.user === "Manuel Augusto");

const savedRecipes = [];

export { recipes, myRecipes, savedRecipes };