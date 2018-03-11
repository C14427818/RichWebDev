import React, {Component} from 'react';

class PersonInfo extends Component {

    constructor(props){
        super(props);

        this.state = {
            expanded: false,
        }

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open(){
        this.setState({ expanded: !this.state.expanded })
    }

    close(){
        this.setState({ expanded: !this.state.expanded })
    }

    render() {
        const info = this.props.personInfo;
        if(!this.state.expanded){
            return <p className = "btn btnInfo" onClick={this.open}>More Info</p>
        }

        return(
            <div>
                <p className = "btn btnInfo" onClick={this.close}>Hide Info</p>
                <ul>

                    <li><h4>Gender: {info.gender}</h4></li>
                    <li><h4>Hair Colour: {info.hair_color}</h4></li>
                    <li><h4>DOB: {info.birth_year}</h4></li>
                    <li><h4>Height: {info.height}</h4></li>
                    <li><h4>Mass: {info.mass}</h4></li>

                </ul>
            </div>
        )

    }
}


export default PersonInfo;