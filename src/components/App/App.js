import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  static defaultProps = {
    children: null
  }

  static childContextTypes = {
    history: PropTypes.object
  }

  getChildContext() {
    return {
      history: this.props.history
    }
  }
  render() {
    const {children} = this.props

    return <Container>{children}</Container>
  }
}
