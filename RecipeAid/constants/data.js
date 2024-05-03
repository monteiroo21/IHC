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
        category: ["fish", "traditional"],
        vegan: false
    },
    {
        user: "Maria Carvalho",
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
        category: ["steak", "grilled"],
        vegan: false
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
        category: ["traditional", "rice"],
        vegan: false
    },
    {
        user: "Teresa Almeida",
        title: "Pizza Tradicional Italiana",
        image: icons.pizzaIcon, // mudar depois
        description: "Pizza Tradicional Italiana é uma receita italiana feita com tomate, mozzarella, e manjericão.",
        ingredients: [
            "Tomate",
            "Mozzarella",
            "Pepperoni",
            "Massa de pizza",
            "Oregãos",
            "Chouriço"
        ],
        rating: 4.9,
        category: ["italian", "pizza"],
        vegan: false
    },
    {
        user: "Maldini",
        title: "Pizza Vegetariana",
        image: icons.pizzaIcon, // mudar depois
        description: "Pizza Vegetariana é uma receita italiana feita com tomate, mozzarella, e vegetais.",
        ingredients: [
            "Tomate",
            "Mozzarella",
            "Pimentos",
            "Cogumelos",
            "Massa de pizza",
            "Oregãos"
        ],
        rating: 4.7,
        category: ["vegetarian", "italian", "pizza"],
        vegan: true
    }
];

const myRecipes = recipes.filter(recipe => recipe.user === "Manuel Augusto");

const savedRecipes = [];

export { recipes, myRecipes, savedRecipes };