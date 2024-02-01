const adviceId = document.querySelector('#number-id');
const adviceText = document.querySelector('#advice');
const adviceBTN = document.querySelector('button');

adviceBTN.addEventListener("click", () => {
    FetchAdvice();
});

// Fetching API using await method
async function FetchAdvice() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");

        //Check if response is failed
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();

        console.log(data);
    }

    catch (error) {
        console.error(error)
    }
}


