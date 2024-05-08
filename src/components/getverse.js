async function query(data) {
    const response = await fetch(
        "https://greentealatte-flowise-morning.hf.space/api/v1/prediction/83c17767-deb3-4065-8ce7-6271941a7366",
        {
            headers: {
                Authorization: "Bearer mzCAQ5kx4dbMMb2Zi2IOBryC3GU12urpWf7UTGuB8i0=",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        }
    );
    const result = await response.json();
    console.log(result)
    return result;
}

// query({"question": "Good morning"}).then((response) => {
//     console.log(response);
// });

export {query};