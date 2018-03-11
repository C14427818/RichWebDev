import React, {Component} from 'react';
import HomeInfo from './HomeInfo';

class HomeList extends Component{

    render() {
        const homeworld = this.props.homeworld;
        return (
            <div className = "list">
                {
                    homeworld.map((p) => {
                        console.log(p)
                        return(
                            <div key={p.url} >
                                <h1 className = "charName " > {p.name}</h1>
                                <HomeInfo homeInfo = {p} />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
export default HomeList;
