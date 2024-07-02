import React, { useState } from 'react';

import LOGO from '../Assets/LOGO.png'
import './index.css'
import { Link } from 'react-router-dom';

const SentimentAnalysisComponent = () => {
  const [inputText, setInputText] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = "https://api-inference.huggingface.co/models/distilbert/distilbert-base-uncased-finetuned-sst-2-english";
  const headers = {
    "Authorization": "Bearer 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",
    "Content-Type": "application/json"
  };

  const query = async (data) => {
    try {
      setLoading(true);
      const response = await fetch(API_URL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`HTTP error! Status: ${response.status} - ${errorText}`);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("API response:", result); // Debugging line
      setAnalysisResult(result[0]); // Set analysis result in state
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyze = () => {
    if (inputText.trim() === "") {
      alert("Please enter some text to analyze.");
      return;
    }
    query({ inputs: inputText });
  };

  return (
    <div className='main-bg'>
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
      <div className='sub-bg'>
      <h1>TEXT ANALYSIS BOT</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows="4"
        cols="50"
        placeholder="Enter text here..." className='text-in'
      ></textarea>
      <br />
      <button onClick={handleAnalyze} disabled={loading} className='example_g'>
        Analyze
      </button>
      {loading && <p>Loading...</p>}
      {analysisResult && (
        <div>
          <h2>Analysis Result:</h2>
          <div style={{ margin: '10px 0' }}>
            {Array.isArray(analysisResult) && analysisResult.length > 0 ? (
              analysisResult.map((result, index) => (
                <div key={index} style={{ margin: '10px 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{result.label}</span>
                    <span>{result.score !== undefined ? `${(result.score * 100).toFixed(2)}%` : 'N/A'}</span>
                  </div>
                </div>
              ))
            ) : (
              <p>No analysis results available.</p>
            )}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default SentimentAnalysisComponent;
