import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPuppy, deletePuppy } from '../../../actions';
import './PuppyDetails.scss';
import history from '../../../history';

class PuppyDetails extends Component {
    componentDidMount() {
        this.props.fetchPuppy(this.props.match.params.id);
    }

    onEditPuppy = () => {
        history.push(`/puppies/edit/${this.props.match.params.id}`);
    }

    onDeletePuppy = () => {
        this.props.deletePuppy(this.props.match.params.id);
        history.push('/');
    }

    render() {
        const { name, age, weight, price, imageUrl } = this.props.puppy;

        return (
            <div className="PuppyDetails">
                <div className="PuppyDetails-avatar">
                    <img src={ imageUrl } alt="Puppy" />
                </div>
                <h2>{ name }</h2>   
                <div className="PuppyDetails-details">
                    <p>Price: ${ price }</p>
                    <p>Age: { age }</p>
                    <p>Weight: { weight }</p>
                </div>
                <div className="PuppyDetails-buttons">
                    <button className="btn btn-primary" onClick={ this.onEditPuppy }>Edit Puppy</button>
                    <button className="btn btn-danger" onClick={ this.onDeletePuppy }>Delete Puppy</button>
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
        fetchPuppy: (puppyId) => dispatch(fetchPuppy(puppyId)),
        deletePuppy: (puppyId) => dispatch(deletePuppy(puppyId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PuppyDetails);