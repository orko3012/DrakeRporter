const butt = document.getElementById("button")
butt.onclick=()=>{
    alert("Hello World !")
}

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'pink');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

const toggler = document.querySelector('#toggler');
toggler.addEventListener('change', switchTheme, false);
