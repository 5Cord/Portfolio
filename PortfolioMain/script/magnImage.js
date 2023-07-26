let image = document.querySelectorAll('.screen');
let cross = document.querySelector('.cross');
let overlay = document.getElementById("overlay");

image.forEach(el => {
    el.addEventListener('click', () => {
        console.log(el);
        el.classList.toggle("magnImage")
        // cross.classList.toggle("none")
        if (el.classList.contains('magnImage')) {
            document.body.style.overflow = 'hidden';
            overlay.style.display = "block";
        } else {
            document.body.style.overflow = 'auto';
            overlay.style.display = "none";
        }
    })
});


