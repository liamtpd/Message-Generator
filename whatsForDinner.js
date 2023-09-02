// building a random generator program with the topic being "What's for dinner?"
// whatsForDinner.js will randomly generate an idea for a complete meal from 4 different data sets (arrays)
// the first step will be to determine if we're 'cooking dinner' (75% chance) or 'ordering dinner' (25% chance)
// based off the initial determination, cooking or ordering, a random generation of a meal will be made

// function to determine if the generation will be a cooking or ordering dinner
const cookOrOrder = () => {
    const cookOrderResult = Math.random() < 0.5 ? "cook" : "order";
    console.log(`The kids have decided they want to ${cookOrderResult} dinner tonight.`);
    return cookOrderResult;
}

const dinnerGeneration = () => {
    let dinnerChoice = cookOrOrder();
    
    if (dinnerChoice === "cook") {
        let meat = ['chicken', 'mince', 'steak', 'salmon', 'bacon', 'tofu'];
        let grain = ['mashed potatoes', 'baked potatoe', 'yams', 'polenta', 'gnocchi', 'linguini'];
        let veggie = ['broccoli', 'carrots', 'cauliflower', 'asparagus', 'green beans', 'peppers'];
        let drink = ['water', 'milk', 'coffee', 'soda water', 'beer', 'wine'];

        const cookChoices = [meat[Math.floor(Math.random() * meat.length)], grain[Math.floor(Math.random() * grain.length)], veggie[Math.floor(Math.random() * veggie.length)], drink[Math.floor(Math.random() * drink.length)]];
        console.log(`Our meal we cook at home tonight will consist of ${cookChoices}.`);
        return cookChoices;
    }

    if (dinnerChoice === "order") {
        const orderResult = Math.random() <= 0.5 ? "McDonalds" : "PizzaHut";
        console.log(`We'll order dinner from ${orderResult}!`);
        //return orderResult;

        if (orderResult === "McDonalds") {
            let main = ['Big Mac', 'McChicken', 'Chicken Nuggets', 'Cheeseburger'];
            let side = ['Fries', 'Poutine', 'Salad'];
            
            const mcdMeal = [main[Math.floor(Math.random() * main.length)], side[Math.floor(Math.random() * side.length)]];
            console.log(`And I'll have the following: ${mcdMeal}.`);
        } else if (orderResult === "PizzaHut") {
            let topping1 = ['pepperoni', 'sausage', 'bacon', 'chicken'];
            let topping2 = ['pepperoni', 'green pepper', 'pineapple', 'olives'];
            
            const pizza = [topping1[Math.floor(Math.random() * topping1.length)], topping2[Math.floor(Math.random() * topping2.length)]];
            console.log(`And the pizza will have ${pizza} for toppings.`);
        }
    }
}
dinnerGeneration();