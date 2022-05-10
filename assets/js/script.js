// Declare global variables we need

var flipheads = 0
var fliptails = 0

//Add event listener for flip and clear buttons

// Flip Button   
        
        
    document.addEventListener('DOMContentLoaded', function () {
       document.getElementById("flip").addEventListener("click", () => {
       // Determine flip outcome & update image
        var flippedHeads = Math.random() < 0.5

    if (flippedHeads) {
           
            document.getElementById("penny-image").src = "assets/images/penny-heads.jpg"
            document.getElementById("message").textContent = "You Flipped Heads!"
            
            flipheads += 1
        }
    else {
         
            document.getElementById("penny-image").src = "assets/images/penny-tails.jpg"
            document.getElementById('message').textContent = 'You Flipped Tails!'

         
            fliptails += 1
        }
// Update the scorboard
        var total = flipheads + fliptails

 // Make variables to track the percentages of heads and tails      
        var percentHeads = 0
        var percentTails = 0

      
    if (total > 0) {
           
            percentHeads = Math.round((flipheads / total) * 100)
            percentTails = Math.round((fliptails / total) * 100)
        }

      // TODO: Update the display of each table cell
        document.getElementById("heads").textContent = flipheads
        document.getElementById("heads-percent").textContent = percentHeads + '%'
        document.getElementById("tails").textContent = fliptails
        document.getElementById("tails-percent").textContent = percentTails + '%'
    })

// Clear Button Click Handler
          
    document.getElementById("clear").addEventListener("click", function () {
       //Reset global variables to 0
        flipheads = 0
        fliptails = 0

   
        document.getElementById("message").textContent = "Lets Get Fliping!"

        var total = flipheads + fliptails

  
        var percentHeads = 0
        var percentTails = 0

     
    if (total > 0) {
       
            percentHeads = Math.round((flipheads / total) * 100)
            percentTails = Math.round((fliptails / total) * 100)
        }

      // Update the scoreboard 
        document.getElementById("heads").textContent = flipheads
        document.getElementById("heads-percent").textContent = percentHeads + '%'
        document.getElementById("tails").textContent = fliptails
        document.getElementById("tails-percent").textContent = percentTails + '%'
    })
})

  

   