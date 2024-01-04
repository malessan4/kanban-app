import React from 'react';
import uuid from 'uuid';
import connect from '../libs/connect';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';


const App = ({LaneActions, lanes}) => {
    console.log('Adding Lane');
    const addLane = () => {
        LaneActions.create({
            id:uuid.v4(),
            name: 'New lane'
        });
    };

    return (
        <div>
            <button className="add-lane" onClick={addLane}>+ lane</button>
            <Lanes lanes={lanes} />
        </div>
    );
  
};


export default connect(({lanes}) => ({
    lanes
}), {
    LaneActions
})(App)
