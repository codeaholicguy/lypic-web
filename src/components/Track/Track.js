import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {Divider} from 'antd'

import {Loading} from '../../core/components'

import Search from '../Search'

const Wrapper = styled.div`
  padding: 20px 20px 50px 20px;
`

const SearhWrapper = styled.div`
  padding: 0px 20px 0px 20px;
`

export default class Track extends Component {
  static propTypes = {
    track: PropTypes.object,
    getTrack: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getTrack(this.props.match.params.id)
  }

  render() {
    const {track} = this.props
    return (
      <div>
        <SearhWrapper>
          <Search />
        </SearhWrapper>
        {!track && <Loading />}
        {!!track && (
          <Wrapper>
            <h2>{track.trackName}</h2>
            <h4>{track.artistName}</h4>
            <Divider />
            <div>
              {!track.lyric.length && <p>No lyric</p>}
              {!!track.lyric.length &&
                track.lyric
                  .split('\n')
                  .map((line, index) => <p key={`line-${index}`}>{line}</p>)}
            </div>
          </Wrapper>
        )}
      </div>
    )
  }
}
