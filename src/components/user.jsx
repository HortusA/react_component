import React from "react";
import Bookmark from "./bookmark";
import Qualitie from "./qualitie";


const User = (props) => {
    return (
        <tr>
                            <td>{props.name}</td>
                            <td>
                                {props.qualities.map((item) => ( <Qualitie key={item._id } {...item}/>
                                ))}
                            </td>
                            <td>{props.profession.name}</td>
                            <td>{props.completedMeetings}</td>
                            <td>{props.rate}/5</td>
                            <td>
                            <Bookmark userId = {props._id} bookmark = {props.bookmark} onFavorite = {props.onFavorite}/>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => props.onDelete(props._id)}>Delete</button>
                               
                            </td>
                        </tr>
    )
}

export default User