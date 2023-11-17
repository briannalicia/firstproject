function changeImage(evt){
    let displayImage = document.getElementById("image1")
    if (displayImage.src.match("./plain_donut.png")){
        displayImage.src = "./blue_donut.png"
    } else {
        displayImage.src = "./plain_donut.png"
    }
}

const container = document.querySelector(".grid-container")
container.addEventListener('click', function(evt){
    console.log(evt.target)
    changeImage(evt.target)
})