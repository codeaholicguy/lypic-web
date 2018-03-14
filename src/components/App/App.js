import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  static defaultProps = {
    children: null
  }

  render() {
    const {children} = this.props

    return (
      <div>
        <h1>Lypic</h1>
        <div>{children}</div>
      </div>
    )
  }
}
