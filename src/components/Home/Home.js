import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {Input} from 'antd'

const Container = styled.div`
  display: flex;
`

export default class Home extends Component {
  static propTypes = {
    search: PropTypes.func.isRequired
  }

  static contextTypes = {
    history: PropTypes.object
  }

  _search = async value => {
    this.props.search(value)

    this.context.history.push('/result')
  }

  render() {
    return (
      <Container>
        <Input.Search
          size="large"
          placeholder="Song name"
          enterButton
          onSearch={this._search}
        />
      </Container>
    )
  }
}
