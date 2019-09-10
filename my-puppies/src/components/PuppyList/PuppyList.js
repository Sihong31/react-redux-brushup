import React, { Component } from 'react';
import { connect } from 'react-redux';

import './PuppyList.scss';
import PuppyCard from './PuppyCard/PuppyCard';
import { fetchPuppies } from '../../actions';

class PuppyList extends Component {
    componentDidMount() {
        this.props.fetchPuppies();
        console.log(this.props);
    }

    renderList() {
        let puppiesArray = Object.values(this.props.puppies);
        return puppiesArray.map((puppy, index) => {
            return <PuppyCard key={index} { ...puppy} />
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