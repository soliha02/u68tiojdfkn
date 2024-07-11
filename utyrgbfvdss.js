let arr = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50]


let cards = document.getElementById('cards')

arr.forEach((item)=> {
    let h1 = document.createElement('h1')
    h1.innerHTML = item;



    if (item < 1001) {
        h1.style.backgroundColor = 'green'
    }

    if (item < 51) {
        h1.style.backgroundColor = 'red'
    }

cards.appendChild(h1)

console.log(h1);

})