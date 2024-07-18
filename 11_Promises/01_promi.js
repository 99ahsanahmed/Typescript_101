//01_PROMISES
/*
1 pending
2 Fulfilled(Resolve)
3Reject
*/
function practice() {
    return new Promise(function (resolve, reject) {
        console.log("Pending");
        var check = true;
        if (check)
            resolve(" I will cook biryani");
        else
            reject("Data is not available");
    });
}
practice()
    .then(function (result) {
    console.log(result);
})
    .catch(function (err) {
    console.log(err);
});
