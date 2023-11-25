import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            <h3>Hey cakes are here:{props.numOfCakes}</h3>
            <button onClick={props.buyCake}>buy</button>
        </div>
    )
}



const mapStateToProps = state => {
    return {
        numOfCakes: state.cakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
