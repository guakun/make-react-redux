import React, {Component} from 'react'
import ThemeSwitch from './ThemeSwitch'
import PropTypes from 'prop-types'
import { connect } from './react-redux'

class Content extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  constructor() {
    super()
    this.state = {themeColor: ''}
  }

  render() {
    return (
      <h1>
        <p style={{color: this.props.themeColor}}>不离不弃</p>
        <ThemeSwitch/>
      </h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}

Content = connect(mapStateToProps)(Content)

export default Content
