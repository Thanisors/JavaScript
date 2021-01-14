function createQuote(quote, callback){
    let myQuote = "Like I always say, " + quote;
    callback(myQuote) //2
    console.log(myQuote);
    
}

function logQuote(quote){
    console.log(quote + ' Yes..');
}

createQuote(" you will getting better!", logQuote); //1