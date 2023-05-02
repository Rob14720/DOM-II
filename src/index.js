import './less/index.less'

// Your code goes here!
console.log('hello');

const heading = document.querySelector('h1')
heading.textContent = 'Fun Bus!'
console.log(heading);
heading.addEventListener('click', (event) =>{
    event.target.style.color = 'blue'
})

const nav = document.querySelectorAll('.nav-link')
console.log(nav);
nav[0].addEventListener('click', (event) => {
    event.target.style.color = 'blue'
})
nav[1].addEventListener('click', (event) => {
    event.target.style.color = 'red'
})
nav[2].addEventListener('click', (event) => {
    event.target.style.color = 'yellow'
})
nav[3].addEventListener('click', (event) => {
    event.target.style.color = 'green'
})

const btns = document.querySelectorAll('.btn')
console.log(btns)
btns[0].addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'green';
    });
    btns[0].addEventListener('click', (event) => {
        event.target.textContent = 'hooray :)';
        });

        const rmv = document.querySelectorAll('p')
        console.log(rmv)
        window.addEventListener('keydown', (event) => {
            if (event.key == 0){
                document.body.innerHTML = ''
            }
            })
        
       



