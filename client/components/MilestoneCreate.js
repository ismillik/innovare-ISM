import React from 'react';
import { connect } from 'react-redux';
import { createMilestone } from '../store/milestones';

class MilestoneCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            dueDate: '',
            status: '0',
            details: '',
            userId: '0',
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
        this.props.createMilestone({...this.state});
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
        const { users, history } = this.props;
        const handleCancel = () => history.push('/milestones');

        return (
            <div className='content-wrapper'>
                <h4>New Milestone</h4>
                <div className= 'create-form'>
                    <form onSubmit= {handleSubmit}>
                        <label htmlFor='title'>Title</label>
                        <input name='title' onChange={handleChange} value={title} required/>
                        
                        <label htmlFor='dueDate'>Due Date</label>
                        <input type='date' name='dueDate' onChange={handleChange} value={dueDate} required/>
                        
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

                        <select value={status} name='status' onChange={handleChange} required>
                            <option disabled key='0' value='0'>
                                {' '}-- Status --{' '}
                            </option>
                            <option value='In progress'>In progress</option>
                            <option value='Complete'>Complete</option>
                        </select>
                        
                        <label htmlFor='details'>Details</label>
                        <input name='details' onChange={handleChange} value={details} />
                        <br />
                        <button type="submit">Create</button>
                        <button className="cancel-button" type="button" onClick={handleCancel}>
                            Cancel
                        </button>
                    </form>
                </div>
                
            </div>
        );

    };

};

const mapState = (state) => {
    return {
        users: state.users,
    };
};

const mapDispatch = (dispatch, { history }) => ({
    createMilestone: (milestone) => dispatch(createMilestone(milestone, history)),
});

export default connect(mapState, mapDispatch)(MilestoneCreate);