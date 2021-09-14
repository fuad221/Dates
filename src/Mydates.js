import React, { useState } from 'react'

function Mydates() {
    const [input, setInput] = useState({
        date: "",
        whitHow: "",
        happend: ""
    })
    console.log(setInput);

    const inputChange = (e) => {
        const { name, value } = e.target;

        setInput((prevInput) => {
            return {
                ...prevInput,
                [name]: e.target.type === value
            }
        })
    }

    return (

        <div>
            <div>
                <input type="date" name="date" />
            </div><hr />

            <div>
                <input type="text"
                    placeholder="With who?"
                    name="whitHow"
                    value={input.whitHow}
                    onChange={inputChange}
                /> <br />


                <textarea type="text"
                    placeholder="What's happend today"
                    name="happend"
                    value={input.happend}
                    onChange={inputChange} >
                </textarea>
            </div>
            <div>
                <button>Save</button>
            </div>

        </div>
    )
}

export default Mydates
