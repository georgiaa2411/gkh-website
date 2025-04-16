import { useState } from 'react'
import './App.css'
import Slideshow from './Slides'


const App = () => {
  const [visibleContainer, setVisibleContainer] = useState(null); 

  const toggleContainer = (containerId) => {
    setVisibleContainer(visibleContainer === containerId ? null : containerId); 
  };

  return (
    <>
      <div>
        <p className='webtitle'>gkhill.co.uk</p>
      </div>

      <h1>Georgia's legal research</h1>

      <div className="three-buttons-container">
        <button onClick={() => toggleContainer(1)}>
          {visibleContainer === 1 ? "...phd research" : "...phd research"}
        </button>

        <button onClick={() => toggleContainer(2)}>
          {visibleContainer === 2 ? "...latest projects" : "...latest projects"}
        </button>

        <button onClick={() => toggleContainer(3)}>
          {visibleContainer === 3 ? "...wider experience" : "...wider experience"}
        </button>

        {visibleContainer === 1 && (
          <div className="container">
            <b>Thesis title: How should the law distinguish between personal and non-personal data for the purposes of accessing connected and automated vehicle ("CAV") data?</b>
            <p>Focusing on data protection law and CAV technologies, this research brings together two but important legal issues: the categorisation of data within the law, and accessing CAV data in a liability and insurance context.</p>
            <p>Ultimately, this research argues that the categorisation of data in the law needs to move away from the human-orientated paramaters of 'personal' and 'non-personal' data.</p>
            <p>Improved categorisation will, in turn, facilitate appropriate and feasible data access regimes for the CAV industry. Addressing data access governance is imperative for CAV technologies given the increasing tensions between manufacturers and insurers for using CAV data for incident liability.</p>
          </div>
        )}

        {visibleContainer === 2 && (
          <div className="container">

            <b>Please check later for more updates!</b> 
           
            <p>****</p>

            <p className='subtitle'>April 2025</p>
            <b>New Website.</b>
            <p>Upon taking coding and technology workshops to assist with my research, I have also coded my own website. Any feedback on the display or operation of my website is welcomed.</p>
           
            <p>***</p>

            <p className='subtitle'>September 2024</p>
            <b>PhD Research at the University of Exeter!</b>
            <p>From September 2024, I will be based at the University of Exeter to complete my PhD research in data protection law and connected and automated vehicles.</p>
            
          </div>
        )}

        {visibleContainer === 3 && (
          <div className="container">
            <b>Prior to my PhD...</b>
            <p>Having spent my childhood in the Southwest of England, I relocated to Nottingham to complete my undergraduate law degree.</p>
            <p>I then returned to the Southwest to complete my postgraduate law degree at Exeter on a part-time basis whilst also working within private client law. It was during this time that I gained inspiration for my thesis topic.</p>
            <p>Today, I remain at the University of Exeter, having recieved funding from the University to carry out my PhD research.</p>
            <b>As well as my PhD...</b>
            <p>Outside of academia, I am part of my local women's football team and enjoy visiting my local beaches!</p>
          </div>
        )}
     </div>

      <div className='photo-container'>
        <Slideshow></Slideshow>
      </div>
      <div className='photo-description'>
        <p>Image descriptions: beach and blue sky (image 1); sheep in a field (image 2); beach sunset (image 3).</p>
      </div>

      <div>
        <button>
          <a href="https://experts.exeter.ac.uk/44506-georgia-hill" target="_blank" rel="noopener noreferrer">email</a>
        </button>
        <button>
            <a href="https://uk.linkedin.com/in/georgia-hill-6177891b2" target="_blank" rel="noopener noreferrer">linkedin</a>
        </button>
      </div>
       
      <footer className="footer">
        Copyright: Georgia Hill.
      </footer>
    </>
  )
}

export default App
