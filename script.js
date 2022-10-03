    let randNumber = Math.floor(Math.random()*10)
    document.querySelector('.button').addEventListener('click',()=>{
    let userGuess = Number(document.querySelector(".input").value);
    let vorodi = document.querySelector('.textButton');
    let coloor = document.querySelector('body').style
    if (userGuess > randNumber){
        coloor.backgroundColor = 'red'
        vorodi.innerHTML = "عدد بزرگتر است"
    }
    else if (userGuess < randNumber){
        coloor.backgroundColor = 'red'
        vorodi.innerHTML = "عدد کوچک تر است"
    }
    else{
        coloor.backgroundColor = 'yellow';
        document.querySelector(".input").disabled = true ;
        vorodi.innerHTML = "برنده شدید"
    }
    });