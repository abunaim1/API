// API = Application Programming Interface

// A way to communicate betweek client to server

fetch("https://fakestoreapi.com/products")
.then((res) => res.json())
.then((data) =>{
    console.log(data);
})
.catch((err) => {
    console.log(err);
})
