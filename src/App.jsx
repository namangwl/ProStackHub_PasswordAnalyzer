// src/App.jsx

import React, { useState, useMemo } from 'react';
import { evaluatePassword } from './utils/passwordChecker';
import { Eye, EyeOff, ShieldCheck } from 'lucide-react';
import './App.css';

const App = () => {
  // Keeping state variables practical and readable
  const [userInput, setUserInput] = useState('');
  const [showPass, setShowPass] = useState(false);

  // Memoizing the checker so it only re-runs when the user actually types something
  const secData = useMemo(() => evaluatePassword(userInput), [userInput]);

  // Max score is 5, converting it to a percentage for the progress bar
  const barWidth = userInput ? `${(secData.strengthScore / 5) * 100}%` : '0%';

  // Quick toggle for the password visibility
  const toggleView = () => setShowPass(!showPass);

  return (
    <div className="app-wrapper">
      <div className="scanner-card">
        
        <div className="header-area">
          <ShieldCheck className="icon-shield" size={34} />
          <h2>Password Scanner</h2>
          <p>Test your password against brute-force rules</p>
        </div>

        <div className="input-group">
          <input
            type={showPass ? 'text' : 'password'}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type a password..."
            className="pass-input"
            autoComplete="off"
          />
          <button
            type="button"
            className="eye-btn"
            onClick={toggleView}
            title={showPass ? "Hide password" : "Show password"}
          >
            {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Only render the metrics panel if the input isn't empty */}
        {userInput && (
          <div className="metrics-box">
            <div className="status-flex">
              <span>Strength:</span>
              <span style={{ color: secData.themeColor, fontWeight: 'bold' }}>
                {secData.label}
              </span>
            </div>

            <div className="bar-bg">
              <div
                className="bar-fill"
                style={{
                  width: barWidth,
                  backgroundColor: secData.themeColor,
                }}
              ></div>
            </div>

            {/* Display the feedback array if there are missing requirements */}
            {secData.issues.length > 0 && (
              <div className="issue-list-container">
                <h4>Fix these to improve:</h4>
                <ul>
                  {secData.issues.map((issueItem, i) => (
                    <li key={i}>{issueItem}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        
      </div>
    </div>
  );
};

export default App;