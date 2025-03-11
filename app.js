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


// ============== implement dark mode =====//
let icon = document.getElementById('icon');
const changeMode=()=>{
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        icon.src='/icons/sun.png';
    }
    else{
        icon.src='/icons/moon.png';
    }

}