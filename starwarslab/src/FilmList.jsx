import React, {Component} from 'react';
import FilmInfo from "./FilmInfo";

class FilmList extends Component {

    render() {
        const films = this.props.films;
        return (
            <div className = "list">
                {
                    films.map((p) => {
                        console.log(p)
                        return(
                            <div key={p.url} >
                                <h1 className = "charName " > {p.name}</h1>
                                <FilmInfo filmInfo = {p} />
                            </div>
                        )
                    })
                }
            </div>
        );
    }

}

export default FilmList;