import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Destination from './components/Destination';
import HomePage from './components/HomePage';
import Moon from './components/pages/Moon';
import Mars from './components/pages/Mars';
import Europa from './components/pages/Europa';
import Titan from './components/pages/Titan';
import Crew from './components/Crew';
import Commander from './components/CrewPage/Commander';
import Mission from './components/CrewPage/Mission';
import Pilot from './components/CrewPage/Pilot';
import Flight from './components/CrewPage/Flight';
import Technology from './components/Technology';
import SpacePort from './components/Techpages/SpacePort';
import Capsule from './components/Techpages/Capsule';
import Lanchvehicle from './components/Techpages/Lanchvehicle';



function App() {
  return (
   
     <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/Destination' Component={Destination} />
        <Route path='/pages/Moon' Component={Moon} />
        <Route path='/pages/Mars' Component={Mars}/> 
        <Route path='/pages/Europa' Component={Europa}/> 
        <Route path='/pages/Titan' Component={Titan}/>
        <Route path='/Crew' Component={Crew} /> 
        <Route path='/CrewPage/Commander' Component={Commander} /> 
        <Route path='/CrewPage/Mission' Component={Mission} /> 
        <Route path='/CrewPage/Pilot' Component={Pilot} /> 
        <Route path='/CrewPage/Flight' Component={Flight} /> 
        <Route path='/Technology' Component={Technology} />
        <Route path='Techpages/Lanchvehicle' Component={Lanchvehicle} />
        <Route path='/Techpages/SpacePort' Component={SpacePort} />  
        <Route path='/Techpages/Capsule' Component={Capsule} />
        </Routes>
    </BrowserRouter>
     </div>
  
  );
}


export default App;
