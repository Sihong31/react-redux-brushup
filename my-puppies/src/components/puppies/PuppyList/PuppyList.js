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
        let puppiesArray = Object.values(this.props.puppies);
        return puppiesArray.map((puppy, index) => {
            return (
                <Link to={`/puppies/${index}`} key={index}>
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