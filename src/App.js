import './App.css'
import {Route, Routes,Router} from 'react-router-dom'
import Home1 from './components/Home1'
import Home from './components/Home'
import TextDetection from './components/textDetection'
import TextClass from './components/texttoClass'
import Construction from './components/construction'
import Notfound from './components/notfound'
import Footer from './components/Footer'



const App = () => (
   
      <div className='main-bg-css'>
      <Routes>
        <Route path="/" element={<><Home1 /> <Home /> <Footer/></>} />
        
        <Route path="/image-detection" element={<TextDetection />} />
        <Route path="/text-classifiaction" element={<TextClass />} />
        <Route path="/textto-image" element={<Construction />} />
        <Route path="/textto-Speech" element={<Construction />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      </div>

   
   
  
)

export default App

