import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MilestoneList from './components/MilestoneList';
import MilestoneCreate from './components/MilestoneCreate';
import MilestoneEdit from './components/MilestoneEdit';
import MilestoneSingle from './components/MilestoneSingle';


const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route exact path="/milestones" component={MilestoneList} />
                <Route path="/milestones/create" component={MilestoneCreate} />
                <Route path="/milestones/edit/:id" component={MilestoneEdit} />
                <Route path="/milestones/:id" component={MilestoneSingle} />
                <Redirect to="/dashboard" />  
            </Switch>
   
        </div>
    );
  };
  
  export default Routes;