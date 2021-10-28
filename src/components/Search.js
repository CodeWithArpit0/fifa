import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import fifaLogo from "../images/fifa-logo.png";
import fifaImg from "../images/fifa-img.png";
import useFetch from "../hooks/useFetch";

export default function Search() {
  const [Suggestions, setSuggestions] = useState([]);

  // ** Fetching player data
  const playerData = useFetch();
  console.log(playerData);
  // ** Function to close and open suggestion box
  const toggleSuggestions = (display) => {
    let SuggestionBox = document.getElementById("suggestions-box");
    SuggestionBox.style.display = `${display}`;
  };

  /* 
   Function to show suggestions to the user 
  according to the user input
  */
  const getPlayerData = (value) => {
    /*
      If use entered only spaces in search input
      than no filtering will be performed
    */
    if (value.replace(/\s/g, "").length) {
      let SuggestionList = document.getElementById("suggestion-list");
      // ** Clearing the old suggestions after every keyup
      SuggestionList.innerHTML = "";

      playerData.filter((player) => {
        /*
          Filtering the players by player's NAME , AGE, CLUB, NATIONALITY
        */
        if (
          player.Name.toLowerCase().includes(value.toLowerCase()) ||
          player.Age === value ||
          player.Club.toLowerCase().includes(value.toLowerCase()) ||
          player.Nationality.toLowerCase().includes(value.toLowerCase())
        ) {
          toggleSuggestions("block");
          setSuggestions([...Suggestions, player]);
          // SuggestionList.innerHTML += `<li><button onclick="playerChoice(this.value)">${Name}</button></li>`;
        }
      });
    } else {
      toggleSuggestions("none");
    }
  };

  return (
    <section className="search-component">
      <div className="search-box">
        <div className="content">
          <div className="logo-box">
            <img src={fifaLogo} alt="fifa-logo" className="fifa-logo" />
          </div>

          <div className="search-container">
            <form>
              <div className="search-field">
                <input
                  type="text"
                  placeholder="Search Player"
                  className="player-search"
                  onKeyUp={(e) => getPlayerData(e.target.value)}
                />
                <button type="submit" className="player-search">
                  <BiSearchAlt className="search-icon" />
                  Search
                </button>
              </div>
            </form>

            <div id="suggestions-box" className="suggestions">
              <ul id="suggestion-list">
                {Suggestions.map((suggestion, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        exact
                        className="nav-link"
                        to={{
                          pathname: `/profile/${suggestion.Name}`,
                          playerDetails: suggestion,
                        }}
                      >
                        {suggestion.Name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="fifa-img">
          <img src={fifaImg} alt="fifa-logo" className="fifa-logo" />
        </div>
      </div>
    </section>
  );
}
