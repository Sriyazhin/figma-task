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
import Ithra from './assets/images/ithra.png';
import Tawuriyalogo from './assets/images/Tawuniya-Logo.png';
import Taj from './assets/images/Taj.png';
import Plus from './assets/images/plus.png';
import Orangearrow from './assets/images/orangearrow.png';

import Commoncardone from './commoncardone';
import Commoncardtwo from './commoncardtwo';
import Commoncardthree from './commoncardthree';

import './commoncardthree.css';
import './commoncardone.css';
import './commoncardtwo.css';
import './commoncardfour.css';
import Commoncardfour from './commoncardfour';


const Arrayforcards = [{Titlename:'Public Liability Insurance', Imagename:Persondollar, Nameforid:'publicliability' }, {Titlename:'Property Insurance: All Risk', Imagename:Shieldhome, Nameforid:'propertyinsurance'}, {Titlename:'Property Insurance: Fire And Additional Perils', Imagename:Shieldfire, Nameforid:'fireadd'}, 
{Titlename:'Professional Indemnity Insurance for Stock Brokers', Imagename:Handspanner, Nameforid:'professionalind' }, {Titlename:'Money Insurance', Imagename:Dollarbag, Nameforid:'moneyins' }, {Titlename:'Fidelity Guarantee Insurance', Imagename:Shielddollar, Nameforid:'fidelity' },
{Titlename:'Crime Bond Insurance', Imagename:Handperson , Nameforid:'crimebond'},{Titlename:'Theft Insurance', Imagename:Lock, Nameforid:'theft'},{Titlename:'Business Travel Insurance', Imagename:Aeroplane,Nameforid:'business' },
{Titlename:'Sabotage & Terrorism Insurance', Imagename:Buildingfire, Nameforid:'sabotage' },{Titlename:'All Risks Insurance', Imagename:Person, Nameforid:'allrisks' },{Titlename:'Marine Cargo Insurance', Imagename:Marinecargo, Nameforid:'marine' }];

const Arrayforsecondsetcards = [{Titlename:'Boost Employee Retention', Imagename:Hands}, {Titlename:'Strengthen Employee Motivation', Imagename:Smiley},
{Titlename:'Enhance their Mental Wellbeing', Imagename:Congress},{Titlename:'Protect them from Severe Health Conditions', Imagename:Welcome}, {Titlename:'6400+ Cashless Hospitals', Imagename:Card}];

const Arrayforthirdsetcards = [{Mainclass:'thirdcardsone',Textone:'Tawuniya',Classone:'ithra',Imageone:Ithra,Imageclassone:'ithraimage',Contentline:'Access to hundreds of exclusive offers, discounts and more'},
{Mainclass:'thirdcardstwo',Textone:'',Classone:'tawuniyalogo',Imageone:Tawuriyalogo,Imageclassone:'tawuniyaimage',Contentline:'Get 30% Off annual fitness time gym membership',Idforcontent:'membership'},
{Mainclass:'thirdcardsthree',Textone:'',Classone:'taj',Imageone:Taj,Imageclassone:'tajlogo',Contentline:'Special services and programmes to cover your needs',Idforcontent:'specialservice'},
]

const Arrayforfourthsetcards = ['What is insurance fraud?', 'What kind of people/Organizations commits insurance fraud?', 'What is fraud vs. Mistake?',
'What are some examples of insurance fraud/Abuse?', 'How does fraud impact you?', 'What are we doing to prevent fraud?', 'What is medical fraud unit?', 'Shall I get a reward for reporting medical insurance fraud?']

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
          
            </div>

          </div>

            <div className='planpart'>
              <div className='parapart'>
                <div className='nextlevel'>Take your plan to the next level!</div>
                <div className='additionalprogram'>Additional programs that will greatly improve your plan performance</div>
              </div>

              <div className='thirdsetcards'>
              {Arrayforthirdsetcards.map(({Imageone,Classone,Contentline,Imageclassone,Textone,Mainclass,Idforcontent},index) => {
                return(
                  <Commoncardthree key={index} Mainclass={Mainclass} Imageone={Imageone} Classone={Classone} 
                  Contentline={Contentline} Imageclassone={Imageclassone} Textone={Textone} Idforcontent={Idforcontent} />
                );
              })}
              </div>

            </div>
              <div className='questionspart'>
                <div className='parapart'>
                <div className='nextlevel'>You’ve got questions, we’ve got answers</div>
                <div className='additionalprogram'>Review answers to commonly asked questions at Tawuniya, which enable you to be directly involved in <br></br> improving our support experience.</div>
                <div className='forboxes'>
                  {Arrayforfourthsetcards.map((Contentlines,index) => {
                    return(
                    <Commoncardfour key={index} Contentlines={Contentlines} Plus={Plus} />
                    );
                  })}
                </div>
                <div className='viewallques'>
                  <div className='viewall'>VIEW ALL QUESTIONS</div>
                  <div className='fororangearrow'><img src={Orangearrow} alt='orangearrow'></img></div>
                </div>
                </div>
              </div>
        </div>
  );
}

export default App; 
