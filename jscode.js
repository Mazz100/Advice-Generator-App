const adviceId = document.querySelector('#number-id');
const adviceText = document.querySelector('#advice');
const adviceBTN = document.querySelector('button');

adviceBTN.addEventListener("click", () => {
    FetchAdvice();
});

FetchAdvice();

// Fetching API using await method
async function FetchAdvice() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");

        //Check if response is failed
        if (!response.ok) {
            throw new Error("Could not fetch resources");
        }
        
        const data = await response.json();

        // Accessing the parent object before targeting a specific object array
        const advice = data.slip.advice;
        const id = data.slip.id;
       
        adviceText.textContent = `"${advice}"`;
        adviceId.textContent = id;
    }

    catch (error) {
        console.error(error)
    }
}


