import './index.css'
import { Link } from 'react-router-dom'

const Bots=()=>{
    return(
        <ul className='ul-bg' id="services">
            <li className='li-bot-bg'>
              <h1 className='bot-head'>
                Text to Image
              </h1>
              <p className='bot-para'>Click below to use the bot</p>
              <Link to="/textto-image">
              <button className='button-71'>Click Here</button></Link>
            </li>
            <li className='li-bot-bg'>
              <h1 className='bot-head'>
                Text to Speech
              </h1>
              <p className='bot-para'>Click below to use the bot</p>
              <Link to="/textto-Speech">
              <button className='button-71'>Click Here</button></Link>
            </li>
            <li className='li-bot-bg'>
              <h1 className='bot-head'>
                Text Classification
              </h1>
              <p className='bot-para'>Click below to use the bot</p>
              <Link to="/text-classifiaction">
              <button className='button-71'>Click Here</button></Link>
            </li>
            <li className='li-bot-bg'>
              <h1 className='bot-head'>
                Object Detection
              </h1>
              <p className='bot-para'>Click below to use the bot</p>
              <Link to="/image-detection">
              <button className='button-71'>Click Here</button></Link>
            </li>
        </ul>
    )
}
export default Bots