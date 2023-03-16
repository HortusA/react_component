import React from 'react'
import propTypes from 'prop-types'

const Bookmark = ({ ...props }) => {
  return (<button className = "btn" onClick={() => props.onFavorite (props.userId) }>
    { props.bookmark
      ? <i className = 'bi bi-bookmark-star-fill'></i>
      : <i className="bi bi-bookmark-star"></i>}
  </button>)
}

Bookmark.propTypes = {
  userId: propTypes.string,
  bookmark: propTypes.bool,
  onFavorite: propTypes.func
}

export default Bookmark
