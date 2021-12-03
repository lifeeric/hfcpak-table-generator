import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./searchbar.css"

export const Searchbar = ({ value, setValue }) => {
  return (
    <div className="searchbar__container">
      <div className="searchbar__action">
        <input
          className="searchbar__input"
          type="text"
          placeholder="Put your balance here..."
          value={value}
          onChange={setValue}
        />
        <button className="searchbar__button">Generate</button>
      </div>
    </div>
  )
}
