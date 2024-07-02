import './index.css'
import texttoImage from '../Assets/texttoImage.png'
import imageDection from '../Assets/imageDection.jpg'
import textClassification from '../Assets/textClassification.jpg'
import texttoSpeech from '../Assets/texttoSpeech.jpeg'



const Description=()=>{
  

    return(
        <ul className="desc-main-bg" id="about">
          <li className="li-main-bg">
            <img src={texttoImage} alt="text" className="li-img" />
            <div className="bg-li">
              <h1 className="li-head">Text To Imge</h1>
              <p className="li-para">Text-to-image AI is a type of artificial intelligence that can generate images from text descriptions. This technology has the potential to transform how we interact with and create visual content. </p>
            </div>
          </li>


          <li className="li-main-bg">
            <img src={texttoSpeech} alt="text" className="li-img" />
            <div className="bg-li"> 
            <h1 className="li-head">Text To Speech</h1>
            <p className="li-para">Text-to-image AI is a type of artificial intelligence that can generate images from text descriptions. This technology has the potential to transform how we interact with and create visual content. </p>
            </div>
          </li>


          <li className="li-main-bg">
            <img src={textClassification} alt="text" className="li-img" />
            <div className="bg-li"> 
            <h1 className="li-head">Text Classification</h1>
            <p className="li-para">Text-to-image AI is a type of artificial intelligence that can generate images from text descriptions. This technology has the potential to transform how we interact with and create visual content. </p>
            </div>
          </li>


          <li className="li-main-bg">
            <img src={imageDection} alt="text" className="li-img" />
            <div className="bg-li"> 
            <h1 className="li-head">Image Detection</h1>
            <p className="li-para">Text-to-image AI is a type of artificial intelligence that can generate images from text descriptions. This technology has the potential to transform how we interact with and create visual content. </p>
            </div>
          </li>
        </ul>
    )
}
export default Description