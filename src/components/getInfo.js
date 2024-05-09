async function query(data) {
    const response = await fetch(
        "https://greentealatte-flowise-morning.hf.space/api/v1/prediction/787cac24-3879-4f14-b6cc-ad3e1174f4af",
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

// query({"question": "<s>[INST] Difference between static and dynamic IP addresses? [/INST]</s>/n"}).then((response) => {
//     console.log(response);
// });

export {query};