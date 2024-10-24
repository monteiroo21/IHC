import AsyncStorage from "@react-native-async-storage/async-storage";
import { icons } from "./icons";
import { recipesImages, usersImages } from "./recipesJS";

let recipes = [
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
        steps: "- Prepare the Codfish: Start by desalinating the codfish if necessary. Rinse it under cold water to remove excess salt. Place the codfish in a pot of cold water and bring it to a gentle boil. Let it simmer for about 10-15 minutes until it's cooked through. Once cooked, remove the codfish from the water and let it cool slightly. Then, remove the skin and bones and shred the fish into small pieces.\n- Prepare the Potatoes: Peel the potatoes and cut them into thin matchstick-like strips or grate them using a grater. Rinse the grated potatoes under cold water to remove excess starch.\n- Cooking: In a large frying pan, heat olive oil over medium heat. Add the shredded codfish and sauté for a few minutes until it starts to brown slightly. Add the grated potatoes to the pan and continue cooking, stirring frequently, until the potatoes are cooked through and golden brown.\n- Prepare the Eggs: In a separate bowl, beat the eggs with a pinch of salt and pepper. Pour the beaten eggs over the cooked codfish and potatoes in the frying pan.\n- Final Touches: Stir the mixture gently, allowing the eggs to cook and coat the codfish and potatoes evenly. Be careful not to overcook the eggs; they should be just set. Once the eggs are cooked, remove the pan from the heat. Sprinkle chopped parsley over the Bacalhau à Brás for added flavor and garnish.\n- Serving: Serve Bacalhau à Brás hot, garnished with additional parsley if desired."
        ,
        rating: 4.2,
        category: ["fish", "traditional"],
        vegan: false,
        time: 75
    },
    {
        user: "Maria Carvalho",
        title: "Grilled Pork",
        image: recipesImages.porcoGrelhado,
        description: "Grilled Pork is a traditional Portuguese dish made with grilled pork loin.",
        ingredients: [
            "Pork loin",
            "Garlic",
            "Paprika",
            "White wine",
            "Olive oil",
            "Salt"
        ],
        steps: "- Marinating the Pork: Begin by preparing the marinade. Crush or finely mince garlic cloves and place them in a mixing bowl. Add paprika, a generous splash of white wine, olive oil, and a pinch of salt to the bowl. Mix the ingredients thoroughly to create the marinade.\n- Preparing the Pork: Place the pork loin in a shallow dish or a resealable plastic bag. Pour the marinade over the pork loin, ensuring it is evenly coated. Cover the dish or seal the bag and refrigerate for at least 30 minutes to allow the flavors to infuse.\n- Grilling the Pork: Preheat the grill to medium-high heat. Remove the marinated pork loin from the refrigerator and let it come to room temperature for about 10-15 minutes. Once the grill is hot, carefully place the pork loin on the grill grates. Grill the pork loin for about 6-8 minutes per side, depending on the thickness of the meat, or until it reaches an internal temperature of 145°F (63°C) for medium-rare or 160°F (71°C) for medium doneness. Turn the pork loin occasionally to ensure even cooking and grill marks on all sides.\n- Resting and Serving: Once cooked to your desired doneness, remove the pork loin from the grill and let it rest for a few minutes. This resting period allows the juices to redistribute, resulting in a juicier and more flavorful pork loin. Slice the grilled pork loin against the grain into thick slices. Serve the Porco Grelhado hot, garnished with fresh herbs or accompanied by your favorite side dishes.",
        rating: 4.8,
        category: ["steak", "grilled"],
        vegan: false,
        time: 60
    },
    {
        user: "Maria Carvalho",
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
        steps: "- Preparing the Duck: Start by preparing the duck. Remove any excess fat and skin from the duck and cut it into pieces. Season the duck pieces with salt and pepper to taste. In a large pot or Dutch oven, heat olive oil over medium heat. Add the duck pieces to the pot and brown them on all sides, turning occasionally to ensure even browning. Once the duck is nicely browned, remove it from the pot and set it aside. Reserve any rendered fat from the duck for later use in cooking the rice, if desired.\n- Cooking the Rice: In the same pot used for browning the duck, add chopped onions and minced garlic. Sauté the onions and garlic in the duck fat or olive oil until they are softened and fragrant. Add the rice to the pot and stir to coat it in the flavorful oil. Pour in enough water or chicken broth to cover the rice, usually about twice the volume of rice. Season the rice with salt and pepper to taste. Bring the liquid to a boil, then reduce the heat to low, cover the pot, and let the rice simmer for about 15-20 minutes or until it is cooked through and fluffy.\n- Assembling the Dish: Preheat the oven to 350°F (175°C). Once the rice is cooked, remove it from the heat and fluff it with a fork. Stir in sliced chouriço and chopped parsley, reserving some parsley for garnish. Arrange the browned duck pieces on top of the rice mixture in the pot. Cover the pot with a lid or aluminum foil and transfer it to the preheated oven. Bake the Arroz de Pato in the oven for about 30-40 minutes, or until the duck is tender and the rice is golden on top.\n- Serving: Once done, remove the pot from the oven and let it rest for a few minutes. Serve the Arroz de Pato hot, garnished with additional chopped parsley if desired. Enjoy this delicious and comforting traditional Portuguese dish!",
        rating: 4.6,
        category: ["traditional", "rice"],
        vegan: false,
        time: 90
    },
    {
        user: "André Gomes",
        title: "Traditional Pizza",
        image: recipesImages.pizzaTradicionalItaliana,
        description: "Traditional Italian Pizza is a italian recipe made with tomato, mozzarella and oregons.",
        ingredients: [
            "Tomato",
            "Mozzarella",
            "Pepperoni",
            "Pizza dough",
            "Oregons"
        ],
        steps: "- Preparing the Ingredients: Start by preparing the ingredients for the pizza. Slice the tomatoes into thin rounds and the mozzarella into slices. If using pepperoni, slice it thinly. Chop the chouriço into small pieces. Preheat the oven to 220°C (425°F) and place a pizza stone or a baking sheet in the oven to heat.\n- Assembling the Pizza: Roll out the pizza dough on a floured surface until it reaches the desired size and thickness. Transfer the stretched dough to a baking sheet or onto the preheated pizza stone. Spread a thin layer of tomato sauce over the dough, leaving a border around the edges. Arrange the mozzarella slices over the tomato sauce. Add the tomato rounds and the pepperoni slices (if using). Sprinkle oregano over the pizza to add flavor.\n- Baking the Pizza: Place the assembled pizza in the preheated oven and bake for about 12-15 minutes, or until the crust is golden and crispy and the cheese is melted and bubbly.\n- Finishing and Serving: Remove the pizza from the oven and let it rest for a few minutes. Before serving, sprinkle the chopped chouriço over the pizza for an additional touch of flavor and texture. Slice the pizza and serve hot. Enjoy this delicious and authentic Traditional Italian Pizza!",

        rating: 4.9,
        category: ["italian", "pizza"],
        vegan: false,
        time: 45
    },
    {
        user: "Gianlucca",
        title: "Vegetarian Pizza",
        image: recipesImages.pizzaVegetariana,
        description: "Vegetarian Pizza is a italian recipe made with tomato, mozzarella and vegetables.",
        ingredients: [
            "Tomato",
            "Mozzarella",
            "Peppers",
            "Mushrooms",
            "Pizza dough",
            "Oregons",
            "Spinach"
        ],
        steps: "- Preparing the Ingredients: Start by preparing the ingredients for the pizza. Slice the tomatoes into thin rounds and the mozzarella into slices. Cut the bell peppers into thin strips and slice the mushrooms. Preheat the oven to 220°C (425°F) and place a pizza stone or a baking sheet in the oven to heat.\n- Assembling the Pizza: Roll out the pizza dough on a floured surface until it reaches the desired size and thickness. Transfer the stretched dough to a baking sheet or onto the preheated pizza stone. Spread a thin layer of tomato sauce over the dough, leaving a border around the edges. Arrange the mozzarella slices over the tomato sauce. Add the bell pepper strips and mushroom slices over the mozzarella. Sprinkle oregano over the pizza to add flavor.\n- Baking the Pizza: Place the assembled pizza in the preheated oven and bake for about 12-15 minutes, or until the crust is golden and crispy and the cheese is melted and bubbly.\n- Finishing and Serving: Remove the pizza from the oven and let it rest for a few minutes. Slice the pizza and serve hot. Enjoy this delicious and healthy Vegetarian Pizza!",
        rating: 4.7,
        category: ["vegetarian", "italian", "pizza"],
        vegan: true,
        time: 30
    },
    {
        user: "Alicia Gomes",
        title: "Oatmeal Squares",
        image: recipesImages.recipe1,
        description: "Oatmeal Squares with Fruit is a hearty, nutritious breakfast option made with baked oatmeal and topped with fresh fruits and nuts, perfect for a quick morning start or a healthy snack.",
        ingredients: [
            "Rolled oats",
            "Honey",
            "Apples",
            "Bananas",
            "Cinnamon",
            "Nuts (almonds, walnuts)"
        ],
        steps: "- Preparing the Ingredients: Start by mixing the rolled oats with honey, a dash of cinnamon, and a bit of water until the mixture is well combined. Preheat the oven to 180°C (350°F).\n- Slicing the Fruits: While the oven heats, slice the apples and bananas into thin rounds.\n- Assembling the Oatmeal Squares: Spread the oat mixture into a baking tray evenly. Press the fruit slices into the top of the oat mixture and sprinkle with chopped nuts.\n- Baking the Squares: Bake in the preheated oven for about 25-30 minutes, or until the edges are golden brown and the fruits have softened.\n- Finishing and Serving: Allow the baked oatmeal to cool slightly before cutting it into squares. Serve warm or at room temperature.",
        rating: 4.5,
        category: ["breakfast", "vegetarian", "snack"],
        vegan: true,
        time: 30
    },
    {
        user: "Marco Andrade",
        title: "Broccoli Frittata",
        image: recipesImages.recipe2,
        description: "Broccoli and Cheese Frittata is a delightful and easy-to-make dish that combines fresh broccoli with eggs and cheese, baked to perfection to create a light and fluffy meal that's great for any time of day.",
        ingredients: [
            "Eggs",
            "Broccoli",
            "Cheddar cheese",
            "Milk",
            "Salt",
            "Pepper"
        ],
        steps: "- Preparing the Ingredients: Start by chopping the broccoli into small florets and grating the cheddar cheese. In a mixing bowl, whisk the eggs with milk, salt, and pepper until well combined. Preheat the oven to 200°C (400°F).\n- Assembling the Frittata: In a non-stick skillet, sauté the broccoli florets until they are just tender. Pour the egg mixture over the broccoli and sprinkle the grated cheese evenly on top.\n- Baking the Frittata: Transfer the skillet to the preheated oven and bake for 15-20 minutes, or until the eggs are set and the top is golden brown.\n- Finishing and Serving: Remove the frittata from the oven, let it cool for a few minutes, then slice and serve while warm.",
        rating: 4.8,
        category: ["vegetarian", "breakfast"],
        vegan: true,
        time: 45
    },
    {
        user: "Manuel Augusto",
        title: "Broccoli Frittata",
        image: recipesImages.recipe2,
        description: "Broccoli and Cheese Frittata is a delightful and easy-to-make dish that combines fresh broccoli with eggs and cheese, baked to perfection to create a light and fluffy meal that's great for any time of day.",
        ingredients: [
            "Eggs",
            "Broccoli",
            "Cheddar cheese",
            "Milk",
            "Salt",
            "Pepper"
        ],
        steps: "- Preparing the Ingredients: Start by chopping the broccoli into small florets and grating the cheddar cheese. In a mixing bowl, whisk the eggs with milk, salt, and pepper until well combined. Preheat the oven to 200°C (400°F).\n- Assembling the Frittata: In a non-stick skillet, sauté the broccoli florets until they are just tender. Pour the egg mixture over the broccoli and sprinkle the grated cheese evenly on top.\n- Baking the Frittata: Transfer the skillet to the preheated oven and bake for 15-20 minutes, or until the eggs are set and the top is golden brown.\n- Finishing and Serving: Remove the frittata from the oven, let it cool for a few minutes, then slice and serve while warm.",
        rating: 4.8,
        category: ["vegetarian", "breakfast"],
        vegan: true,
        time: 45
    }      
];

let ingredients = [
    {
        title: "Broccoli",
        category: "vegetable",
        image: recipesImages.broccoli
    },
    {
        title: "Lettuce",
        category: "vegetable",
        image: recipesImages.lettuce
    },
    {
        title: "Spinach",
        category: "vegetable",
        image: recipesImages.spinach
    },
    {
        title: "Pork",
        category: "protein",
        image: recipesImages.pork
    },
    {
        title: "Tuna",
        category: "protein",
        image: recipesImages.tuna
    },
    {
        title: "Chicken",
        category: "protein",
        image: recipesImages.chicken
    },
    {
        title: "Apple",
        category: "fruit",
        image: recipesImages.apple
    },
    {
        title: "Pear",
        category: "fruit",
        image: recipesImages.pear
    },
    {
        title: "Rice",
        category: "cereal",
        image: recipesImages.rice
    },
    {
        title: "Oat",
        category: "cereal",
        image: recipesImages.oat
    },
    {
        title: "Quinoa",
        category: "cereal",
        image: recipesImages.quinoa
    }
];

let users = [
    {
        name: "Maria Carvalho",
        image: usersImages.persona1
    },
    {
        name: "Gianlucca",
        image: usersImages.persona2
    },
    {
        name: "André Gomes",
        image: usersImages.persona3
    },
    {
        name: "Marco Andrade",
        image: usersImages.persona4
    },
    {
        name: "Alicia Gomes",
        image: usersImages.persona5
    }
]

let broccoli = [recipes[5], recipes[6]];

let myRecipes = recipes.filter(recipe => recipe.user === "Manuel Augusto");

let vegetables = ingredients.filter(ingredient => ingredient.category === "vegetable");

let proteins = ingredients.filter(ingredient => ingredient.category === "protein");

let cereals = ingredients.filter(ingredient => ingredient.category === "cereal");

let fruits = ingredients.filter(ingredient => ingredient.category === "fruit");

let savedRecipes = [];

const setSavedRecipes = async (recipes) => {
    try {
        savedRecipes = recipes;
        await AsyncStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
    } catch (error) {
        console.error('Error saving recipes:', error);
    }
};

const setRecipes = async (recipes) => {
    try {
        recipes = recipes;
        await AsyncStorage.setItem('recipes', JSON.stringify(recipes));
    } catch (error) {
        console.error('Error saving recipes:', error);
    }
};

const getRecipes = async () => {
    try {
        const recipesJson = await AsyncStorage.getItem('recipes');
        if (recipesJson !== null) {
            return JSON.parse(recipesJson);
        } else {
            return []; // Retorna um array vazio se não houver receitas armazenadas
        }
    } catch (error) {
        console.error('Erro ao obter as receitas:', error);
        return []; // Retorna um array vazio em caso de erro
    }
};

export { recipes, setRecipes, getRecipes, myRecipes, savedRecipes, setSavedRecipes, ingredients, vegetables, proteins, users, broccoli, cereals, fruits };