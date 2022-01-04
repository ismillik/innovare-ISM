import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Routes from './Routes';
import { getMilestones } from './store/milestones';

class App extends Component {
    componentDidMount() {
        this.props.getMilestones();
    }

    render() {
        return (
            <div id = 'main-app'>
                <div id='side'>
                    <Navbar />
                </div>
                <div id='main'>
                    <Header />
                    <Routes />
                </div>
            </div>
        );
    };
}

const mapState = (state) => {
    return {
        milestones: state.milestones,
        // users:
    };
};

const mapDispatch = (dispatch) => {
    return {
        getMilestones: () => dispatch(getMilestones()),

    };
};


export default withRouter(connect(mapState, mapDispatch)(App));