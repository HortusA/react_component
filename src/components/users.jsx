import React, { useState } from 'react'
import api from '../api'
import User from './user'
import Termination from './searchStatus'
import Pagination from './pagination'
import { paginate } from '../utils/paginate'

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())
  const count = users.length
  const pageSize = 4
  const [currentPage, setCurrentPage] = useState(1)

  const userCrop = paginate(users, currentPage, pageSize)

  const handleDelete = (userID) => {
    setUsers(prevState => prevState.filter(item => item._id !== userID))
  }

  const classesTermination = () => {
    return users.length > 0 ? 'badge bg-primary m-2' : 'badge bg-danger m-2'
  }

  const handleFavorite = (userId) => {
    const newListUsers = users.map((user) => {
      if (user._id === userId) { user.bookmark = !user.bookmark }
      return user
    })
    setUsers(newListUsers)
  }

  const handlePageChenge = (pageIndex) =>
    setCurrentPage(pageIndex)

  return count > 0
    ? (
    <>
      <h3>
        <span className={classesTermination()}>
          {<Termination n = {count}/>}
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
            <th scope="col">del</th>
          </tr>
        </thead>
        <tbody>
          {userCrop.map((user) => (
            <User
              key = {user._id}
              {...user}
              onFavorite = {handleFavorite}
              onDelete = {handleDelete}
            />
          ))}

        </tbody>
      </table>
      <Pagination
        itemsCount = {count}
        pageSize = {pageSize}
        currentPage = {currentPage}
        onPageCheng = {handlePageChenge}/>
    </>
      )
    : (
      <h3>
        <span className={classesTermination()}>
            Никто с тобой не тусанет
        </span>
      </h3>)
}

export default Users
