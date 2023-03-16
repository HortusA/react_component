import React from 'react'
import _ from 'lodash'
import propTypes from 'prop-types'

const Pagination = ({ itemsCount, pageSize, onPageCheng, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize)
  if (pageCount === 1) return null
  const pages = _.range(1, pageCount + 1)

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li className={'page-item ' + (page === currentPage ? 'active' : '')}
            key={'page_' + page}>
            <button className="page-link" onClick = {() => onPageCheng(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>

  )
}

Pagination.propTypes = {
  itemsCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  onPageCheng: propTypes.func.isRequired,
  currentPage: propTypes.number.isRequired
}

export default Pagination
