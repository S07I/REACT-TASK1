import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/Wordcounter.css';
import App from './App';
import Wordcounter from './components/Wordcounter';
function Appp() {
  return (
    <div className="App">
      
      <Wordcounter /> {/* Include the WordCounter component here */}
      
    
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Appp />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// echo "# REACT-TASK1" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/S07I/REACT-TASK1.git
// git push -u origin main