import React, {Component} from 'react';
import VehicleInfo from './VehicleInfo';

class VehicleList extends Component {

    render() {
        const vehicles = this.props.vehicles;
        return (
            <div className = "list">
                {
                    vehicles.map((p) => {
                        console.log(p)
                        return(
                            <div key={p.url} >
                                <h1 className = "charName " > {p.name}</h1>
                                <VehicleInfo vehicleInfo = {p} />
                            </div>
                        )
                    })
                }
            </div>
        );
    }

}

export default VehicleList;