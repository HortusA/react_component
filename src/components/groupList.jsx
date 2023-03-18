import React from 'react'
import propTypes from 'prop-types'

const Grouplist = ({ items, valueProperty, contentProperty, onItemSelect, selectedItem }) => {
  return (
        <ul className="list-group">
            {Object.keys(items).map((item) => (
            <li
              key = {items[item][valueProperty]}
              className={'list-group-item' + (items[item] === selectedItem ? ' active' : '') }
              onClick={() => onItemSelect(items[item])}
              role='button'
              >
                {items[item][contentProperty]}
                </li>
            ))}

</ul>
  )
}

Grouplist.defaultProps = {
  valueProperty: '_id',
  contentProperty: 'name'
}
Grouplist.propTypes = {
  items: propTypes.object,
  onItemSelect: propTypes.func,
  selectedItem: propTypes.object,
  valueProperty: propTypes.string,
  contentProperty: propTypes.string
}

export default Grouplist
