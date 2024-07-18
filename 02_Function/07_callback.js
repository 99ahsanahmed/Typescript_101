//07_CALLBACK FUNCTIONS
function naam(call) {
    var name = "ahsan";
    var id = 70537; //These two are call's parameter
    call(name, id); //CALLS's parameter is name
}
naam(//iske andar naam ka argument hai jo keh function ki soorat main hai.
function (name, id) {
    console.log("Hello, " + name + " ,his id is " + id);
});
