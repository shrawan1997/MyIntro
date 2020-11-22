let myintro =()=>{
    return new Promise((resolve,reject)=>{
        let intro = [{fname:'Shrawan',
        lname:'KC', 
        address:'Balaju',
        age:23
        }]
        if (intro.length>0){
            resolve(intro)}
            else{
                reject ("Error")
            }
})
} 
myintro().then((result)=>{
    console.log("Success", result);
}).catch((error)=>{
    console.log("Error", error)
})