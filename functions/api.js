const express = require('express')
const serverless = require('serverless-http')
const router = express.Router()
const app = express()
const cors = require('cors')

app.use(cors())

const foodLists = [
  {
    "Meat": "Beef",
    "group O": "+",
    "group A": "X",
    "group B": "O",
    "group AB": "X"
  },
  {
    "Meat": "Lamb",
    "group O": "+",
    "group A": "X",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Meat": "Mutton",
    "group O": "+",
    "group A": "X",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Meat": "Veal",
    "group O": "+",
    "group A": "X",
    "group B": "O",
    "group AB": "X"
  },
  {
    "Meat": "Pork",
    "group O": "X",
    "group A": "X",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Meat": "Chicken",
    "group O": "O",
    "group A": "O",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Meat": "Duck",
    "group O": "O",
    "group A": "X",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Meat": "Quail",
    "group O": "O",
    "group A": "X",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Meat": "Rabbit",
    "group O": "O",
    "group A": "X",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Meat": "Turkey",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "+"
  },
  {
    "Meat": "Ham",
    "group O": "X",
    "group A": "X",
    "group B": "X"
  },
  {
    "Meat": "Bacon",
    "group O": "X",
    "group A": "X",
    "group B": "X"
  },
  {
    "Meat": "Goose",
    "group O": "X",
    "group A": "X",
    "group B": "X"
  },{
    "Fish": "Cod",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Fish": "Mackerell",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Fish": "Snapper",
    "group O": "+",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "Fish": "Salmon",
    "group O": "+",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "Fish": "Sardines",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Fish": "Swordfish",
    "group O": "+",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "Fish": "Abalone",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "Fish": "Tuna",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "+"
  },
  {
    "Fish": "Red Snapper",
    "group O": "+",
    "group A": "O",
    "group B": "O",
    "group AB": "+"
  },
  {
    "Fish": "Carp",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "Fish": "Anchovy(Ikan Bilis)",
    "group O": "X",
    "group A": "X",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Fish": "Clams",
    "group O": "X",
    "group A": "X",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Fish": "Crab",
    "group O": "X",
    "group A": "X",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Fish": "Crayfish",
    "group O": "X",
    "group A": "X",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Fish": "Eels",
    "group O": "X",
    "group A": "X",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Fish": "Frogs's legs",
    "group O": "X",
    "group A": "X",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Product": "Eggs",
    "group O": "O",
    "group A": "O",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Product": "Soya milk",
    "group O": "O",
    "group A": "+",
    "group B": "O",
    "group AB": "O"
  },
  {
    "Product": "Milk - whole",
    "group O": "X",
    "group A": "O",
    "group B": "X",
    "group AB": "O"
  },
  {
    "Product": "Milk - semi skimmed, skimmed",
    "group O": "X",
    "group A": "X",
    "group B": "O",
    "group AB": "O"
  },
  {
    "Product": "Goat's milk",
    "group O": "X",
    "group A": "O",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Product": "Yogurt",
    "group O": "X",
    "group A": "O",
    "group B": "+",
    "group AB": "O"
  },
  {
    "Product": "Butter",
    "group O": "O",
    "group A": "X",
    "group B": "O",
    "group AB": "O"
  },
  {
    "Product": "Cottage Cheese",
    "group O": "X",
    "group A": "X",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Product": "Cheddar Cheese",
    "group O": "X",
    "group A": "X",
    "group B": "O",
    "group AB": "O"
  },
  {
    "Product": "Mozarella Cheese",
    "group O": "+",
    "group A": "O",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Product": "Ice cream",
    "group O": "X",
    "group A": "X",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Oil": "Olive oil",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Oil": "Cod liver oil",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "Oil": "Sesame oil",
    "group O": "O",
    "group A": "X",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Oil": "Corn oil",
    "group O": "X",
    "group A": "X",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Oil": "Groundnut oil",
    "group O": "X",
    "group A": "X",
    "group B": "X",
    "group AB": "O"
  },
  {
    "Oil": "Safflower oil",
    "group O": "X",
    "group A": "X",
    "group B": "X",
    "group AB": "X"
    
  },
  {
    "Oil": "Sunflower oil",
    "group O": "unknown",
    "group A": "O",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Oil": "Rapseed (Canola) oil",
    "group O": "O",
    "group A": "O",
    "group B": "X",
    "group AB": "O"
  },
  {
    "Nut": "Almonds",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "Nut": "Chestnuts",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "+"
  },
  {
    "Nut": "Hazelnuts",
    "group O": "O",
    "group A": "O",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Nut": "Macadamia nuts",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "Nut": "Sesame seeds",
    "group O": "O",
    "group A": "O",
    "group B": "X",
    "group AB": "X"
    
  },
  {
    "Nut": "Sunflower seeds",
    "group O": "O",
    "group A": "O",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Nut": "Cashew nuts",
    "group O": "X",
    "group A": "X",
    "group B": "X",
    "group AB": "O"
  },
  {
    "Nut": "Peanuts",
    "group O": "X",
    "group A": "+",
    "group B": "X",
    "group AB": "+"
  },
  {
    "Nut": "Peanut butter",
    "group O": "X",
    "group A": "+",
    "group B": "X",
    "group AB": "+"
  },
  {
    "Nut": "Pumpkin seeds",
    "group O": "+",
    "group A": "+",
    "group B": "unknown",
    "group AB": "X"
  },
  {
    "Nut": "Brazil nuts",
    "group O": "X",
    "group A": "X",
    "group B": "O",
    "group AB": "O"
  },
  {
    "Nut": "Walnuts",
    "group O": "+",
    "group A": "O",
    "group B": "O",
    "group AB": "+"
  },
  {
    "Bean": "Black-eyed beans",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "X"
  },
  {
    "Bean": "Black beans",
    "group O": "O",
    "group A": "+",
    "group B": "+",
    "group AB": "X"
  },
  {
    "Bean": "Chick-peas",
    "group O": "O",
    "group A": "+",
    "group B": "X",
    "group AB": "O"
  },
  {
    "Bean": "Green peas",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "Bean": "Kidney beans",
    "group O": "X",
    "group A": "X",
    "group B": "X",
    "group AB": "+"
  },
  {
    "Bean": "Soya beans",
    "group O": "X",
    "group A": "unknown",
    "group B": "unknown",
    "group AB": "+"
  },
  {
    "Bean": "Red soya beans/Red brans",
    "group O": "unknown",
    "group A": "+",
    "group B": "O",
    "group AB": "+"
  },
  {
    "Bean": "Sugar-snap brans & peas",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "Cereal": "Barley",
    "group O": "O",
    "group A": "O",
    "group B": "X",
    "group AB": "O"
  },
  {
    "Cereal": "Oat bran",
    "group O": "O",
    "group A": "O",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Cereal": "Oatmeal",
    "group O": "O",
    "group A": "O",
    "group B": "+",
    "group AB": "+"
          },
  {
    "Cereal": "Rice bran",
    "group O": "O",
    "group A": "O",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Cereal": "Rice-puffed",
    "group O": "O",
    "group A": "O",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Cereal": "Cornflakes",
    "group O": "X",
    "group A": "O",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Cereal": "Wheat bran",
    "group O": "X",
    "group A": "X",
    "group B": "X",
    "group AB": "O"
  },
  {
    "Cereal": "Wheatgerm",
    "group O": "X",
    "group A": "X",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Cereal": "Buckwheat",
    "group O": "O",
    "group A": "+",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Bread": "Sprouted-wheat Essence bread",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Bread": "Brown rice bread",
    "group O": "O",
    "group A": "O",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Bread": "Gluten-free bread",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "Bread": "Multi-grain bread",
    "group O": "X",
    "group A": "X",
    "group B": "X",
    "group AB": "O"
  },
  {
    "Bread": "Wholewheat bread",
    "group O": "X",
    "group A": "X",
    "group B": "X",
    "group AB": "O"
  },
  {
    "Bread": "Corn muffins",
    "group O": "X",
    "group A": "O",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Bread": "Hi-protein bread",
    "group O": "unknown",
    "group A": "unknown",
    "group B": "O",
    "group AB": "O"
  },
  {
    "Grain": "Barley flour",
    "group O": "O",
    "group A": "O",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Grain": "Rice flour",
    "group O": "O",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Grain": "Rice vermicelli",
    "group O": "O",
    "group A": "unknown",
    "group B": "unknown",
    "group AB": "unknown"
  },
  {
    "Grain": "Rice - basmati, brown white",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "+"
  },
  {
    "Grain": "Oat flour",
    "group O": "X",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Grain": "Plain flour",
    "group O": "X",
    "group A": "X",
    "group B": "O",
    "group AB": "O"
  },
  {
    "Grain": "Self-raising flour",
    "group O": "X",
    "group A": "X",
    "group B": "O",
    "group AB": "O"
  },
  {
    "Grain": "Wholewheat flour",
    "group O": "X",
    "group A": "X",
    "group B": "X",
    "group AB": "O"
  },
  {
    "Grain": "Tapioca flour",
    "group O": "O",
    "group A": "O",
    "group B": "X",
    "group AB": "X"
  },{
    "Vegetable": "Broccoli",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Vegetable": "Avocado",
    "group O": "X",
    "group A": "O",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Vegetable": "Brussels sprouts",
    "group O": "unknown",
    "group A": "unknown",
    "group B": "unknown",
    "group AB": "+"
  },
  {
    "Vegetable": "Broad beans",
    "group O": "unknown",
    "group A": "X",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Vegetable": "Cabbage - Chinese, red, white",
    "group O": "X",
    "group A": "X",
    "group B": "X",
    "group AB": "+"
  },
  {
    "Vegetable": "Cauliflower",
    "group O": "X",
    "group A": "O",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Vegetable": "Garlic",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "O"
  },
  {
    "Vegetable": "Leeks",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "O"
  },
  {
    "Vegetable": "Okra - ladies' finger",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "O"
  },
  {
    "Vegetable": "Onions",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "O"
  },
  {
    "Vegetable": "Parsley",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "Vegetable": "Peppers, red",
    "group O": "+",
    "group A": "+",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Vegetable": "Peppers, green and yellow",
    "group O": "O",
    "group A": "+",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Vegetable": "Pumpkin",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "X"
  },
  {
    "Vegetable": "Seaweeds",
    "group O": "+",
    "group A": "+",
    "group B": "O",
    "group AB": "O"
  },
  {
    "Vegetable": "Spinach",
    "group O": "+",
    "group A": "+",
    "group B": "+"
  },{
    "Vegetable": "Sweet potatoes",
    "group O": "+",
    "group A": "+",
    "group B": "X",
    "group AB": "+"
  },
  {
    "Vegetable": "Potatoes - red, white",
    "group O": "X",
    "group A": "X",
    "group B": "X",
    "group AB": "O"
  },
  {
    "Vegetable": "Tapioca",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "unknown"
  },
  {
    "Vegetable": "Asparagus",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "Vegetable": "Bamboo shoots",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "Vegetable": "Carrots",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "+"
  },
  {
    "Vegetable": "Celery",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "+"
  },
  {
    "Vegetable": "Chilli peppers",
    "group O": "O",
    "group A": "X",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Vegetable": "Coriander",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "Vegetable": "Cucumber",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "+"
  },
  {
    "Vegetable": "Ginger",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "O"
  },
  {
    "Vegetable": "Lettuce",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "Vegetable": "Mushrooms - cultivated",
    "group O": "X",
    "group A": "X",
    "group B": "X",
    "group AB": "O"
  },
  {
    "Vegetable": "Tofu",
    "group O": "O",
    "group A": "+",
    "group B": "X",
    "group AB": "+"
  },
  {
    "Vegetable": "Tomatoes",
    "group O": "O",
    "group A": "X",
    "group B": "X",
    "group AB": "O"
  },
  {
    "Vegetable": "Yams",
    "group O": "O",
    "group A": "X",
    "group B": "X",
    "group AB": "+"
  },
  {
    "Vegetable": "Sweetcorn",
    "group O": "X",
    "group A": "O",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Vegetable": "Mung bean sprouts",
    "group O": "O",
    "group A": "O",
    "group B": "X",
    "group AB": "X"
  },
  {
    "Vegetable": "Bak choy",
    "group O": "unknown",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "Vegetable": "Beat Roots",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "+"
  },
  {
    "Vegetable": "Water chestnuts",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  
      {
        "Fruit": "Apples",
        "group O": "+",
        "group A": "+",
        "group B": "+",
        "group AB": "+"
      },
      {
        "Fruit": "Apricots",
        "group O": "+",
        "group A": "+",
        "group B": "+",
        "group AB": "+"
      },
      {
        "Fruit": "Banana",
        "group O": "+",
        "group A": "+",
        "group B": "+",
        "group AB": "+"
      },
      {
        "Fruit": "Blackberries",
        "group O": "+",
        "group A": "+",
        "group B": "+",
        "group AB": "+"
      },
      {
        "Fruit": "Blueberries",
        "group O": "+",
        "group A": "+",
        "group B": "+",
        "group AB": "+"
      },
      {
        "Fruit": "Cantaloupe",
        "group O": "+",
        "group A": "+",
        "group B": "+",
        "group AB": "+"
      },
      {
        "Fruit": "Cherries",
        "group O": "+",
        "group A": "+",
        "group B": "+",
        "group AB": "+"
      },
      {
        "Fruit": "Dates",
        "group O": "+",
        "group A": "+",
        "group B": "+",
        "group AB": "+"
      },
      {
        "Fruit": "Figs",
        "group O": "+",
        "group A": "+",
        "group B": "+",
        "group AB": "+"
      },
      {
        "Fruit": "Grapefruit",
        "group O": "+",
        "group A": "+",
        "group B": "+",
        "group AB": "+"
      },
      {
"Vegetable": "Yams",
"group O": "O",
"group A": "X",
"group B": "X",
"group AB": "+"
},
{
"Vegetable": "Sweetcorn",
"group O": "X",
"group A": "O",
"group B": "X",
"group AB": "X"
},
{
"Vegetable": "Mung bean sprouts",
"group O": "O",
"group A": "O",
"group B": "X",
"group AB": "X"
},
{
"Vegetable": "Bak choy",
"group O": "unknown",
"group A": "O",
"group B": "O",
"group AB": "O"
},
{
"Vegetable": "Beat Roots",
"group O": "O",
"group A": "O",
"group B": "O",
"group AB": "+"
},
{
"Vegetable": "Water chestnuts",
"group O": "O",
"group A": "O",
"group B": "O",
"group AB": "O"
},

{
  "Fruit": "Apples",
  "group O": "+",
  "group A": "+",
  "group B": "+",
  "group AB": "+"
},
{
  "Fruit": "Apricots",
  "group O": "+",
  "group A": "+",
  "group B": "+",
  "group AB": "+"
},
{
  "Fruit": "Banana",
  "group O": "+",
  "group A": "+",
  "group B": "+",
  "group AB": "+"
},
{
  "Fruit": "Blackberries",
  "group O": "+",
  "group A": "+",
  "group B": "+",
  "group AB": "+"
},
{
  "Fruit": "Blueberries",
  "group O": "+",
  "group A": "+",
  "group B": "+",
  "group AB": "+"
},
{
  "Fruit": "Cantaloupe",
  "group O": "+",
  "group A": "+",
  "group B": "+",
  "group AB": "+"
},
{
  "Fruit": "Cherries",
  "group O": "+",
  "group A": "+",
  "group B": "+",
  "group AB": "+"
},
{
  "Fruit": "Dates",
  "group O": "+",
  "group A": "+",
  "group B": "+",
  "group AB": "+"
},
{
  "Fruit": "Figs",
  "group O": "+",
  "group A": "+",
  "group B": "+",
  "group AB": "+"
  
},
{
  "Fruit": "Grapefruit",
  "group O": "+",
  "group A": "+",
  "group B": "+"
  
},      
  {
    "Fruit": "Grapes",
    "group O": "+",
    "group A": "+",
    "group B": "+"

  },
  {
    "fruit": "Bananas",
    "group O": "O",
    "group A": "X",
    "group B": "+",
    "groupA B": "X"
  },
  {
    "fruit": "Cranberries",
    "group O": "O",
    "group A": "O",
    "group B": "+",
    "group AB": "+"
  },
  {
    "fruit": "Grapes (black, green, purple, red)",
    "group O": "O",
    "group A": "O",
    "group B": "+",
    "group AB": "+"
  },
  {
    "fruit": "Papaya",
    "group O": "O",
    "group A": "X",
    "group B": "+",
    "group AB": "O"
  },
  {
    "fruit": "Pineapple",
    "group O": "O",
    "group A": "+",
    "group B": "+",
    "group AB": "O"
  },
  {
    "fruit": "Plums (green, purple, red)",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "fruit": "Raisins",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "fruit": "Apples",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "fruit": "Apricots",
    "group O": "O",
    "group A": "+",
    "group B": "O",
    "group AB": "O"
  },
  {
    "fruit": "Blackcurrants",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "fruit": "Blueberries",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "fruit": "Cherries",
    "group O": "O",
    "group A": "+",
    "group B": "O",
    "group AB": "+"
  },
  {
    "fruit": "Dates/Red dates",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "fruit": "Figs (dried, fresh)",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "fruit": "Grapefruit",
    "group O": "O",
    "group A": "+",
    "group B": "O",
    "group AB": "O"
  },
  {
    "fruit": "Guava",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "X"
  },
  {
    "fruit": "Kiwi",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "fruit": "Lemons",
    "group O": "O",
    "group A": "+",
    "group B": "O",
    "group AB": "O"
  },
  {
    "fruit": "Limes",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "fruit": "Lychees",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "fruit": "Mangoes",
    "group O": "O",
    "group A": "X",
    "group B": "O",
    "group AB": "X"
  },
  {
    "fruit": "Melons - honeydew, cantaloupe",
    "group O": "X",
    "group A": "X",
    "group B": "O",
    "group AB": "O"
  },
  {
    "fruit": "Watermelons",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "fruit": "Nectarines",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "fruit": "Peaches",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "fruit": "Oranges/Tangerines",
    "group O": "X",
    "group A": "X",
    "group B": "O",
    "group AB": "O"
  },
  {
    "fruit": "Pears",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "fruit": "Prunes",
    "group O": "+",
    "group A": "+",
    "group B": "O",
    "group AB": "O"
  },
  {
    "fruit": "Raspberries",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "fruit": "Strawberries",
    "group O": "X",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "fruit": "Coconuts",
    "group O": "X",
    "group A": "X",
    "group B": "X",
    "group AB": "X"
  },
  {
    "fruit": "Persimmons",
    "group O": "O",
    "group A": "O",
    "group B": "X",
    "group AB": "X"
  },
  {
    "fruit": "Star fruit",
    "group O": "O",
    "group A": "O",
    "group B": "X",
    "group AB": "X"
  },
  {
    "juice": "Cabbage juice",
    "group O": "X",
    "group A": "O",
    "group B": "+",
    "group AB": "+"
  },
  {
    "juice": "Cranberry juice",
    "group O": "O",
    "group A": "O",
    "group B": "+",
    "group AB": "+"
  },
  {
    "juice": "Grape juice",
    "group O": "O",
    "group A": "O",
    "group B": "+",
    "group AB": "+"
  },
  {
    "juice": "Papaya juice",
    "group O": "O",
    "group A": "X",
    "group B": "+",
    "group AB": "+"
  },
  {
    "juice": "Pineapple juice",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "juice": "Apple cider",
    "group O": "X",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "juice": "Apple juice",
    "group O": "X",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "juice": "Apricot juice",
    "group O": "O",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "juice": "Carrot juice",
    "group O": "O",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "juice": "Celery juice",
    "group O": "O",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "juice": "Cucumber juice",
    "group O": "O",
    "group A": "O",
    "group B": "O",
    "group AB": "O"
  },
  {
    "juice": "Grapefruit juice",
    "group O": "O",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "juice": "Orange juice",
    "group O": "X",
    "group A": "X",
    "group B": "O",
    "group AB": "X"
  },
  {
    "juice": "Prune juice",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "juice": "Water with lemon juice",
    "group O": "+",
    "group A": "+",
    "group B": "+",
    "group AB": "+"
  },
  {
    "juice": "Tomato juice",
    "group O": "O",
    "group A": "X",
    "group B": "X",
    "group AB": "unknown"
  }
]
const hydrationTips = [
  {
    tip_title: "Drink water throughout the Night:",
    tip: "Don't wait until you're thirsty to drink water. Aim to drink small amounts of water throughout the day."
  },
  {
    tip_title: "Carry a water bottle with you:",
    tip: "This will make it easy to stay hydrated, even when you're on the go."
  },
  {
    tip_title: "Choose water-rich foods:",
    tip: "Some foods, such as fruits and vegetables, are high in water content. Eating these foods can help you stay hydrated."
  },
  {
    tip_title: "Avoid caffeine and alcohol:",
    tip: "Caffeine and alcohol can dehydrate you, so it's best to limit your intake of these substances."
  }
]
const bmiTips = [
  {
    tip_title: "Maintain a healthy weight:",
    tip: "A healthy weight can reduce the risk of many chronic diseases, including heart disease, diabetes and certain cancers."
  },
  {
    tip_title: "Excersise regularly:",
    tip: "Physical activity can help you maintain a healthy weight, reduce your risk of chronic diseases and improve your overall health and wellbeing."
  },
  {
    tip_title: "Eat a balanced & nutritious diet:",
    tip: "Eating a diet that is rich in fruits, vegetables, whole grains, lean proteins and healthy fats can help you maintain a healthy weight and reduce your risk of chronic diseases."
  },
  {
    tip_title: "Limit your intake of high-calorie foods:",
    tip: "Processed and high-calorie foods are often low in nutrients and can contribute to weight gain and chronic diseases if consumed in excess."
  },
  {
    tip_title: "Stay hydrated:",
    tip: "Drinking enough water can help you maintain a healthy weight, improve your energy levels and support your overall health and wellbeing."
  }
]
const zodiacImages = [
  {
    name: 'aries',
    type: 'png',
    path: 'https://ucarecdn.com/5e597c1d-a3da-4425-97c1-630cb1f216bb/aries.png'
  },
  {
    name: 'taurus',
    type: 'png',
    path: 'https://ucarecdn.com/d3d7656c-5d7d-4a38-ad2e-9d441d0e60b9/taurus.png'
  },
  {
    name: 'gemini',
    type: 'png',
    path: 'https://ucarecdn.com/9788a9a6-73de-4c85-abea-595b1daaf628/gemini.png'
  },
  {
    name: 'cancer',
    type: 'png',
    path: 'https://ucarecdn.com/c41b9583-7884-49c7-b055-646128b8be5f/cancer.png'
  },
  {
    name: 'leo',
    type: 'png',
    path: 'https://ucarecdn.com/9c93d2ec-3193-41d6-a3cf-696ee742f727/leo.png'
  },
  {
    name: 'virgo',
    type: 'png',
    path: 'https://ucarecdn.com/1cd008e6-807a-4071-850a-e46fae0afe7a/virgo.png'
  },
  {
    name: 'libra',
    type: 'png',
    path: 'https://ucarecdn.com/631a1074-dad4-4435-b7ac-fe2812009cdf/libra.png'
  },
  {
    name: 'scorpio',
    type: 'png',
    path: 'https://ucarecdn.com/133e8d37-2e06-401a-89cc-a1d7f3c7846f/scorpio.png'
  },
  {
    name: 'sagittarius',
    type: 'png',
    path: 'https://ucarecdn.com/d50c2f3c-9ace-495f-81cb-6e8f09ada9ad/sagittarius.png'
  },
  {
    name: 'capricorn',
    type: 'png',
    path: 'https://ucarecdn.com/1078ff33-02ea-4d37-909d-a8fa084b81ed/capricorn.png'
  },
  {
    name: 'aquarius',
    type: 'png',
    path: 'https://ucarecdn.com/7e619320-9b98-422a-a588-9d51f4bc56bb/aquarius.png'
  },
  {
    name: 'pisces',
    type: 'png',
    path: 'https://ucarecdn.com/ebd4c72e-6b98-42ce-a54d-8b150aabde52/pisces.png'
  },
]
const images = [
  {
    name: 'People',
    type: 'png',
    path: 'https://ucarecdn.com/8fea1a57-9780-46ed-8b5b-774efa739b33/People.png'
  },
  {
    name: 'WaterJar',
    type: 'png',
    path: 'https://ucarecdn.com/565e0fa7-8882-43d5-985d-c82881682c7b/WaterJar.png'
  },
  {
    name: 'Logo',
    type: 'png',
    path: 'https://ucarecdn.com/67323194-9c7a-4847-b807-b440520cacc7/Logo.png'
  },
  {
    name: 'Status',
    type: 'png',
    path: 'https://ucarecdn.com/c76958d1-8d28-4622-adbd-0efb4da726ec/Status.png'
  },
  {
    name: 'Horscope',
    type: 'png',
    path: 'https://ucarecdn.com/abbb8895-0407-461d-bd61-c417922f8727/Horscope.jpg'
  },
  {
    name: 'BloodFood',
    type: 'png',
    path: 'https://ucarecdn.com/5aea7680-d165-49f8-9103-d1afd96c67b6/BloodFood.png'
  },
  {
    name: 'BMI',
    type: 'png',
    path: 'https://ucarecdn.com/9338cada-4423-4272-af3b-5f8203fd8077/BMI.png'
  },
  {
    name: 'blobanimation',
    type: 'png',
    path: 'https://ucarecdn.com/2a524c34-33f5-4b81-a2b5-0931b3ca6974/blobanimation.svg'
  },
  {
    name: 'github_octocat',
    type: 'png',
    path: 'https://ucarecdn.com/cb58a3a6-9855-4cec-bf8e-dbd663393b43/github_octocat.png'
  },
]
const bloodInfo = [
  {
    title: 'good',
    description: 'highly beneficial, food acts like medicine'
  },
  {
    title: 'bad',
    description: 'avoid, food acts like poison'
  },
  {
    title: 'normal',
    description: 'neutral, food acts like food'
  }
]
const zodiacSignsInfo = [
  { 
    id: 1,
    name: 'Aries',
    symbol: 'Ram',
    element: 'Fire',
    planet: 'Mars', 
    matchs: ['Gemini', 'Leo', 'Sagittarius'],
    startDate: '03-21', 
    endDate: '04-19', 
    traits: {
        good: ["confident", "courageous", "passionate", "energetic", "adventurous"],
        bad: ["impulsive", "aggressive", "impatient", "selfish", "short-tempered"]
    },
    description: 'Aries is the first sign of the zodiac and is represented by the symbol of the ram. Aries individuals are known for their boldness, enthusiasm, and passion. They are natural leaders and are not afraid to take risks or blaze new trails. Aries is ruled by Mars, the planet of action and energy, which gives Aries their drive and determination. They are also associated with the fire element, which makes them spontaneous, adventurous, and often impulsive. Aries individuals are known for their competitive nature and their desire to be the best, but they can also be impatient and hot-headed at times. Overall, Aries is a sign that values independence, individuality, and the pursuit of personal goals.' 
  },
  { 
    id: 2,
    name: 'Taurus',
    symbol: 'Bull',
    element: 'Earth',
    planet: 'Venus',
    matchs: ['Cancer', 'Virgo', 'Capricorn'],
    startDate: '04-20', 
    endDate: '05-20',
    traits: {
        good: ["patient", "practical", "reliable", "loyal", "romantic"],
        bad: ["stubborn", "possessive", "materialistic", "lazy", "indulgent"]
    },
    description: 'Taurus is the second sign of the zodiac and is represented by the symbol of the bull. Taureans are known for their practicality, determination, and love of luxury. They are often reliable, patient, and loyal, but can also be stubborn and possessive. Taurus is ruled by Venus, the planet of love and beauty, which gives Taureans an appreciation for art, music, and all things aesthetically pleasing. They are also associated with the earth element, which makes them grounded and connected to the natural world. Overall, Taurus is a sign that values stability, comfort, and security, and strives to create a beautiful, harmonious environment in all aspects of life.'

  },
  { 
    id: 3, 
    name: 'Gemini',
    symbol: 'Twin',
    element: 'Air',
    planet: 'Mercury', 
    matchs: ['Aries', 'Leo', 'Scorpio'], 
    startDate: '05-21', 
    endDate: '06-20', 
    traits: {
        good: ["curious", "adaptable", "sociable", "communicative", "witty"],
        bad: ["superficial", "indecisive", "unreliable", "restless", "gossipy"]
    },
    description: 'Gemini is the third sign of the zodiac and is represented by the symbol of the twins. Geminis are known for their versatility, quick wit, and sociability. They are natural communicators and are often skilled at adapting to different situations and people. Gemini is ruled by Mercury, the planet of communication and intellect, which gives Geminis their love of learning and their curiosity about the world. They are also associated with the air element, which makes them intellectual, analytical, and often detached. However, Geminis have a playful and lighthearted side as well, and they enjoy having fun and being spontaneous. Geminis can sometimes be seen as superficial or flighty, but they are also capable of depth and complexity in their thinking and emotions. Overall, Gemini is a sign that values mental stimulation, variety, and freedom of thought.'
  },
  { 
    id: 4, 
    name: 'Cancer',
    symbol: 'Crab',
    element: 'Water',
    planet: 'Moon', 
    matchs: ['Taurus', 'Virgo', 'Scorpio'], 
    startDate: '06-21', 
    endDate: '07-22', 
    traits: {
        good: ["nurturing", "empathetic", "intuitive", "protective", "loyal"],
        bad: ["moody", "clingy", "manipulative", "oversensitive", "pessimistic"]
    },
    description: 'Cancer is the fourth sign of the zodiac and is represented by the symbol of the crab. Cancers are known for their emotional depth, sensitivity, and nurturing nature. They are natural caregivers and often have a strong connection to family and home. Cancer is ruled by the Moon, which gives Cancers their intuitive and empathetic nature. They are also associated with the water element, which makes them emotional, intuitive, and creative. Cancers can be moody and easily affected by their environment, but they are also adaptable and resilient. They value security and stability, and often seek out close relationships and a sense of belonging. Cancers are known for their strong intuition and their ability to read others\' emotions, but they can also be reserved and protective of their own feelings. Overall, Cancer is a sign that values emotional connection, comfort, and security.' 
  },
  { 
    id: 5, 
    name: 'Leo', 
    symbol: 'Lion',
    element: 'Fire',
    planet: 'Sun', 
    matchs: ['Aries', 'Gemini', 'Libra'], 
    startDate: '07-23', 
    endDate: '08-22', 
    traits: {
        good: ["confident", "generous", "creative", "passionate", "charismatic"],
        bad: ["arrogant", "stubborn", "attention-seeking", "vain", "dramatic"]
    },
    description: 'Leo is the fifth sign of the zodiac and is represented by the symbol of the lion. Leos are known for their confidence, leadership, and dramatic flair. They are often charismatic and enjoy being the center of attention. Leo is ruled by the Sun, which gives Leos their warmth, vitality, and creative energy. They are also associated with the fire element, which makes them passionate, enthusiastic, and sometimes impulsive. Leos can be stubborn and prideful, but they are also generous and loyal to those they care about. They value self-expression, creativity, and living life to the fullest. Leos are often natural leaders and have a strong sense of self, but they can also be ego-driven and need to learn to balance their desire for attention with consideration for others. Overall, Leo is a sign that values creativity, self-expression, and living life with passion and purpose.'  
  },
  { 
    id: 6, 
    name: 'Virgo', 
    symbol: 'Maiden',
    element: 'Earth',
    planet: 'Mercury', 
    matchs: ['Taurus', 'Cancer', 'Scorpio'], 
    startDate: '08-23', 
    endDate: '09-22', 
    traits: {
        good: ["analytical", "practical", "responsible", "intelligent", "detail-oriented"],
        bad: ["critical", "perfectionist", "worrisome", "conservative", "aloof"]
    },
    description: 'Virgo is the sixth sign of the zodiac and is represented by the symbol of the maiden. Virgos are known for their attention to detail, analytical ability, and practicality. They are often precise and organized, and have a natural talent for problem-solving. Virgo is ruled by Mercury, the planet of communication and intellect, which gives Virgos their sharp mind and analytical nature. They are also associated with the earth element, which makes them grounded, reliable, and hardworking. Virgos can be perfectionists and can be critical of themselves and others, but they also have a deep sense of caring and a desire to be of service to others. They value order, cleanliness, and efficiency, and often have a talent for healing and nurturing. Virgos are known for their ability to see the details that others miss, but they can also get bogged down in the minutiae and need to learn to see the bigger picture. Overall, Virgo is a sign that values practicality, attention to detail, and a desire to be of service to others.'  
  },
  { 
    id: 7, 
    name: 'Libra', 
    symbol: 'Scales',
    element: 'Air',
    planet: 'Venus', 
    matchs: ['Gemini', 'Leo', 'Sagittarius'], 
    startDate: '09-23', 
    endDate: '10-22', 
    traits: {
        good: ["diplomatic", "charming", "cooperative", "romantic", "fair-minded"],
        bad: ["indecisive", "passive-aggressive", "superficial", "manipulative", "vain"]
    },
    description: 'Libra is the seventh sign of the zodiac and is represented by the symbol of the scales. Libras are known for their diplomacy, charm, and love of beauty. They are often social, outgoing, and have a talent for bringing people together. Libra is ruled by Venus, the planet of love and beauty, which gives Libras their appreciation for art, music, and aesthetics. They are also associated with the air element, which makes them intellectual, communicative, and often indecisive. Libras value balance, harmony, and fairness, and often have a strong sense of justice. They are natural peacemakers and often seek to find common ground and compromise in their relationships. Libras can sometimes be seen as indecisive or superficial, but they also have a deep desire for connection and a need for partnership. They are often skilled at seeing both sides of an issue and have a talent for finding solutions that work for everyone. Overall, Libra is a sign that values beauty, harmony, and connection, and seeks to create a balanced and fair world.'  
  },
  { 
    id: 8, 
    name: 'Scorpio', 
    symbol: 'Scorpion',
    element: 'Water',
    planet: 'Pluto, Mars', 
    matchs: ['Cancer', 'Virgo', 'Capricorn'], 
    startDate: '10-23', 
    endDate: '11-21', 
    traits: {
        good: ["intense", "passionate", "perceptive", "loyal", "resourceful"],
        bad: ["jealous", "controlling", "vindictive", "secretive", "obsessive"]
    },
    description: 'Scorpio is the eighth sign of the zodiac and is represented by the symbol of the scorpion. Scorpios are known for their intensity, passion, and depth of emotion. They are often seen as mysterious and complex, with a powerful and magnetic presence. Scorpio is ruled by Pluto, the planet of transformation and regeneration, which gives Scorpios their ability to transform themselves and their surroundings. They are also associated with the water element, which makes them emotional, intuitive, and often secretive. Scorpios value honesty, authenticity, and loyalty, and can be fiercely protective of those they care about. They have a strong will and a deep desire for power and control, but they can also be self-destructive if they are not careful. Scorpios are known for their ability to see through others\' hidden motivations and agendas, and often have a talent for digging deep to uncover the truth. Overall, Scorpio is a sign that values transformation, intensity, and deep emotional connection, and seeks to uncover the hidden mysteries of life.'  
  },
  { 
    id: 9, 
    name: 'Sagittarius', 
    symbol: 'Archer',
    element: 'Fire',
    planet: 'Jupiter', 
    matchs: ['Aries', 'Libra', 'Aquarius'], 
    startDate: '11-22', 
    endDate: '12-21', 
    traits: {
        good: ["optimistic", "adventurous", "philosophical", "honest", "generous"],
        bad: ["impulsive", "tactless", "restless", "irresponsible", "careless"]
    },
    description: 'Sagittarius is the ninth sign of the zodiac and is represented by the symbol of the archer. Sagittarians are known for their optimism, enthusiasm, and love of adventure. They are often seen as free-spirited and independent, with a natural curiosity about the world. Sagittarius is ruled by Jupiter, the planet of expansion and abundance, which gives Sagittarians their love of learning, exploration, and freedom. They are also associated with the fire element, which makes them passionate, energetic, and sometimes impulsive. Sagittarians value truth, honesty, and authenticity, and often have a deep desire for spiritual growth and understanding. They have a natural talent for seeing the big picture and for finding meaning in life, but they can also be blunt and tactless at times. Sagittarians are known for their sense of humor and their ability to find joy in life\'s adventures, no matter where they may lead. Overall, Sagittarius is a sign that values freedom, adventure, and the pursuit of truth and meaning in life.'  
  },
  { 
    id: 10, 
    name: 'Capricorn', 
    symbol: 'Sea-Goat',
    element: 'Earth',
    planet: 'Saturn', 
    matchs: ['Taurus', 'Scorpio', 'Pisces'], 
    startDate: '12-22', 
    endDate: '01-19', 
    traits: {
        good: ["ambitious", "responsible", "disciplined", "practical", "self-controlled"],
        bad: ["cold", "calculating", "rigid", "pessimistic", "controlling"]
    },
    description: 'Capricorn is the tenth sign of the zodiac and is represented by the symbol of the mountain goat. Capricorns are known for their ambition, discipline, and practicality. They are often seen as hardworking and responsible, with a natural talent for achieving their goals. Capricorn is ruled by Saturn, the planet of structure and authority, which gives Capricorns their sense of responsibility and their desire for order and stability. They are also associated with the earth element, which makes them grounded, reliable, and often traditional. Capricorns value hard work, achievement, and respectability, and often have a talent for leadership and management. They have a deep sense of duty and often take on heavy responsibilities willingly, but they can also be too focused on work and achievement and need to learn to balance their personal and professional lives. Capricorns are known for their patience, perseverance, and practicality, and often have a talent for building lasting structures and systems. Overall, Capricorn is a sign that values hard work, achievement, and responsibility, and seeks to build a stable and secure foundation for themselves and those around them.'  
  },
  { 
    id: 11, 
    name: 'Aquarius', 
    symbol: 'Water-Bearer',
    element: 'Air',
    planet: 'Uranus', 
    matchs: ['Gemini', 'Libra', 'Sagittarius'], 
    startDate: '01-20', 
    endDate: '02-18', 
    traits: {
        good: ["independent", "innovative", "intellectual", "humanitarian", "friendly"],
        bad: ["detached", "eccentric", "unpredictable", "rebellious", "aloof"]
    },
    description: 'Aquarius is the eleventh sign of the zodiac and is represented by the symbol of the water bearer. Aquarians are known for their individuality, independence, and innovative thinking. They are often seen as progressive and forward-thinking, with a natural talent for creativity and invention. Aquarius is ruled by Uranus, the planet of change and disruption, which gives Aquarians their desire for freedom, innovation, and unconventional thinking. They are also associated with the air element, which makes them intellectual, communicative, and sometimes detached. Aquarians value individuality, equality, and social justice, and often have a strong desire to make the world a better place. They are natural humanitarians and often have a talent for bringing people together for a common cause. Aquarians can sometimes be seen as eccentric or unpredictable, but they also have a deep sense of compassion and a desire to help others. They are known for their ability to see the big picture and to think outside the box, and often have a talent for finding creative solutions to complex problems. Overall, Aquarius is a sign that values individuality, innovation, and social progress, and seeks to make the world a better place through creative and unconventional means.'  
  },
  { 
    id: 12, 
    name: 'Pisces', 
    symbol: 'Fish',
    element: 'Water',
    planet: 'Neptune', 
    matchs: ['Cancer', 'Scorpio', 'Capricorn'], 
    startDate: '02-19', 
    endDate: '03-20', 
    traits: {
        good: ["compassionate", "imaginative", "intuitive", "artistic", "spiritual"],
        bad: ["escapist", "unrealistic", "self-pitying", "indecisive", "gullible"]
    },
    description: 'Pisces is the twelfth sign of the zodiac and is represented by the symbol of the fish. Pisceans are known for their sensitivity, compassion, and artistic nature. They are often seen as dreamy and imaginative, with a natural talent for creativity and intuition. Pisces is ruled by Neptune, the planet of imagination and spirituality, which gives Pisceans their emotional depth and connection to the spiritual realm. They are also associated with the water element, which makes them emotional, intuitive, and often empathetic. Pisceans value compassion, creativity, and spirituality, and often have a strong connection to the natural world. They have a natural talent for art, music, and poetry, and often find solace in creative pursuits. Pisceans can sometimes be seen as overly sensitive or escapist, but they also have a deep sense of kindness and a desire to help others. They are known for their ability to connect with others on a deep emotional level and to see the beauty in the world around them. Overall, Pisces is a sign that values creativity, intuition, and spirituality, and seeks to find meaning and beauty in the world around them.'  
  },
]
const zodiacUiData = [
  {
    emoji: "♈︎",
    color: "#fc7d4b",
    dark_color: "#fb5532"
  },
  {
    emoji: "♉︎",
    color: "#5bbd93",
    dark_color: "#1ca56f"
  },
  {
    emoji: "♊︎",
    color: "#f8cd57",
    dark_color: "#fca62f"
  },
  {
    emoji: "♋︎",
    color: "#c0c0c0",
    dark_color: "#afaeae"
  },
  {
    emoji: "♌︎",
    color: "#f3d217",
    dark_color: "#dfc118"
  },
  {
    emoji: "♍︎",
    color: "#a13030",
    dark_color: "#912e2e"
  },
  {
    emoji: "♎︎",
    color: "#fac3cc",
    dark_color: "#da9ca6"
  },
  {
    emoji: "♏︎",
    color: "#212121",
    dark_color: "#1d1d1d"
  },
  {
    emoji: "♐︎",
    color: "#a176bd",
    dark_color: "#804ea0"
  },
  {
    emoji: "♑︎",
    color: "brown",
    dark_color: "red"
  },
  {
    emoji: "♒︎",
    color: "#8dcafc",
    dark_color: "#64b9fc"
  },
  {
    emoji: "♓︎",
    color: "#90ee90",
    dark_color: "#73d673"
  }
]

const carouselImages = [
  {
    name: 'desk_snap_health',
    type: 'png',
    path: 'https://ucarecdn.com/0387be18-4bac-4369-a2ba-eecdea2c6d15/desk_snap_health.png'
  },
  {
    name: 'desk_snap_diet',
    type: 'png',
    path: 'https://ucarecdn.com/ddba98bf-f40d-4740-88f3-76b37769030a/desk_snap_diet.png'
  },
  {
    name: 'desk_snap_zodiac',
    type: 'png',
    path: 'https://ucarecdn.com/aa644a30-8139-4b38-9ad9-aa08d3819868/desk_snap_zodiac.png'
  },
  {
    name: 'desk_snap_health_2',
    type: 'png',
    path: 'https://ucarecdn.com/5a596ec0-4441-4ae9-a17c-b0a7afa3962b/desk_snap_health_2.png'
  },
  {
    name: 'desk_snap_diet_2',
    type: 'png',
    path: 'https://ucarecdn.com/94b23e58-6141-4098-8cb6-be01b9f00440/desk_snap_diet_2.png'
  },
  {
    name: 'desk_snap_zodiac_2',
    type: 'png',
    path: 'https://ucarecdn.com/09bf9aa8-d1cb-43fa-932d-e03fec12220f/desk_snap_zodiac_2.png'
  },
]

const aboutPages = [
    {
      name: 'health',
      imgPath: 'https://ucarecdn.com/553502e6-7b0a-46c7-954d-f9009e488e61/mobile_health.png',
      link: '/health',
      description: 'This is a health and fitness tool that allows users to calculate and track their daily water intake and body mass index (BMI). The user inputs their weight and height into the designated fields, and the web page calculates their daily water intake and BMI based on the provided information. The output is displayed on the page in an easy-to-read format, allowing the user to track their progress over time. This tool can be used by individuals looking to improve their health and fitness by monitoring their water intake and BMI.'
    },
    {
      name: 'diet',
      imgPath: 'https://ucarecdn.com/1a543739-e920-4868-b6b5-36f3ae943594/mobile_diet.png',
      link: '/blooddiet',
      description: 'This is a nutrition tool that allows users to input their blood type and receive a personalized list of foods that are beneficial, harmful, or neutral to their health. The user selects their blood type from a list of options, and the web page generates a list of foods that are recommended, to be avoided, or that have no impact on their health. This information is presented in a clear and easy-to-understand format, allowing the user to make informed decisions about what to eat based on their individual blood type. This tool can be used by individuals looking to optimize their nutrition and improve their overall health and wellbeing.'
    },
    {
      name: 'horscope',
      imgPath: 'https://ucarecdn.com/17fb9f37-b91d-49b7-8a1f-3d4377842f48/mobile_horscope.png',
      link: '/horscope',
      description: 'This is an astrology and personalization tool that allows users to input their date of birth and receive personalized information about their life span and astrological sign. The user enters their birth date, and the web page calculates the number of years, months, days, hours, minutes, and seconds the user has been alive. Additionally, the web page displays the users astrological sign, or zodiac information, based on their birth date. This information is presented in a visually appealing and easy-to-understand format, allowing the user to gain insights and learn more about themselves. This tool can be used by individuals looking to explore their astrological sign and gain a deeper understanding of their life span.'
    }
]
const data = {
  name: "daf-express-api",
  label: "Daf Express API",
  version: '1.0,0',
  url: "https://daf-express-api.netlify.app/.netlify/functions/api",
  clientName: "Daf Tools",
  clientURL: "https://daf-tools.web.app/",
  message: "This is a simple api made to serve daf tools web app"
};

router.get('/', (req, res) => {
  res.json(data)
});

router.get('/asset/carouselimages', (req, res) => {
  res.json(carouselImages)
})

router.get('/aboutdata', (req, res) => {
  res.json(aboutPages)
})

router.get('/hydrationtips', (req, res) => {
    res.json(hydrationTips)
})

router.get('/bmitips', (req, res) => {
  res.json(bmiTips)
})

router.get('/foodlists', (req, res) => {
  res.json(foodLists)
})

router.get('/bloodinfo', (req, res) => {
  res.json(bloodInfo)
})

router.get('/asset/zodiacimages', (req, res) => {
  res.json(zodiacImages)
})

router.get('/asset/images', (req, res) => {
  res.json(images)
})

router.get('/zodiacsignsinfo', (req, res) => {
  res.json(zodiacSignsInfo)
})

router.get('/zodiacuidata', (req, res) => {
  res.json(zodiacUiData)
})


app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)
