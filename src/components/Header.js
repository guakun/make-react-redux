import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  render() {
    return (
      <h1 style={{ color: this.props.themeColor }}>你是我黄沙万里种下的树</h1>
    )
  }
}

export default Header