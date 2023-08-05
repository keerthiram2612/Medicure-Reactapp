import React from 'react'
import { useState } from 'react';


export default function Features() {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');

  const handleStartListening = () => {
    setIsListening(true);

    const recognition = new window.webkitSpeechRecognition(); // Use the Web Speech API
    recognition.continuous = true;
    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      setRecognizedText(transcript);
    };

    recognition.start();
  };

  const handleStopListening = () => {
    setIsListening(false);
  };
  const handleClearText = () => {
    setRecognizedText('');
  };

  return (
    <div className='resource'>
      <div className='speech'>
        <button className="btn1"onClick={handleStartListening} disabled={isListening}>
          Start Listening
        </button>
        <button  className="btn2"onClick={handleStopListening} disabled={!isListening}>
          Stop Listening
        </button>
        <button className="btn3"onClick={handleClearText}>Clear</button>
      </div>
      <div className='container-resource'>
        <p className='content-res'>Listening: {isListening ? 'ON' : 'OFF'}</p>
        <p className='content-res'>Recognized Text: {recognizedText}</p>
        <p></p>
      </div>
      <div className='image-res'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutrOrCT5WjZrGr1kIGEVi0-N3GmmigQyNig&usqp=CAU" alt="" />
      </div>
    </div>
  )
}
