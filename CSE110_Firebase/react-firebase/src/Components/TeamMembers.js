import React, {Component} from 'react';

class TeamMembers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: ''
        };

        this.firebaseRef = this.props.db.database().ref("teamMates");
    }

    componentWillUnmount() {
        this.firebaseRef.off();
    }

    pushToFirebase(event) {
        const {name, age} = this.state;
        event.preventDefault();
        this.firebaseRef.child(name).set({name: this.state.name, age:this.state.age});
        this.setState({name: '', age: ''});
    }

    render(){
        return(
            <div>
                <label>Aaron</label>
                <input onChange={e => this.setState({name: e.target.value})}/>
                <br />
                <label>20</label>
                <input onChange={e => this.setState({age: e.target.value})}/>
                <br />
                <button onClick={this.pushToFirebase.bind(this)}>Submit</button>
            </div>
        );
    }
}

export default TeamMembers;