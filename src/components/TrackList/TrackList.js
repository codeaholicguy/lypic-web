import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import {List} from 'antd'

import {Loading} from '../../core/components'

import Search from '../Search'

const ListWrapper = styled.div`
  padding: 20px 20px 50px 20px;
`

const SearhWrapper = styled.div`
  padding: 0px 20px 0px 20px;
`

export default class TrackList extends Component {
  static propTypes = {
    tracks: PropTypes.array
  }

  render() {
    const {tracks} = this.props

    return (
      <div>
        <SearhWrapper>
          <Search />
        </SearhWrapper>
        {!tracks && <Loading />}
        {!!tracks && (
          <ListWrapper>
            <List
              itemLayout="horizontal"
              dataSource={tracks}
              renderItem={track => (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <Link to={`tracks/${track.id}`}>{track.trackName}</Link>
                    }
                    description={track.artistName}
                  />
                </List.Item>
              )}
            />
          </ListWrapper>
        )}
      </div>
    )
  }
}
