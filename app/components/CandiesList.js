import React, { Component } from 'react'
import { getCandiesThunker } from '../reducers/candies'
import { connect } from 'react-redux'
import SingleCandy from './SingleCandy'
import {Link} from 'react-router-dom'

class CandiesList extends Component {
  componentDidMount() {
    this.props.getCandiesThunker()
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.candies.map(candy => {
            return (
              <Link to={`/candies/${candy.id}`} key={candy.id}>
                <SingleCandy {...candy} />
              </Link>
            )
          })
          }
        </ul>
      </div>
    )
  }
}

const mapState = (state) => ({
  candies: state.candies.candies
})
const mapDispatch = (dispatch) => ({
  getCandiesThunker: () => dispatch(getCandiesThunker())
})

export default connect(mapState, mapDispatch)(CandiesList)