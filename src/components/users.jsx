import React, { useState } from "react";
import api from "../api"

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userID) => {
        setUsers(prevState => prevState.filter(item => item._id !== userID))
    }

    const getTermination = (n) => {  
        n = Math.abs(n) % 100; var n1 = n % 10;
        if (n > 10 && n < 20) { return  Number(n) + ' человек тусанут с тобой сегодня'; }
        if (n1 > 1 && n1 < 5) {return Number(n) + " человека тусанет с тобой сегодня"; }
        if (n1 == 1) { return Number(n) + " человек тусанет с тобой сегодня" }
        return Number(n) + " человек тусанут с тобой сегодня";
    }

    const classesTermination = () => {
        return users.length > 0 ? "badge bg-primary m-2" : "badge bg-danger m-2";

    };


    return users.length > 0 ? (
        <>
        <h3>
            <span className={classesTermination()}>
                {getTermination(users.length)}
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
                <th scope="col">""</th>
            </tr>
            </thead>
            <tbody>
                {users.map((user) => {
                return (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>
                                {user.qualities.map((item) => {
                                    return (
                                        <span key={item._id} className={"badge m-1 bg-" + item.color}>{item.name}</span>
                                    )
                                })}
                            </td>
                            <td>{user.profession.name}</td>
                            <td>{user.completedMeetings}</td>
                            <td>{user.rate}/5</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}

            </tbody>
    </table>
    </>
    ) :
    (<h3>
        <span className={classesTermination()}>
            Нкто с тобой не тусанет
        </span>
    </h3>)
};

export default Users;
