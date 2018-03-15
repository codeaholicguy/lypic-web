import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import {Card, List, Spin} from 'antd'

const Container = styled.div`
  display: flex;
`

export default class TrackList extends Component {
  static propTypes = {
    tracks: PropTypes.array
  }

  render() {
    const {tracks} = this.props
    return (
      <Container>
        {!tracks && <Spin size="large" />}
        {!!tracks && (
          <Card bodyStyle={{width: 400}}>
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
          </Card>
        )}
      </Container>
    )
  }
}
