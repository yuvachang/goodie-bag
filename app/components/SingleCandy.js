import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCandy } from '../reducers/candies'

class SingleCandy extends Component {
  render() {
    return (
      <div>

        <img src={this.props.imageUrl}
          style={{ width: '20%', height: '20%', position: 'center'}}
        />

        <h2>{this.props.name}</h2>

      </div>
    )
  }
}

const mapState = (state) => ({
  candies: state.candies
})

const mapDispatch = (dispatch) => ({
  getCandy: (candyId) => dispatch(getCandy(candyId))
})

export default connect(mapState, mapDispatch)(SingleCandy)