import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {Radio, Input} from 'antd'

import {SearchTypes} from '../../core/constants'

export default class Search extends Component {
  static propTypes = {
    keyword: PropTypes.object,
    search: PropTypes.func.isRequired
  }

  static contextTypes = {
    history: PropTypes.object
  }

  constructor(props) {
    super(props)

    this.state = {
      searchType: props.keyword.searchType || SearchTypes.ALL
    }
  }

  _search = value => {
    this.props.search(value, this.state.searchType)

    this.context.history.push('/result')
  }

  _searchTypeChanged = e => {
    this.setState({searchType: e.target.value})
  }

  render() {
    const RadioGroup = Radio.Group
    const {query, searchType} = this.props.keyword

    return (
      <div>
        <Input.Search
          size="large"
          placeholder="Song name"
          defaultValue={query || ''}
          enterButton
          onSearch={this._search}
        />
        <RadioGroup
          onChange={this._searchTypeChanged}
          defaultValue={searchType}
          value={this.state.searchType}
          style={{marginTop: 10}}
        >
          <Radio value={SearchTypes.ALL}>All</Radio>
          <Radio value={SearchTypes.TITLE}>Title</Radio>
          <Radio value={SearchTypes.ARTIST}>Artist</Radio>
          <Radio value={SearchTypes.LYRIC}>Lyric</Radio>
        </RadioGroup>
      </div>
    )
  }
}
