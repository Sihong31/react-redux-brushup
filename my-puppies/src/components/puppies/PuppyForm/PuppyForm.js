import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PuppyForm extends Component {
    renderInput = (formProps) => {
        return (
            <div className="form-group">
                <label htmlFor={ formProps.name }>{ formProps.label }</label>
                <input { ...formProps.input} className="form-control" autoComplete="off" type={ formProps.type } />
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={ this.props.handleSubmit(this.onSubmit) }>
                <Field name="name" component={ this.renderInput } label="Name" type="text" />
                <Field name="imageUrl" component={ this.renderInput } label="Image Url" type="text" />
                <Field name="age" component={ this.renderInput } label="Age" type="number" />
                <Field name="weight" component={ this.renderInput } label="Weight" type="number" />
                <Field name="price" component={ this.renderInput } label="Price" type="number" />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'puppyForm'
})(PuppyForm);