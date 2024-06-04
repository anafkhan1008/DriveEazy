"use client"
import { useState } from 'react';
import { redirect } from 'next/navigation'



const Autofinish = ({ suggestions, onChange }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState('');

  const onInputChange = (e) => {
    const userInput = e.target.value;
    setInput(userInput);
    onChange(userInput);

    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    ).slice(0, 6);

    setFilteredSuggestions(filteredSuggestions);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const show = (value) => {
    window.location.href = `/drivingSchool/${value}`;
  }
  



  const onClick = (e) => {
    setInput(e.target.innerText);
    onChange(e.target.innerText);
    setFilteredSuggestions([]);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
    show(e.target.innerText)
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      console.log("enter clicked")
      setInput(filteredSuggestions[activeSuggestionIndex]);
      onChange(filteredSuggestions[activeSuggestionIndex]);
      show(filteredSuggestions[activeSuggestionIndex]);
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
      
    } else if (e.keyCode === 38) {
      if (activeSuggestionIndex === 0) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    } else if (e.keyCode === 40) {
      if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    }
  };

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ul className="absolute border border-gray-300 w-full bg-white z-10">
        {filteredSuggestions.map((suggestion, index) => {
          let className = 'text-black bg-white'; // Default styles
          if (index === activeSuggestionIndex) {
            className = 'bg-indigo-500 text-white';
          }
          return (
            <li
              className={`p-2 cursor-pointer ${className}`}
              key={suggestion}
              onClick={onClick}
            >
              {suggestion}
            </li>
          );
        })}
      </ul>
    ) : (
      <div className="p-2 text-gray-500">No suggestions available.</div>
    );
  };

  return (
    <div className="relative">
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
        className="border border-gray-300 p-2 w-full"
      />
      {showSuggestions && input && <SuggestionsListComponent />}
    </div>
  );
};

export default Autofinish;