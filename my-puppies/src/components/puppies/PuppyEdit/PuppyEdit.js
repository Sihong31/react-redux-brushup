import React, { Component } from 'react';
import { connect } from 'react-redux';

import './PuppyEdit.scss';
import { editPuppy, fetchPuppy } from '../../../actions';
import PuppyForm from '../PuppyForm/PuppyForm';
import history from '../../../history';


class PuppyEdit extends Component {

    componentDidMount() {
        this.props.fetchPuppy(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editPuppy(this.props.match.params.id, formValues);
        history.push('/');
    }

    render() {
        return (
            <div>
                <PuppyForm initialValues={ this.props.puppy } onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        puppy: state.puppies[ownProps.match.params.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPuppy: (puppyId) => dispatch(fetchPuppy(puppyId)),
        editPuppy: (puppyId, formValues) => dispatch(editPuppy(puppyId, formValues))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PuppyEdit);