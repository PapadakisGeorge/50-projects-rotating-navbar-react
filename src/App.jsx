import React, {useState} from 'react';
import Circle from './components/Circle/Circle';
import PageContent from './components/PageContent/PageContent';
import NavBar from './components/NavBar/NavBar';

import './App.scss';

const App = () => {
  const [isRotated, setRotated] = useState(false);

  const updateDome = () => {
    setRotated(!isRotated);
  }

  return ( 
    <div className="background">
      <div className={isRotated? 'container show-nav':'container'}>
        <Circle
          updateDome={updateDome}
        />
        <PageContent/>
      </div>
      <NavBar/>
    </div>
    )
}

export default App;