// Your code goes here
// Your code goes here
const one = document.querySelector('nav');

one.addEventListener('mouseover', function(event){
    event.target.style.color = 'blue';
    setTimeout(function(){
        event.target.style.color = '';
    }, 500);

}, false);


const aClick = document.querySelector('div.destination');

aClick.addEventListener('click' , function (){
    alert("just playing with selectors")
} )

document.addEventListener('keydown' , function(){
    alert("stop just pressing stuff!")

})


const dubble = document.querySelector('nav')

dubble.addEventListener('dblclick' , function(){
    alert("i guess this is it")
})


const size = document.querySelector('img')
size.src = "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"

document.addEventListener.('keydown' , function(){
    console.log("ok")
})
 

