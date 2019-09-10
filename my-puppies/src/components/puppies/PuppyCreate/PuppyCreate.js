import React, { Component } from 'react';
import { connect } from 'react-redux';

import './PuppyCreate.scss';
import PuppyForm from '../PuppyForm/PuppyForm';
import { createPuppy } from '../../../actions';
import history from '../../../history';

class PuppyCreate extends Component {

    onSubmit = (formValues) => {
        this.props.createPuppy(formValues);
        history.push('/');
    }

    render() {
        return (
            <div>
                <PuppyForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPuppy: (formValues) => dispatch(createPuppy(formValues))
    }
}

export default connect(null, mapDispatchToProps)(PuppyCreate);