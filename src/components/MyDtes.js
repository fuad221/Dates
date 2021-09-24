import React, { useEffect, useState } from 'react'
import axios from "axios"

// import mydatesprop from './mydatesprop'

function MyDtes() {
    const [mydates, setMydates] = useState([{
        date: "",
        withHow: "",
        happend: ""
    }])

    console.log(mydates);



    useEffect(() => {
        const data = axios.get("/getmydates");
        // setMydates(data)
        console.log(data);

    })

    // useEffect(async () => {
    //     const data = await fetch("/getMydates")
    //     setMydates(data)
    //     console.log(mydates);
    // })

    // useEffect(() => {
    //     fetch("/getMydates")
    //         .then(res => {
    //             if (res.ok) {
    //                 return res.json()
    //             }
    //         }).then(jsonRes => setMydates(jsonRes))
    // })

    return (
        <div>
            {/* {mydates.map(e =>
                <div>
                    <h2>{e.happend}</h2>
                    <h2>{e.withHow}</h2>
                </div>
            )} */}

        </div>
    )

}

export default MyDtes
