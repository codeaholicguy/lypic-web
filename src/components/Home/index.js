import {connect} from 'react-redux'

import Home from './Home'
import {search} from './actions'

export default connect(() => ({}), {search})(Home)
