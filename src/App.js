import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [lowerCaseChecked, setLowerCaseChecked] = useState(true);
  const [upperCaseChecked, setUpperCaseChecked] = useState(false);
  const [specialSymbolsChecked, setSpecialSymbolsChecked] = useState(false);
  const [numbersChecked, setNumberChecked] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const generateRandomPassword = () => {
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = lowerCaseLetters.toUpperCase();
    const numbers = "0123456789";
    const specialSymbols = `[&/#,+-()$~%.'":*?<>{}]`;

    const getCheckedFields = () => {
      let checkedFields = [];
      if (lowerCaseChecked) {
        checkedFields.push(lowerCaseLetters);
      }
      if (upperCaseChecked) {
        checkedFields.push(upperCaseLetters);
      }
      if (specialSymbolsChecked) {
        checkedFields.push(specialSymbols);
      }
      if (numbersChecked) {
        checkedFields.push(numbers);
      }
      return checkedFields;
    };

    let randomPassword = "";
    let checkedFields = getCheckedFields();
    if (checkedFields.length > 0) {
      for (let i = 0; i < 20; i++) {
        let randomCheckedField = Math.floor(Math.random() * checkedFields.length);
        randomPassword += checkedFields[randomCheckedField].charAt(Math.floor(Math.random() * checkedFields[randomCheckedField].length));
      }
    }
    setGeneratedPassword(randomPassword);
  };

  useEffect(generateRandomPassword, [lowerCaseChecked, upperCaseChecked, specialSymbolsChecked, numbersChecked]);

  return (
    <div className="website-wrapper">
      <div className="header">
        <div className="container">
          <div className="logo">
            <FontAwesomeIcon icon={faUnlockAlt} className="icon" />
            Password generator
          </div>
        </div>
      </div>
      <div className="content">
        <div className="learn-more-container">
          Our readers help us create quality content. If you purchase via links on our site, we may receive affiliate commissions.
          <a href="www.google.lt">Learn more</a>
        </div>
        <div className="password-generator-container">
          <h1>Generate strong passwords</h1>
          <p>Upgrade the security of your online accounts. </p>
          <p>Create strong passwords that are completely random and impossible to guess.</p>
          <div className="output-container">
            <div className="output">
              {generatedPassword}
              <div className="btn btn-generate" onClick={() => generateRandomPassword()}></div>
            </div>
            <div className="btn btn-copy" onClick={() => navigator.clipboard.writeText(generatedPassword)}>
              Copy Password
            </div>
          </div>
          <div className="options-container">
            <div className="checkbox-container" onClick={() => setLowerCaseChecked(!lowerCaseChecked)}>
              <div className="checkbox-field">{lowerCaseChecked ? <FontAwesomeIcon icon={faCheck} className="icon" /> : null}</div>
              <p>lower case</p>
            </div>
            <div className="checkbox-container" onClick={() => setUpperCaseChecked(!upperCaseChecked)}>
              <div className="checkbox-field">{upperCaseChecked ? <FontAwesomeIcon icon={faCheck} className="icon" /> : null}</div>
              <p>upper case</p>
            </div>

            <div className="checkbox-container" onClick={() => setSpecialSymbolsChecked(!specialSymbolsChecked)}>
              <div className="checkbox-field">{specialSymbolsChecked ? <FontAwesomeIcon icon={faCheck} className="icon" /> : null}</div>
              <p>special symbols</p>
            </div>
            <div className="checkbox-container" onClick={() => setNumberChecked(!numbersChecked)}>
              <div className="checkbox-field">{numbersChecked ? <FontAwesomeIcon icon={faCheck} className="icon" /> : null}</div>
              <p>numbers</p>
            </div>
          </div>
        </div>
        <div className="info-container about-container">
          <div className="image"></div>
          <div className="text-block">
            <h2>What is a password generator?</h2>
            <p>
              A password generator is a tool that automatically generates strong, secure passwords. With its help, you don’t need to come up
              with your own passwords ever again.
            </p>
            <p>
              A single mouse click will generate you a sequence of random symbols. Copy and use it as a password for your device, email,
              social media account, or anything else that requires restricted access.
            </p>
            <p>
              Also, don’t use the same password for more than one account. Each time you need to sign up, create a new password using this
              free password generator. In this way, your data will be safer than ever before.
            </p>
          </div>
        </div>
        <div className="info-container how-it-works-container">
          <div className="text-block">
            <h2>How does our password generator tool work?</h2>
            <p>
              To create a truly unique character combination, this online password generator tool goes through random sequences of 26
              uppercase letters, 26 lowercase letters, 10 numeric digits, and 32 special symbols. The result is a unique
              <span>12-character</span>
              sequence. This number of characters makes your future password downright unbreakable taking 1.4 billion years for a
              brute-force attack to crack it.
            </p>
            <p>
              This free password generator is compatible with Windows, Linux, and Mac operating systems, as well as with Android and iOS
              devices.
            </p>
          </div>
          <div className="image"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
