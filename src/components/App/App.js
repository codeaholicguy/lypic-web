import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import {Icon} from 'antd'

const Wrapper = styled.div`
  @media (min-width: 800px) {
    width: 800px;
    margin: auto;
  }
`
const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`

const Title = styled.h1`
  font-family: 'Ubuntu', sans-serif;
  margin: 0px;
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

  _back = () => {
    this.props.history.goBack()
  }

  render() {
    const {children} = this.props

    return (
      <Wrapper>
        <Navbar>
          <div>
            <Link to="/">
              <Title>lypic</Title>
            </Link>
          </div>
          <div>
            <Icon
              type="arrow-left"
              style={{fontSize: 32}}
              onClick={this._back}
            />
          </div>
        </Navbar>
        {children}
      </Wrapper>
    )
  }
}
