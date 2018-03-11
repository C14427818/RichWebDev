import React, {Component} from 'react';
import PersonInfo from './PersonInfo';

class List extends Component {

    render() {
        const people = this.props.people;
        return (
            <div className = "list">
                {
                    people.map((p) => {
                        console.log(p)
                        return(
                            <div key={p.url} >
                                <h1 className = "charName " > {p.name}</h1>
                                <PersonInfo personInfo = {p} />
                            </div>
                        )
                    })
                }
            </div>
        );
    }

}

export default List;