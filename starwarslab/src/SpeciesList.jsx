import React, {Component} from 'react';
import SpeciesInfo from './SpeciesInfo';

class SpeciesList extends Component {

    render() {
        const species = this.props.species;
        return (
            <div className = "list">
                {
                    species.map((p) => {
                        console.log(p)
                        return(
                            <div key={p.url} >
                                <h1 className = "charName " > {p.name}</h1>
                                <SpeciesInfo speciesInfo = {p} />
                            </div>
                        )
                    })
                }
            </div>
        );
    }

}

export default SpeciesList;