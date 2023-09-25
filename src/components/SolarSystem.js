import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <html data-theme='dark'>

      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((planet) => (
          <PlanetCard
            planetName={ planet.name }
            planetImage={ planet.image }
            planetDescription={planet.description}
            key={ planet.name }
          />
        ))}
      </div>
      </html>
    );
  }
}

export default SolarSystem;
