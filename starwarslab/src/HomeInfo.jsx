import React, {Component} from 'react';

class HomeInfo extends Component {

    constructor(props){
        super(props);

        this.state ={
            expanded: false,
        }

        //initialising the open and close
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }


    open(){
        this.setState({expanded: !this.state.expanded})
    }
    close(){
        this.setState({expanded: !this.state.expanded})
    }

    render(){
        const info = this.props.homeInfo;
        if(!this.state.expanded){
            return <p className="btn btn-info" onClick={this.open}>Show Info</p>
        }

        return(
            <div>
                <p className="btn btn-danger" onClick={this.close}>Hide Info</p>
                <ul>
                    <li><h4>Rotation Period: {info.rotation_period}</h4></li>
                    <li><h4>Orbital Period: {info.orbital_period}</h4></li>
                    <li><h4>Diameter: {info.diameter}</h4></li>
                    <li><h4>Climate: {info.climate}</h4></li>
                    <li><h4>Gravity: {info.gravity}</h4></li>
                    <li><h4>Terrain: {info.terrain}</h4></li>
                    <li><h4>Surface Water: {info.surface_water}</h4></li>
                    <li><h4>Population: {info.population}</h4></li>
                </ul>
            </div>
        )
    }
}

export default HomeInfo;