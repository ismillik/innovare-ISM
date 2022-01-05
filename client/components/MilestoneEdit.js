import React from 'react';
import { connect } from 'react-redux';
import { updateMilestone, deleteMilestone } from '../store/milestones';

class MilestoneEdit extends React.Component {
    constructor(props) {
        super(props);
        const { milestone } = this.props;
        this.state = {
            id: milestone.id,
            title: milestone.title,
            dueDate: milestone.dueDate,
            status: milestone.status,
            details: milestone.details,
            userId: milestone.userId,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    };

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.updateMilestone({...this.state}, this.props.history);
    };

    render() {
        const {
            title,
            dueDate,
            status,
            details,
            userId,
        } = this.state;
        const { handleChange, handleSubmit } = this;
        const { milestone, users, history } = this.props;
        const handleCancel = () => history.push('/milestones');

        return (
            <div className='content-wrapper'>
                <h4 className='subheading-medium'>Edit {milestone.title}</h4>
                <div className= 'milestone-form-outer'>
                    <form className= 'milestone-form' onSubmit= {handleSubmit}>
                        <label htmlFor='title'>Title</label>
                        <input name='title' onChange={handleChange} value={title} required/>
                        <br />
                        <label htmlFor='dueDate'>Due Date</label>
                        <input type='date' name='dueDate' onChange={handleChange} value={dueDate} required/>
                        <br />
                        <select value={userId} name='userId' onChange={handleChange} required>
                            <option disabled key='0' value='0'>
                                {' '}-- Assigned To --{' '}
                            </option>
                            {users.map(user => {
                                const name = user.firstName + ' ' + user.lastName;
                                return (
                                <option key={user.id} value= {user.id}>{name}</option>
                                )
                            })}
                        </select>
                        <br />
                        <select value={status} name='status' onChange={handleChange} required>
                            <option disabled key='0' value='0'>
                                {' '}-- Status --{' '}
                            </option>
                            <option value='In progress'>In progress</option>
                            <option value='Complete'>Complete</option>
                        </select>
                        <br />
                        <label htmlFor='details'>Details</label>
                        <input name='details' onChange={handleChange} value={details} />
                        <br />
                        <button type='submit'>Update Milestone</button>
                        <button className='cancel-button' type='button' onClick={handleCancel}>
                            Cancel
                        </button>
                        <br />
                        <button className='delete-button' type='button'
                            onClick={() => this.props.deleteMilestone(milestone, history)}
                        >
                          Delete Milestone
                        </button>
                    </form>
                </div>
                
            </div>
        );

    };

};

const mapState = (state, {match}) => {
    const milestone = state.milestones.find(milestone => milestone.id === match.params.id) || {};
    return {
        milestone,
        users: state.users,
    };
};

const mapDispatch = (dispatch, { history }) => ({
    updateMilestone: (milestone) => dispatch(updateMilestone(milestone, history)),
    deleteMilestone: (milestone) => dispatch(deleteMilestone(milestone, history))
});

export default connect(mapState, mapDispatch)(MilestoneEdit);