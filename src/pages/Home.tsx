import React from 'react';
import Hero from '../components/Hero';
import Faculties from '../components/Faculties';
import Courses from '../components/Courses';
import About from '../components/About';
import Videos from '../components/Videos'; // ← Flip card videos section
import Reviews from '../components/Reviews';
import Map from '../components/Map';

const Home = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Faculties Section */}
      <section id="faculties">
        <Faculties />
      </section>

      {/* Courses Section */}
      <section id="courses">
        <Courses />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Videos Section */}
      <section id="videos" className="pt-32">
        <Videos /> {/* Flip card videos displayed here */}
      </section>

      {/* Reviews Section */}
      <section id="reviews">
        <Reviews />
      </section>

      {/* Map Section */}
      <section id="map">
        <Map />
      </section>
    </div>
  );
};

export default Home;
