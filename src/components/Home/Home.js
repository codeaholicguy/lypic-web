import React, {Component} from 'react'
import styled from 'styled-components'

import {Input} from 'antd'

const Container = styled.div`
  display: flex;
`

export default class Home extends Component {
  _search = value => {
    console.log('search', value)
  }

  render() {
    return (
      <Container>
        <Input.Search
          placeholder="input search text"
          enterButton
          onSearch={this._search}
        />
      </Container>
    )
  }
}
