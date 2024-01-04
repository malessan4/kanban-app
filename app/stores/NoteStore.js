import NoteActions from '../actions/NoteActions';

export default class NoteStore {
    constructor() {
        this.bindActions(NoteActions);

        this.notes = [];
    }

    create(note){
        this.setState({
            notes: this.notes.concat(note)
        });
    }
    update(updateNote) {
        this.setState({
            notes: this.notes.map(note => {
                if(note.id === updateNote.id) {
                    return Object.assign({}, note, updateNote);
                }
                return note;
            })
        });
    }
    delete(id){
        this.setState({
            notes: this.notes.filter(note => note.id !== id)
        });
    }
}