import React, { useState } from 'react';
import LOGO from '../Assets/LOGO.png'
import './index.css'
import { Link } from 'react-router-dom';

const DetrComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [output, setOutput] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_URL = "https://api-inference.huggingface.co/models/facebook/detr-resnet-50";
  const headers = {
    "Authorization": "Bearer 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"
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: headers,
        body: selectedFile
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      setOutput(result);
      drawBoxesOnImage(result); // Draw bounding boxes on image
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload file. Please ensure the file is valid and try again.");
    } finally {
      setLoading(false);
    }
  };

  const drawBoxesOnImage = (predictions) => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);

      // Draw bounding boxes
      predictions.forEach(prediction => {
        const { xmin, ymin, xmax, ymax } = prediction.box;
        const label = prediction.label;
        const score = prediction.score;

        // Define box color based on label
        let color = 'red'; // default color
        if (label === 'person') {
          color = 'blue';
        } else if (label === 'clock') {
          color = 'green';
        }

        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.rect(xmin, ymin, xmax - xmin, ymax - ymin);
        ctx.stroke();
        ctx.fillStyle = color;
        ctx.font = '14px Arial';
        ctx.fillText(`${label} ${score.toFixed(2)}`, xmin + 5, ymin + 20);
      });
    };
    image.src = URL.createObjectURL(selectedFile);
  };

  return (
    <div className='object-detection-bg'>
      <nav>
        <div className="logo">
          <img src={LOGO} alt="ai-image" className='ai-logo'/>
        </div>
        
        <div className="buttons">
          <Link to="/">
          <a href="#" className="login">Back</a>
          </Link>
         
        </div>
      </nav>
      <div className='object-detection-bg1'>
      <h1>OBJECT DETECTION BOT</h1>
      <input type="file" onChange={handleFileChange} className='but' />
      <button onClick={handleFileUpload} className='example_g'>Detect</button>
      {loading && <p>Loading...</p>}
      {output.length > 0 && (
        <div className='output-pg'>
          <h2>Model Output:</h2>
          <canvas id="canvas" className='responsive-canvas' />
        </div>
      )}
      </div>
    </div>
  );
};

export default DetrComponent;
