import React from 'react'
import CandiesList from './CandiesList'
import SingleCandyPage from './SingleCandyPage'
import { HashRouter, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Root = (props) => {
  return (
    <HashRouter>
      <div>
        <nav>
          Goodie Bag
          <Link to='/candies'>SHOW ALL THE CANDIES</Link>
          <Link to='/'>HIDE ALL THE CANDIES</Link>
        </nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
          <Route exact path='/candies' component={CandiesList} />
          <Route path='/candies/:id' component={SingleCandyPage} />
        </main>
      </div>
    </HashRouter>
  )
}

const mapState = (state) => ({
  singleCandy: state.singleCandy
})

export default connect(mapState)(Root)
