import React, {Component} from 'react'

import {CenterLayout, AdjustCenterLayout} from '../../core/components'

import Search from '../Search'

export default class Home extends Component {
  render() {
    return (
      <CenterLayout>
        <AdjustCenterLayout>
          <h2>What do you describe your favorite song?</h2>
          <Search />
        </AdjustCenterLayout>
      </CenterLayout>
    )
  }
}
