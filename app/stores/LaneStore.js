import LaneActions from '../actions/LaneActions';

export default class LaneStore {
    constructor() {
        this.bindActions(LaneActions);

        this.lane = [];
    }
        create(lane){
            lane.note = lane.note || [];
    
        this.setState({
            lanes: this.lane.concat(lane) //aca puse "lane" y en el libro dice this.lanes //
        });
        
    }
}