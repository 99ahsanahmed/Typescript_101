//                  STRUCTURED CLONE
//Object can be cloned deaply by structured clone method
const biryani = {
    dabba : "shan",
    quantity_kg : 1,
    rice : "banaspati",
    ingredients : ["mirch","haldi","piyaz"]
}
let Bombai = structuredClone(biryani);
Bombai.ingredients.push("colddrink");
console.log(biryani)
console.log(Bombai)