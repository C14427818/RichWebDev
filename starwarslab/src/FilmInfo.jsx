import React, {Component} from 'react';

class FilmInfo extends Component {

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
        const info = this.props.FilmInfo;
        if(!this.state.expanded){
            return <p className = "btn btnInfo" onClick={this.open}>More Info</p>
        }

        return(
            <div>
                <p className = "btn btnInfo" onClick={this.close}>Hide Info</p>
                <ul>

                    <li><h4>Episode ID: {info.episode_id}</h4></li>
                    <li><h4>Opening Crawl: {info.opening_crawl}</h4></li>
                    <li><h4>Director: {info.director}</h4></li>
                    <li><h4>Producer: {info.producer}</h4></li>
                    <li><h4>Release Date: {info.release_date}</h4></li>

                </ul>
            </div>
        )

    }
}

export default FilmInfo;
