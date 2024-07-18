//                  STRUCTURED CLONE
//Object can be cloned deaply by structured clone method
var biryani = {
    dabba: "shan",
    quantity_kg: 1,
    rice: "banaspati",
    ingredients: ["mirch", "haldi", "piyaz"]
};
var Bombai = structuredClone(biryani);
Bombai.ingredients.push("colddrink");
console.log("bombai ".concat(Bombai));
console.log(biryani);
