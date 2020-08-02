import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    };
  }

  async componentDidMount() {
    const data = await axios(
      // "https://api.themoviedb.org/3/movie/111?api_key=8d021868bbab84ae4f9d16fdc0645e0c"
      "https://api.themoviedb.org/3/search/tv?api_key=8d021868bbab84ae4f9d16fdc0645e0c&query=star%20trek"
    );
    this.setState({
      title: data.data.results[1].name,
      // id: data.data[1].id,
      // overview: data.data[1].overview,
      // poster: data.data[1].poster_path,
    });

    console.log(this.state.title);
  }
  render() {
    // return this.state.countries.map((item) => <h1>{item.name}</h1>);
    if (this.state.title) {
      return <h1>{this.state.title}</h1>;
    } else {
      return <h1>Loading....</h1>;
    }
  }
}

// function App() {

//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//     </div>
//   );
// }

export default App;

// THE MOVIE DATA BASE - TMDB:

// KEY: 8d021868bbab84ae4f9d16fdc0645e0c

// EXAMPLE API REQUEST: https://api.themoviedb.org/3/movie/550?api_key=8d021868bbab84ae4f9d16fdc0645e0c

// API Read Access Token(v4 auth): eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDAyMTg2OGJiYWI4NGFlNGY5ZDE2ZmRjMDY0NWUwYyIsInN1YiI6IjVlNjQ0ZmVkM2UwMWVhMDAxM2ViMGVkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jaWg3niI3pYUbBqqI9vZ6U53yxMyC72hs85oHN5C8q4
