import React from "react";
import axios from 'axios';

const Delete =() => {
    const handledelete = async (e) => {
        e.preventDefault()
        const id = e.target.id.value;
        await axios.delete(`https://fsd-backend-2.onrender.com/users/${id}`)
        alert('User deleted Successfully')
    }

    return(
        <div>
        <form onSubmit={handledelete}>
            User ID <input type="text" placeholder="User ID" name="id" required/>
            <button type="submit">Delete</button>
        </form>
        </div>
    )
}

export default Delete