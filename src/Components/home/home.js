import React from 'react';
import './home.css';
import Nav from './nav/nav';
import Header from './header/header';
import Article from './article/article';
import Story from './stories/stories';
import Video from './video/video';
import Posts from '../../Components/posts/posts';
import Footer from './footer/footer';

const Home = () => {

  return (
    <div className="App">

      <Nav />
      <Header />
      <Article />
      <Story />
      <Video />
      <Posts />
      <Footer />
      
    </div>
  );
}

export default Home;
