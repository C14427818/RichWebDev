import React, {Component} from 'react';
import ShipsInfo from './ShipsInfo';

class ShipsList extends Component {

    render() {
        const starships = this.props.starships;
        return (
            <div className = "list">
                {
                    starships.map((p) => {
                        console.log(p)
                        return(
                            <div key={p.url} >
                                <h1 className = "charName " > {p.name}</h1>
                                <ShipsInfo shipsInfo = {p} />
                            </div>
                        )
                    })
                }
            </div>
        );
    }

}

export default ShipsList;