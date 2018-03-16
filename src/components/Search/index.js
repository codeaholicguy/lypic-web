import {connect} from 'react-redux'

import Search from './Search'
import {search} from './actions'

export default connect(({keyword}) => ({keyword}), {search})(Search)
