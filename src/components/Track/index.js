import {connect} from 'react-redux'

import Track from './Track'
import {getTrack} from './actions'

export default connect(({track}) => ({track}), {getTrack})(Track)
