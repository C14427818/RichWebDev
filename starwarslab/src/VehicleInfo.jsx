import React, {Component} from 'react';

class VehicleInfo extends Component {

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
        const info = this.props.vehicleInfo;
        if(!this.state.expanded){
            return <p className = "btn btnInfo" onClick={this.open}>More Info</p>
        }

        return(
            <div>
                <p className = "btn btnInfo" onClick={this.close}>Hide Info</p>
                <ul>

                    <li><h4>Model: {info.model}</h4></li>
                    <li><h4>Manufacturer: {info.manufacturer}</h4></li>
                    <li><h4>Cost in Credits: {info.cost_in_credits}</h4></li>
                    <li><h4>Max Atmosphere Speed: {info.max_atmosphering_speed}</h4></li>
                    <li><h4>Crew: {info.crew}</h4></li>
                    <li><h4>Passengers: {info.passengers}</h4></li>
                    <li><h4>Cargo Capacity: {info.cargo_capacity}</h4></li>
                    <li><h4>Consumables: {info.consumables}</h4></li>
                    <li><h4>Vehicle Class: {info.vehicle_class}</h4></li>

                </ul>
            </div>
        )

    }
}


export default VehicleInfo;