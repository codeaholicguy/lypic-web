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

const Footer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: white;
  @media (min-width: 800px) {
    width: 800px;
    margin: auto;
  }
`

const Narrative = styled.span`
  margin-right: 5px;
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
    const {children, location: {pathname}} = this.props

    return (
      <Wrapper>
        <Navbar>
          <div>
            <Link to="/">
              <Title>lypic</Title>
            </Link>
          </div>
          {pathname !== '/' && (
            <div>
              <Icon
                type="arrow-left"
                style={{fontSize: 32}}
                onClick={this._back}
              />
            </div>
          )}
        </Navbar>
        {children}
        <Footer>
          <Narrative>Made with ♥ by</Narrative>
          <a href="https://codeaholicguy.com">Codeaholicguy</a>
        </Footer>
      </Wrapper>
    )
  }
}
