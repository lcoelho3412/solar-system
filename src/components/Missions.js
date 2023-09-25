import React from "react";
import Title from "./Title";
import missions from "../data/missions";
import MissionCard from "./MissionCard";

class Missions extends React.Component {
  render() {
    return (
      <html data-theme="dark">
        <div data-testid="missions">
          <Title classe="titulo" headline="Missões" />
          <ul className="missionList">
            {missions.map((elem) => (
              <li key={elem.name}>
                <MissionCard
                  name={elem.name}
                  year={elem.year}
                  country={elem.country}
                  destination={elem.destination}
                />
              </li>
            ))}
          </ul>
        </div>
      </html>
    );
  }
}

export default Missions;
