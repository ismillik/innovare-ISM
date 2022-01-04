import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Routes from './Routes';
import { getMilestones } from './store/milestones';
import { getUsers } from './store/users';

class App extends Component {
    componentDidMount() {
        this.props.getMilestones();
        this.props.getUsers();
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
        users: state.users,
    };
};

const mapDispatch = (dispatch) => {
    return {
        getMilestones: () => dispatch(getMilestones()),
        getUsers: () => dispatch(getUsers()),

    };
};


export default withRouter(connect(mapState, mapDispatch)(App));