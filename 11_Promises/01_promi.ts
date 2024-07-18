//01_PROMISES
/*
1 pending
2 Fulfilled(Resolve)
3Reject
*/
function practice(){
    return new Promise (  (resolve, reject) => {
        console.log("Pending");
        let check = true
        if(check)
        resolve(" I will cook biryani");
        else
        reject("Data is not available");
    })
}
practice()
.then((result)=>{
    console.log(result);
})
.catch((err)=>{console.log(err);
})
