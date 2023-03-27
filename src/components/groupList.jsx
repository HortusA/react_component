import React from 'react'
import propTypes from 'prop-types'

const Grouplist = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedItem
}) => {
  const newItemslist = !Array.isArray(items)
    ? Object.keys(items)
    : items
  return (
        <ul className="list-group">
            {newItemslist.map((item) => (
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
  items: propTypes.oneOfType([propTypes.object, propTypes.array]),
  onItemSelect: propTypes.func,
  selectedItem: propTypes.object,
  valueProperty: propTypes.string,
  contentProperty: propTypes.string
}

export default Grouplist
