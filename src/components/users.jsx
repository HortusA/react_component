import React, { useState } from "react";
import api from "../api"
import User from "./user";
import Termination from "./searchStatus";

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userID) => {
        setUsers(prevState => prevState.filter(item => item._id !== userID))
    }

    const getTermination = (n) => {  
        n = Math.abs(n) % 100; var n1 = n % 10;
        if (n > 10 && n < 20) { return  Number(n) + ' человек тусанут с тобой сегодня'; }
        if (n1 > 1 && n1 < 5) {return Number(n) + " человека тусанет с тобой сегодня"; }
        if (n1 === 1) { return Number(n) + " человек тусанет с тобой сегодня" }
        return Number(n) + " человек тусанут с тобой сегодня";
    }

    const classesTermination = () => {
        return users.length > 0 ? "badge bg-primary m-2" : "badge bg-danger m-2";

    };

    const handleFavorite = (userId) =>{
        const newListUsers = users.map((user)=>{
            if (user._id === userId){user.bookmark = !user.bookmark}
            return user
        })
        setUsers(newListUsers)
    }


    return users.length > 0 ? (
        <>
        <h3>
            <span className={classesTermination()}>
                {<Termination n = {users.length}/>}
            </span>
        </h3>
        <table className = "table table-striped table-bordered">
            <thead>
             <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col">Избранное</th>
                <th scope="col">""</th>
            </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <User
                    key = {user._id}
                    {...user}
                    onFavorite = {handleFavorite}
                    onDelete = {handleDelete}
                    />
                
                ))}

            </tbody>
    </table>
    </>
    ) :
    (<h3>
        <span className={classesTermination()}>
            Никто с тобой не тусанет
        </span>
    </h3>)
};

export default Users;
