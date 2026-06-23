let recipes = [
  { id: 1, title: "Spaghetti Carbonara", cuisine: "Italian", minutes: 25, servings: 4, vegetarian: false },
  { id: 2, title: "Chana Masala", cuisine: "Indian", minutes: 35, servings: 4, vegetarian: true },
  { id: 3, title: "Fish Tacos", cuisine: "Mexican", minutes: 20, servings: 3, vegetarian: false },
  { id: 4, title: "Margherita Pizza", cuisine: "Italian", minutes: 40, servings: 2, vegetarian: true },
  { id: 5, title: "Pad Thai", cuisine: "Thai", minutes: 30, servings: 2, vegetarian: false },
];

let nextId = 6;

const express=require('express')
const app=express()

app.use(express.json());

app.get("/", (req, res) => res.send("Recipes is running!!!")) 
app.get("/api/recipes", (req, res) => res.json(recipe));
app.get("/api/recipes/:id", (req, res) => { 
    const recipe = recipes.find((recipe) =>  {
     return  recipe.id === (Number(req.params.id))
   }) 
   if(recipe){
     res.json(recipe)
   }
   else {
     res.status(404).send('Recipe Not Found!!!')
   }

})
app.post("/api/recipes", (req,res)=>{
    const {title, cuisine, minutes,servings,vegetarian}=req.body;
    let nexId;
    const newRescipe={
        id:nexId,
        title,
        cuisine,
        minutes,
        servings,
        vegetarian
    };
    nexId++;
    recipes.push(newRescipe);
    res.status(201).json(newRescipe);
})

app.patch("api/recipes") 

app.listen(800, () => console.log("Server running on port 800"));

