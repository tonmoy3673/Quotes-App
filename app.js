console.log('connected');

// ======== get Quotes by ID ========//
let quote = document.getElementById('quote');
let author = document.getElementById('author');

// =========== getQuote =======//
const url='https://dummyjson.com/quotes/random'
const getQuotes=async()=>{
    const res= await fetch(url);
    const  data = await res.json();
    console.log(data);
    quote.innerText=data?.quote
    author.innerText=data?.author
}

// ======= initial function call =======//
getQuotes();