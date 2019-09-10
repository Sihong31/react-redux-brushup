import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPuppy } from '../../../actions';
import './PuppyDetails.scss';

class PuppyDetails extends Component {
    componentDidMount() {
        this.props.fetchPuppy(this.props.match.params.id);
    }

    render() {
        const { name, age, weight, price, imageUrl } = this.props.puppy;

        return (
            <div className="PuppyDetails">
                <div className="PuppyDetails-avatar">
                    <img src={ imageUrl } alt="Puppy Image" />
                </div>
                <h2>{ name }</h2>
                <div className="PuppyDetails-details">
                    <p>Price: ${ price }</p>
                    <p>Age: { age }</p>
                    <p>Weight: { weight }</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        puppy: state.puppies[ownProps.match.params.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPuppy: (puppyId) => dispatch(fetchPuppy(puppyId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PuppyDetails);