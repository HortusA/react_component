import React from 'react'
import Bookmark from './bookmark'
import Qualitie from './qualitie'
import propTypes from 'prop-types'

const User = ({ name, ...props }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>
        {props.qualities.map((item) => (<Qualitie key={item._id } {...item}/>
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
     </tr>)
}

User.propTypes = {
  name: propTypes.string,
  bookmark: propTypes.bool,
  onDelete: propTypes.func,
  onFavorite: propTypes.func,
  _id: propTypes.string,
  profession: propTypes.object,
  completedMeetings: propTypes.number,
  rate: propTypes.number,
  qualities: propTypes.array
}

export default User
