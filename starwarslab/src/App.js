import React, { Component } from 'react';
import axios from 'axios';
import List from './List';
import HomeList from "./HomeList";
import FilmList from './FilmList';
import ShipsList from './ShipsList';
import SpeciesList from './SpeciesList';
import VehicleList from './VehicleList';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {

            people:[],
            homeworld:[],
            films:[],
            starships:[],
            vehicles:[],
            species:[],
        }

        this.getPeople = this.getPeople.bind(this);
        this.getFilms = this.getFilms.bind(this);
        this.getVehicles = this.getVehicles.bind(this);
        this.getSpecies = this.getSpecies.bind(this);
        this.getShips = this.getShips.bind(this);
        this.getHomeworld = this.getHomeworld.bind(this);

    }

    getPeople(){
        return axios.get("https://swapi.co//api/people")
            .then((response) => {console.log(response.data.results);
            this.setState({people: response.data.results})
        })
    }


    getHomeworld(){
        return axios.get("http://swapi.co/api/planets")
            .then((response) => {
                console.log(response.data.results);
                this.setState({homeworld: response.data.results})
            })
    }


    getFilms(){

        return axios.get("http://swapi.co/api/films")
            .then((response) => {
                console.log(response.data.results);
                this.setState({films: response.data.results})
            })
    }


    getShips(){

        return axios.get("http://swapi.co/api/starships")
            .then((response) => {
                console.log(response.data.results);
                this.setState({starships: response.data.results})
            })
    }

    getVehicles(){

        return axios.get("http://swapi.co/api/vehicles")
            .then((response) => {
                console.log(response.data.results);
                this.setState({vehicles: response.data.results})
            })
    }


    getSpecies(){

        return axios.get("http://swapi.co/api/species")
            .then((response) => {
                console.log(response.data.results);
                this.setState({species: response.data.results})
            })
    }

    componentDidMount(){

        this.getPeople()
        this.getHomeworld()
        this.getFilms()
        this.getShips()
        this.getVehicles()
        this.getSpecies()
    }

  render() {

        const{people} = this.state;
        const {homeworld} = this.state
        const {species} = this.state
        const {vehicles} = this.state
        const {starships} = this.state
        const {films} = this.state

    return (

      <div className = "App">
          <List people = {people} />
          <HomeList homeworld = {homeworld} />
          <SpeciesList species = {species} />
          <VehicleList vehicles = {vehicles} />
          <FilmList films = {films} />
          <ShipsList starships = {starships} />
      </div>
    );
  }
}

export default App;
