import './App.css';
import dollarcoin from './assets/images/Vector.jpg';
import Persondollar from './assets/images/persondollar.png';
import Shieldhome from './assets/images/shieldhome.png';
import Shieldfire from './assets/images/shieldfire.png';
import Handspanner from './assets/images/handspanner.png';
import Dollarbag from './assets/images/moneybag.png';
import Shielddollar from './assets/images/shielddollar.png';
import Handperson from './assets/images/handperson.png';
import Lock from './assets/images/lock.png';
import Aeroplane from './assets/images/aeroplane.png';
import Buildingfire from './assets/images/buildingfire.png';
import Person from './assets/images/contractorshield.png';
import Marinecargo from './assets/images/Marinecargo.png';
import Hands from './assets/images/twohands.png';
import Smiley from './assets/images/smileys.png';
import Congress from './assets/images/congress.png';
import Welcome from './assets/images/welcome.png';
import Card from './assets/images/card.png';

import Commoncardone from './commoncardone';
import Commoncardtwo from './commoncardtwo';
import './commoncardone.css';
import './commoncardtwo.css';

const Arrayforcards = [{Titlename:'Public Liability Insurance', Imagename:Persondollar, Nameforid:'publicliability' }, {Titlename:'Property Insurance: All Risk', Imagename:Shieldhome, Nameforid:'propertyinsurance'}, {Titlename:'Property Insurance: Fire And Additional Perils', Imagename:Shieldfire, Nameforid:'fireadd'}, 
{Titlename:'Professional Indemnity Insurance for Stock Brokers', Imagename:Handspanner, Nameforid:'professionalind' }, {Titlename:'Money Insurance', Imagename:Dollarbag, Nameforid:'moneyins' }, {Titlename:'Fidelity Guarantee Insurance', Imagename:Shielddollar, Nameforid:'fidelity' },
{Titlename:'Crime Bond Insurance', Imagename:Handperson , Nameforid:'crimebond'},{Titlename:'Theft Insurance', Imagename:Lock, Nameforid:'theft'},{Titlename:'Business Travel Insurance', Imagename:Aeroplane,Nameforid:'business' },
{Titlename:'Sabotage & Terrorism Insurance', Imagename:Buildingfire, Nameforid:'sabotage' },{Titlename:'All Risks Insurance', Imagename:Person, Nameforid:'allrisks' },{Titlename:'Marine Cargo Insurance', Imagename:Marinecargo, Nameforid:'marine' }];

const Arrayforsecondsetcards = [{Titlename:'Boost Employee Retention', Imagename:Hands}, {Titlename:'Strengthen Employee Motivation', Imagename:Smiley},
{Titlename:'Enhance their Mental Wellbeing', Imagename:Congress},{Titlename:'Protect them from Severe Health Conditions', Imagename:Welcome}, {Titlename:'6400+ Cashless Hospitals', Imagename:Card}]

function App() {
  return (
    <div>
        <div className='financialpart'>
          <div className='subfinancialpart'>
      
              <div className='mainicon'><img src={dollarcoin} alt='dollar coin'></img></div>
              <div className='maintitle'>Financial<br></br> & Investment Insurance</div>
              <div className='borderline'><hr></hr></div>
              <div className='mainparapart'>
                  <div className='parapart'>We designed this collection of insurance products especially for the Financial Institution & Investment business to provide the appropriate protection to transact its activities safely.</div>
                  <div className='buttonone'><button className='getquote'>Get Quote</button></div>
              </div>
          </div>
        </div>
    
        <div className='cardsdivision'>
          {Arrayforcards.map(({Titlename,Imagename, Nameforid},index) => {
            return(
            <Commoncardone key={index} imagename={Imagename} titlename={Titlename} Idname={Nameforid} />
            );
          } )}
      
        </div>

        <div className='protectemployeepart'>

          <div className='bothpara'>

          <div className='whyproject'>Why protect your employees’ health <br></br> with a Health Insurance policy?</div>
          <div className='thesaudi'>The Saudi insurance pioneer, will help you to identify, analyze and manage such risks and suggest <br></br> appropriate insurance solutions.</div>
          
          </div>

          <div className='secondsetcards'>
            {Arrayforsecondsetcards.map(({Titlename,Imagename},index) => {
              return(
              <Commoncardtwo key={index} Imagename={Imagename} Titlename={Titlename} />
              );
            })}
          
          <div>

          </div>
          
          </div>

        </div>

    </div>
    
  );
}

export default App;
