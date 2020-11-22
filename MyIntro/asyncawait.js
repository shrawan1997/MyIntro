function myintro(){
    let intro= {fname:'Shrawan',
    lname:'KC', 
    address:'Balaju',
    age:23}
    return intro;
}

async function getintro(){
	try{
		var intro= await myintro();
		console.log(intro);

	}
	catch(e){
		console.log("Error is :", e)

	}
}
getintro();