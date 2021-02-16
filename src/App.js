import React from 'react';
import Route from 'react-router-dom/Route';
// import { Transition, animate } from  'react-spring';
import './App.css';
import Home from './Components/home/home';
import Writer from './Components/writer/writer';
import Register from './Components/register/register';
import Contact from './Components/contact/contact';
import Upload from './Components/upload/upload';
import UploadContent from './Components/upload/uploadContent/uploadContent';
import UploadContentText from './Components/upload/uploadContent/uploadContentText/uploadContentText';
import UploadContentFile from './Components/upload/uploadContent/uploadContentFile/uploadContentFile';
import UploadDone from './Components/upload/uploadContent/uploadDone/uploadDone';
import Admin from './Components/admin/admin';
import SignIn from './Components/signIn/signIn';
import SignInPassword from './Components/signIn/signInPassword/signInPassword';
import StoryLoader from './Components/storyloader/storyloader';



const App = () => {

  return (
    <div className="App">

      <Route path = '/' exact strict component = {Home} />

      <Route path = '/storyloader' exact strict component = {StoryLoader} />

      <Route path = '/writer' exact strict component = {Writer} />

      <Route path = '/contact' exact strict component = {Contact} />

      <Route path = '/upload' exact strict component = {Upload} />

      <Route path = '/uploadcontent' exact strict component = {UploadContent} />

      <Route path = '/uploadcontenttext' exact strict component = {UploadContentText} />

      <Route path = '/uploadcontentfile' exact strict component = {UploadContentFile} />

      <Route path = '/uploaddone' exact strict component = {UploadDone} />

      <Route path = './admin' exact strict component = {Admin} />
      
      <Route path = '/register' exact strict component = {Register} />

      <Route path = '/signIn' exact strict component = {SignIn} />

      <Route path = '/signInPassword' exact strict component = {SignInPassword} />



    </div>
  );
}

export default App;
