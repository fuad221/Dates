import React, { useState } from 'react'
import axios from "axios"

function NewDate() {
    const [input, setInput] = useState({
        date: "",
        whitHow: "",
        happend: ""
    })
    console.log(input);

    const inputChange = (e) => {
        const { name, value } = e.target;


        setInput((prevInput) => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }


    const handleClick = (e) => {
        e.preventDefault();
        const newDate = {
            date: input.date,
            whitHow: input.whitHow,
            happend: input.happend
        }
        axios.post("http://localhost:3001", newDate)
        // axios.post("http://localhost:3001/create", newDate)
    }

    return (

        <form>
            <div className="form-group">
                <input
                    type="date"
                    name="date"
                    value={input.date}
                    onChange={inputChange}
                />
            </div><hr />

            <div className="form-group">
                <input type="text"
                    className="form-control"
                    placeholder="With who?"
                    name="whitHow"
                    autoComplete="off"
                    value={input.whitHow}
                    onChange={inputChange}
                /> <br />


                <textarea type="text"
                    className="form-control"
                    placeholder="What's happend today"
                    name="happend"
                    autoComplete="off"
                    value={input.happend}
                    onChange={inputChange} >
                </textarea>
            </div>
            <div>
                <button onClick={handleClick} className="btn btn-lg btn-info">Save</button>
            </div>

        </form>
    )
}

export default NewDate
