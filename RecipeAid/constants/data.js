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
        steps: "Prepare the Codfish: Start by desalinating the codfish if necessary. Rinse it under cold water to remove excess salt. Place the codfish in a pot of cold water and bring it to a gentle boil. Let it simmer for about 10-15 minutes until it's cooked through. Once cooked, remove the codfish from the water and let it cool slightly. Then, remove the skin and bones and shred the fish into small pieces. Prepare the Potatoes: Peel the potatoes and cut them into thin matchstick-like strips or grate them using a grater. Rinse the grated potatoes under cold water to remove excess starch. Cooking: In a large frying pan, heat olive oil over medium heat. Add the shredded codfish and sauté for a few minutes until it starts to brown slightly. Add the grated potatoes to the pan and continue cooking, stirring frequently, until the potatoes are cooked through and golden brown. Prepare the Eggs: In a separate bowl, beat the eggs with a pinch of salt and pepper. Pour the beaten eggs over the cooked codfish and potatoes in the frying pan. Final Touches: Stir the mixture gently, allowing the eggs to cook and coat the codfish and potatoes evenly. Be careful not to overcook the eggs; they should be just set. Once the eggs are cooked, remove the pan from the heat. Sprinkle chopped parsley over the Bacalhau à Brás for added flavor and garnish. Serving: Serve Bacalhau à Brás hot, garnished with additional parsley if desired."
        ,
        rating: 4.2,
        category: ["fish", "traditional"],
        vegan: false,
        time: 75
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
        steps: "Marinating the Pork: Begin by preparing the marinade. Crush or finely mince garlic cloves and place them in a mixing bowl. Add paprika, a generous splash of white wine, olive oil, and a pinch of salt to the bowl. Mix the ingredients thoroughly to create the marinade. Preparing the Pork: Place the pork loin in a shallow dish or a resealable plastic bag. Pour the marinade over the pork loin, ensuring it is evenly coated. Cover the dish or seal the bag and refrigerate for at least 30 minutes to allow the flavors to infuse. Grilling the Pork: Preheat the grill to medium-high heat. Remove the marinated pork loin from the refrigerator and let it come to room temperature for about 10-15 minutes. Once the grill is hot, carefully place the pork loin on the grill grates. Grill the pork loin for about 6-8 minutes per side, depending on the thickness of the meat, or until it reaches an internal temperature of 145°F (63°C) for medium-rare or 160°F (71°C) for medium doneness. Turn the pork loin occasionally to ensure even cooking and grill marks on all sides. Resting and Serving: Once cooked to your desired doneness, remove the pork loin from the grill and let it rest for a few minutes. This resting period allows the juices to redistribute, resulting in a juicier and more flavorful pork loin. Slice the grilled pork loin against the grain into thick slices. Serve the Porco Grelhado hot, garnished with fresh herbs or accompanied by your favorite side dishes.",
        rating: 4.8,
        category: ["steak", "grilled"],
        vegan: false,
        time: 60
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
        steps: "Preparing the Duck: Start by preparing the duck. Remove any excess fat and skin from the duck and cut it into pieces. Season the duck pieces with salt and pepper to taste. In a large pot or Dutch oven, heat olive oil over medium heat. Add the duck pieces to the pot and brown them on all sides, turning occasionally to ensure even browning. Once the duck is nicely browned, remove it from the pot and set it aside. Reserve any rendered fat from the duck for later use in cooking the rice, if desired. Cooking the Rice: In the same pot used for browning the duck, add chopped onions and minced garlic. Sauté the onions and garlic in the duck fat or olive oil until they are softened and fragrant. Add the rice to the pot and stir to coat it in the flavorful oil. Pour in enough water or chicken broth to cover the rice, usually about twice the volume of rice. Season the rice with salt and pepper to taste. Bring the liquid to a boil, then reduce the heat to low, cover the pot, and let the rice simmer for about 15-20 minutes or until it is cooked through and fluffy. Assembling the Dish: Preheat the oven to 350°F (175°C). Once the rice is cooked, remove it from the heat and fluff it with a fork. Stir in sliced chouriço and chopped parsley, reserving some parsley for garnish. Arrange the browned duck pieces on top of the rice mixture in the pot. Cover the pot with a lid or aluminum foil and transfer it to the preheated oven. Bake the Arroz de Pato in the oven for about 30-40 minutes, or until the duck is tender and the rice is golden on top. Serving: Once done, remove the pot from the oven and let it rest for a few minutes. Serve the Arroz de Pato hot, garnished with additional chopped parsley if desired. Enjoy this delicious and comforting traditional Portuguese dish!",
        rating: 4.6,
        category: ["traditional", "rice"],
        vegan: false,
        time: 90
    },
    {
        user: "Teresa Almeida",
        title: "Pizza Tradicional Italiana",
        image: recipesImages.pizzaTradicionalItaliana,
        description: "Pizza Tradicional Italiana é uma receita italiana feita com tomate, mozzarella, e manjericão.",
        ingredients: [
            "Tomate",
            "Mozzarella",
            "Pepperoni",
            "Massa de pizza",
            "Oregãos",
            "Chouriço"
        ],
        steps: "Preparing the Ingredients: Start by preparing the ingredients for the pizza. Slice the tomatoes into thin rounds and the mozzarella into slices. If using pepperoni, slice it thinly. Chop the chouriço into small pieces. Preheat the oven to 220°C (425°F) and place a pizza stone or a baking sheet in the oven to heat. Assembling the Pizza: Roll out the pizza dough on a floured surface until it reaches the desired size and thickness. Transfer the stretched dough to a baking sheet or onto the preheated pizza stone. Spread a thin layer of tomato sauce over the dough, leaving a border around the edges. Arrange the mozzarella slices over the tomato sauce. Add the tomato rounds and the pepperoni slices (if using). Sprinkle oregano over the pizza to add flavor. Baking the Pizza: Place the assembled pizza in the preheated oven and bake for about 12-15 minutes, or until the crust is golden and crispy and the cheese is melted and bubbly. Finishing and Serving: Remove the pizza from the oven and let it rest for a few minutes. Before serving, sprinkle the chopped chouriço over the pizza for an additional touch of flavor and texture. Slice the pizza and serve hot. Enjoy this delicious and authentic Traditional Italian Pizza!",

        rating: 4.9,
        category: ["italian", "pizza"],
        vegan: false,
        time: 45
    },
    {
        user: "Gianlucca",
        title: "Pizza Vegetariana",
        image: recipesImages.pizzaVegetariana,
        description: "Pizza Vegetariana é uma receita italiana feita com tomate, mozzarella, e vegetais.",
        ingredients: [
            "Tomate",
            "Mozzarella",
            "Pimentos",
            "Cogumelos",
            "Massa de pizza",
            "Oregãos"
        ],
        steps: "Preparing the Ingredients: Start by preparing the ingredients for the pizza. Slice the tomatoes into thin rounds and the mozzarella into slices. Cut the bell peppers into thin strips and slice the mushrooms. Preheat the oven to 220°C (425°F) and place a pizza stone or a baking sheet in the oven to heat. Assembling the Pizza: Roll out the pizza dough on a floured surface until it reaches the desired size and thickness. Transfer the stretched dough to a baking sheet or onto the preheated pizza stone. Spread a thin layer of tomato sauce over the dough, leaving a border around the edges. Arrange the mozzarella slices over the tomato sauce. Add the bell pepper strips and mushroom slices over the mozzarella. Sprinkle oregano over the pizza to add flavor. Baking the Pizza: Place the assembled pizza in the preheated oven and bake for about 12-15 minutes, or until the crust is golden and crispy and the cheese is melted and bubbly. Finishing and Serving: Remove the pizza from the oven and let it rest for a few minutes. Slice the pizza and serve hot. Enjoy this delicious and healthy Vegetarian Pizza!",
        rating: 4.7,
        category: ["vegetarian", "italian", "pizza"],
        vegan: true,
        time: 30
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
]

let myRecipes = recipes.filter(recipe => recipe.user === "Manuel Augusto");

let vegetables = ingredients.filter(ingredient => ingredient.category === "vegetable");

let proteins = ingredients.filter(ingredient => ingredient.category === "protein");

let savedRecipes = [];

export { recipes, myRecipes, savedRecipes, ingredients, vegetables, proteins, users };