import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {Spin, Card} from 'antd'

const Container = styled.div`
  display: flex;
`

const LyricWrapper = styled.div`
  height: 420px;
  overflow: auto;
`

export default class Track extends Component {
  static propTypes = {
    track: PropTypes.object.isRequired,
    getTrack: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getTrack(this.props.match.params.id)
  }

  render() {
    const {track} = this.props
    return (
      <Container>
        {!track && <Spin size="large" />}
        {!!track && (
          <Card
            title={
              <div>
                <h2>{track.trackName}</h2>
                <h5>{track.artistName}</h5>
              </div>
            }
            bodyStyle={{width: 400}}
          >
            <LyricWrapper>
              {!track.lyric.length && <p>No lyric</p>}
              {!!track.lyric.length &&
                track.lyric.split('\n').map(line => <p>{line}</p>)}
            </LyricWrapper>
          </Card>
        )}
      </Container>
    )
  }
}
