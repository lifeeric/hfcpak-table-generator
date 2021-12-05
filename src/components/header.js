import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="header__container">
    <div className="header__header">
      <h1 className="header__title">
        <Link
          to="/"
          style={{
            color: `#555`,
            textDecoration: `none`,
          }}
          className="header__link"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
