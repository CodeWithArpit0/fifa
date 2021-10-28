import { NavLink, useLocation } from "react-router-dom";
import { Radar } from "react-chartjs-2";
import { BsArrowLeftShort, BsQuestion } from "react-icons/bs";
import Loader from "./Loader";

export default function Profile() {
const {playerDetails} = useLocation();

  const options = {
    scale: {
      ticks: { beginAtZero: true },
    },
  };

  if(!playerDetails){
    return <Loader/>
  }
  
  return (
    <section className="profile-component">
      <div className="profile-container">
        <div className="navbar-container">
          <div className="nav-links">
            <nav className="navbar">
              <ul>
                <li>
                  <NavLink exact className="nav-link" to="/">
                    <BsArrowLeftShort className="nav-icon" />
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink exact className="nav-link" to="/">
                    <BsQuestion className="nav-icon" />
                    Help
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="player-name">
            <p>{playerDetails.Name}</p>
          </div>
        </div>

        <div className="player-details">
          <div className="chart-container">
            <div className="chart">
              <Radar data={{
                labels: [
                  "Crossing",
                  "Finishing",
                  "Overall",
                  "ShortPassing",
                  "Volleys",
                  "Age",
                ],
                datasets: [
                  {
                    label: playerDetails.Name,
                    data: [playerDetails.Crossing, playerDetails.Finishing, playerDetails.Overall, playerDetails.ShortPassing, playerDetails.Volleys, playerDetails.Age],
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    borderWidth: 1,
                  },
                ],
              }} options={options} />
            </div>
          </div>

          <div className="middle-line"></div>

          <div className="details-container">
            <div className="btn-container">
              <button>Overall {playerDetails.Overall}</button>
              <button>Potential 91</button>
            </div>

            <div className="details-box">
              <div className="">
                Age <span>{playerDetails.Age}</span>
              </div>
              <div className="">
                Club <span>{playerDetails.Club}</span>
              </div>
              <div className="">
                Height <span>{playerDetails.Height}</span>
              </div>
              <div className="">
              Heading Accuracy <span>{playerDetails.HeadingAccuracy}</span>
              </div>
              <div className="">
            Nationality <span>{playerDetails.Nationality}</span>
              </div>
              <div className="">
              Preferred Foot <span>{playerDetails["Preferred Foot"]}</span>
              </div>
              <div className="">
              Position <span>{playerDetails.Position}</span>
              </div>
              <div className="">
              Jersey Number <span>{playerDetails["Jersey Number"]}</span>
              </div>
              
              <div className="">
                Weight <span>{playerDetails.Weight}</span>
              </div>
              <div className="">
              Work Rate (Attack - Defense) <span>{playerDetails["Work Rate"]}</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
