import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {Button} from 'antd'

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
        <Button type="primary">Click me</Button>
        <div>{children}</div>
      </div>
    )
  }
}
