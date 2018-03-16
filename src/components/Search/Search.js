import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {Input} from 'antd'

export default class Search extends Component {
  static propTypes = {
    keyword: PropTypes.string,
    search: PropTypes.func.isRequired
  }

  static contextTypes = {
    history: PropTypes.object
  }

  _search = value => {
    this.props.search(value)

    this.context.history.push('/result')
  }

  render() {
    return (
      <Input.Search
        size="large"
        placeholder="Song name"
        defaultValue={this.props.keyword || ''}
        enterButton
        onSearch={this._search}
      />
    )
  }
}
