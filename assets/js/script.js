// Track any global variables we need
let heads = 0
let tails = 0

document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners for both buttons
//flip button    
    document.getElementById('flip').addEventListener('click', () => {
        
        let flippedHeads = Math.random() > 0.5

        if (flippedHeads) {
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'


            document.getElementById('message').textContent = 'You Got Heads!'

            heads += 1
        }
        else {
            
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'


            document.getElementById('message').textContent = 'You Got Tails!'

            
            tails += 1
        }

        

        // total number of rolls
        let total = heads + tails

        //  track percent heads and tails
        let HeadPercent = 0
        let TailPercent = 0

      
        if (total > 0) {
           // Calculate percentage of heads and tails
            HeadPercent = Math.round((heads / total) * 100)
            TailPercent = Math.round((tails / total) * 100)
        }

        // Update the values in the scoreboard table
        document.getElementById('heads').textContent = heads
        document.getElementById('heads-percent').textContent = HeadPercent + '%'
        document.getElementById('tails').textContent = tails
        document.getElementById('tails-percent').textContent = TailPercent + '%'
    })
//clear button
    document.getElementById('clear').addEventListener('click', function () {
        // Reset the heads and tails values to zero
        heads = 0
        tails = 0

        // Update the message to the user
        document.getElementById('message').textContent = 'Lets Get Flipping!'

        // scoreboard
        
        // Calculate total number of 
        let total = heads + tails

        // Create variables to track percent heads and tails
        let HeadPercent = 0
        let TailPercent = 0

        // Before trying to divide, make sure total is not zero
        if (total > 0) {
            // Calculate percentage of heads and tails
            HeadPercent = Math.round((heads / total) * 100)
            TailPercent = Math.round((tails / total) * 100)
        }

        // Update the values in the scoreboard table
        document.getElementById('heads').textContent = heads
        document.getElementById('heads-percent').textContent = HeadPercent + '%'
        document.getElementById('tails').textContent = tails
        document.getElementById('tails-percent').textContent = TailPercent + '%'
    })
})
