import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {Input} from 'antd'

import {CenterLayout, AdjustCenterLayout} from '../../core/components'

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
      <CenterLayout>
        <AdjustCenterLayout>
          <h2>What is your favorite song?</h2>
          <Input.Search
            size="large"
            placeholder="Song name"
            enterButton
            onSearch={this._search}
          />
        </AdjustCenterLayout>
      </CenterLayout>
    )
  }
}
