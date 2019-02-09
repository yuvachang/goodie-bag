import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCandyThunker } from '../reducers/candies'

class SingleCandyPage extends Component {

  componentDidMount() {
    this.props.getCandyThunker(this.props.match.params.id)
  }

  render() {
    const candy = this.props.singleCandy
    return (
      candy.name
        ? < div >
          <h1>{candy.name}</h1>
          <hr />
          <img src={candy.imageUrl}
            style={{ width: '50%', height: '50%', position: 'center' }}
          />
          <hr />
          <p>{candy.description}</p>
          <br />
          <Link to={'/candies'}>
            <div><h1>BACK</h1></div>
          </Link>
        </div >
        : <div>loading
        <button onClick={() => this.props.getCandyThunker(this.props.match.params.id)}>GETCANDYdispatch</button>
        </div>
    )
    // return( <h1>hi!!!!!!!!!!!!! {this.props.match.params.id} </h1>)
  }
}
const mapState = (state) => ({
  singleCandy: state.candies.singleCandy
})
const mapDispatch = (dispatch) => ({
  getCandyThunker: (candyId) => dispatch(getCandyThunker(candyId))
})
export default connect(mapState, mapDispatch)(SingleCandyPage)