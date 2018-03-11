import React, {Component} from 'react';

class SpeciesInfo extends Component {

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
        const info = this.props.speciesInfo;
        if(!this.state.expanded){
            return <p className = "btn btnInfo" onClick={this.open}>More Info</p>
        }

        return(
            <div>
                <p className = "btn btnInfo" onClick={this.close}>Hide Info</p>
                <ul>

                    <li><h4>Classification: {info.classification}</h4></li>
                    <li><h4>Designation: {info.designation}</h4></li>
                    <li><h4>Average Height: {info.average_height}</h4></li>
                    <li><h4>Skin Colours: {info.skin_colors}</h4></li>
                    <li><h4>Hair Colours: {info.hair_colors}</h4></li>
                    <li><h4>Eye Colours: {info.eye_colors}</h4></li>
                    <li><h4>Average Lifespan: {info.average_lifespan}</h4></li>
                    <li><h4>Language: {info.language}</h4></li>

                </ul>
            </div>
        )

    }
}


export default SpeciesInfo;