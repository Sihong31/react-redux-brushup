import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './PuppyList.scss';
import PuppyCard from './PuppyCard/PuppyCard';
import { fetchPuppies } from '../../../actions';

class PuppyList extends Component {
    componentDidMount() {
        this.props.fetchPuppies();
    }

    renderList() {
        let puppiesArray = [];
        Object.keys(this.props.puppies).map(puppyId => {
            puppiesArray.push({ ...this.props.puppies[puppyId], puppyId});
        })
        return puppiesArray.map((puppy) => {
            return (
                <Link to={`/puppies/${puppy.puppyId}`} key={puppy.puppyId}>
                    <PuppyCard { ...puppy} />
                </Link>
            );
        });
    }

    render() {
        return (
            <div className="PuppyList">
                <div className="puppy-wrapper">
                    { this.renderList() }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        puppies: state.puppies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPuppies: () => dispatch(fetchPuppies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PuppyList);