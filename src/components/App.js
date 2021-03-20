import { useState, useEffect } from "react";

function App() {
    const [dogPic, setDogPic] = useState(null);
        useEffect(() => {
            fetch("https://dog.ceo/api/breeds/image/random")
            .then(r => r.json())
            .then((data) => {
                console.log("doggies fetched!", );
                setDogPic(data.message);
            });
            }, [])

        if (!dogPic) return <p>Loading...</p>;

    return (<img src={dogPic} alt="A Random Dog"></img>)
}

export default App;
