// import React from 'react'

import Categories from "../components/Categories";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TopFive from "../components/TopFive";

function Home() {
  return (
    <div>
      <NavBar />
      {/* This is a Hero Section */}
      <section className=" w-full md:h-screen pt-16 ">
        <div className="text-center p-10">
          <h1 className="md:text-6xl text-2xl font-bold md:pt-8 md:pb-4">
            My Movie Ranking Website
          </h1>
          <p className="md:text-3xl text-1xl leading-5 pt-2">
            Welcome to MovieRank where i take you through a list of my favorite
            movies
          </p>
        </div>
        <div className="heroImage md:h-[74%] h-screen">
          <div className="btn">
            <a
              href="https://www.youtube.com/watch?v=_Z3QKkl1WyM&pp=ygUId2FrYW5kYSA%3D"
              target="_blank"
            >
              Watch Trailer
            </a>
          </div>
        </div>
      </section>

      {/* This is a categories section */}
      <section className="md:h-1/4  py-14 px-7">
        <Categories />
      </section>
      <section className="pb-20">
        <div className="max-w-[1100px] m-auto">
          <h1 className="text-4xl mb-6">My Top 5 Movies</h1>
          <div className="flex justify-between flex-wrap gap-5">
            <TopFive />
          </div>
        </div>
      </section>
      <footer className="bg-[#2e2e2e]">
        <div className="md:max-w-[1100px] m-auto">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default Home;
