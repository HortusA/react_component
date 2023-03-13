import React from "react";

const Bookmark = (props) => {
    return (
   
        <button className = "btn" onClick={() => props.onFavorite(props.userId)}>
            {props.bookmark
            ?<i className="bi bi-bookmark-star-fill"></i> 
            :<i className="bi bi-bookmark-star"></i>}
        </button>
  

    )

}

export default Bookmark