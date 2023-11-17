// function changeImage(evt){
//     let displayImage = document.getElementById("image1")
//     if (displayImage.src.match("./plain_donut.png")){
//         displayImage.src = "./blue_donut.png"
//     } else {
//         displayImage.src = "./plain_donut.png"
//     }
// }

// const container = document.querySelector(".grid-container")
// container.addEventListener('click', function(evt){
//     console.log(evt.target)
//     changeImage(evt.target)
// })

// const image = document.createElement("img")
// image.src = "./plain_donut.png"
// document.querySelector(".container").appendChild(image)

let arrayOfDonutTop = [];

arrayOfDonutTop.push("./blue_donut.png", "./candies_donut.png", 
"./chocolate_covered_donut.png", "./chocolate_striped_donut.png", "./chocolate_with_nuts.png", 
"./green.donut.png", "./pink_sprinkles_donut.png", 
"./sprinkles_donut.png", "./strawberry_donut.png", 
"./white_chocolate_striped_donut.png")

console.log(arrayOfDonutTop)

const memoryGame = document.querySelector(".container");
const donutReveal = ["arrayOfDonutTop[0]", "arrayOfDonutTop[1]", "arrayOfDonutTop[2]", 
"arrayOfDonutTop[3]", "arrayOfDonutTop[4]", "arrayOfDonutTop[5]", "arrayOfDonutTop[6]", 
"arrayOfDonutTop[7]", "arrayOfDonutTop[8]", "arrayOfDonutTop[9]"];
const donutRevealChoices = [...donutReveal, ...donutReveal];
const donutCount = donutRevealChoices.length;

// Game Function

let revealCount = 0;
let activeDonut = null;
let awaitingEndOfMove = false;

// Game Donut Creation
 
function createDonut(donutTop) {
    const element = document.createElement("div");

    element.classList.add("donut-element");
    element.setAttribute("data-donutTop", donutTop);
    element.setAttribute("data-revealed", "false");

    element.addEventListener("click", () => {
        const revealed = element.getAttribute("data-revealed");
        
        if (
            awaitingEndOfMove
            || revealed === "true"
            || element === activeDonut
        ) {
            return;
        }

        element.style.backgroundImage = donutTop;

        if (!activeDonut) {
            activeDonut = element;

            return;
        }

        const donutToMatch = activeDonut.getAttribute("data-donutTop");

        if (donutToMatch === donutTop) {
            activeDonut.setAttribute("data-revealed", "true");
            element.setAttribute("data-revealed", "true");
            
            awaitingEndOfMove = false;
            activeDonut = null;
            revealedCount += 2;

                if (revealedCount === donutCount) {
                    alert("You've matched all the donuts, congrats! Refresh to play again!");
                }

                return;
        }

        awaitingEndOfMove = true;

        setTimeout(() => {
            element.style.backgroundImage = null;
            activeDonut.style.backgroundImage = null;

            awaitingEndOfMove = false;
            activeDonut = null;
        }, 1000);
    });

    return element;
}


// Game Structure

for (let i = 0; i < donutCount; i++) {
    const randomDonut = Math.floor(Math.random() * donutRevealChoices.length);
    const donutTop = donutRevealChoices[randomDonut];
    const showDonut = createDonut(donutTop);
   
    // Removing Possibility of Choosing Same Donut Twice
    
    donutRevealChoices.splice(randomDonut, 1);
    memoryGame.appendChild(showDonut);

    console.log(donutTop);

}