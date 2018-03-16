import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {Divider} from 'antd'

import {Loading} from '../../core/components'

const Wrapper = styled.div`
  padding: 20px 20px 50px 20px;
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
      <div>
        {!track && <Loading />}
        {!!track && (
          <Wrapper>
            <h2>{track.trackName}</h2>
            <h4>{track.artistName}</h4>
            <Divider />
            <div>
              {!track.lyric.length && <p>No lyric</p>}
              {!!track.lyric.length &&
                track.lyric.split('\n').map(line => <p>{line}</p>)}
            </div>
          </Wrapper>
        )}
      </div>
    )
  }
}
