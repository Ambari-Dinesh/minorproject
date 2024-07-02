// Write your code here
import {Component} from 'react'
//import Loader from 'react-loader-spinner'

//import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import NavBar from '../NavBar';
//import Body from '../Body'
import Description from '../Description'
import Bots from '../Bot'
//import Footer from '../Fotter';

import './index.css'


class Home extends Component {
  state = {isLoading: true, teamsData: []}

 

  render() {
    

    return (
      <div className='main-bg-bg'>
        
        
        <h1 className='about-head'>About</h1>
        <Description/>
        <h1 className='about-head'>Services</h1>
        <Bots/>
        
      </div>
      
    )
  }
}
export default Home
