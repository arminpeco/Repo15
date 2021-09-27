    // only change code below this line
    const product=(...arg)=>
    {
        const args=[...arg]; 
    // only change code above this line
        return args.reduce((a,b)=>a*b,1);
    }
    
    console.log(product(1,2)) // change this line
    console.log(product(4,3,10,2)) // change this line
    console.log(product(7)) // change this line
    console.log(product()) // change this line
    
    
    module.exports=product;