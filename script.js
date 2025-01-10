document.body.addEventListener("keydown", (event) => {
    
    if (event.key != "Enter"){
        setInterval(() => {

            let r = Math.round(Math.random() * 256);
            let g = Math.round(Math.random() * 256);
            let b = Math.round(Math.random() * 256);
            document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

            let rh = Math.round(Math.random() * 256);
            let gh = Math.round(Math.random() * 256);
            let bh = Math.round(Math.random() * 256);
            document.getElementById("h").style.color = `rgb(${rh}, ${gh}, ${bh})`;
    
        }, 300);
    };

});