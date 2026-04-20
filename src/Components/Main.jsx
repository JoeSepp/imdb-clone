import "../Styles/Main.css"

import MovieList from "./MovieList.jsx"
import Hero from "./Hero/Hero.jsx"
import { useState } from "react"
import FeaturedSlider from "./Featured/FeaturedSlider.jsx"
import PeopleSlider from "./Galleries/PeopleSlider.jsx"
import MovieSlider from "./Galleries/MovieSlider.jsx"
import PopularInterests from "./Galleries/PopularInterests.jsx"

import featuredTodayData from "../Data/featuredTodayData.js"
import exploreData from "../Data/exploreData.js"


/*  async function getMovie() {
       const response = fetch("https://www.omdbapi.com/?i=tt3896198&apikey=4ef57d82");
       const data = (await response).json();

       return data;
   }

   const currentMovie = getMovie();

   console.log(currentMovie) */


function Main() {


    return (
        <main>
            <div className="page-content-container">
                <Hero />
                <div className="gallery-container">
                    <span className="gallery-header">Featured today</span>
                    <FeaturedSlider data={featuredTodayData} />
                </div>
                <PeopleSlider />
                <div className="gallery-container">
                    <span className="gallery-header">What to watch</span>
                    <MovieSlider api={"https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"} header="Top picks" subtext="TV shows and movies just for you" />
                    <MovieSlider api={"https://api.themoviedb.org/3/trending/tv/day?language=en-US"} header="Top 10 on IMDb this week" ranked={true} />
                    <MovieSlider api={"https://api.themoviedb.org/3/trending/movie/day?language=en-US"} header="Fan favorites" subtext="This week's top TV and movies" />
                    <PopularInterests />
                </div>
                <div className="gallery-container">
                    <span className="gallery-header">More to explore</span>
                    <FeaturedSlider data={exploreData} header="Editor's pick" />
                </div>
            </div>
        </main>
    )
}

export default Main