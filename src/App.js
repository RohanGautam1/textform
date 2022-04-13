import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextBox from './components/TextBox';
import Alert from './components/Alert';
import { useState } from 'react';
import { Routes ,Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');//Whether dark mode is enabled or not
  const [btnText, setbtnText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#0c0e33';
      setbtnText('Enable Light Mode');
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextForm - Dark Mode';

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      setbtnText('Enable Dark Mode');
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextForm - Light Mode';

    }
  }

  const colored = () => {
    document.body.style.backgroundColor = 'grey';
    showAlert('Grey mode has been enabled', 'success');
    document.title = 'TextForm - Grey Mode';

  }
  const coloredBlue = () => {
    document.body.style.backgroundColor = '#87CEEB';
    showAlert('Sky mode has been enabled', 'success');
    document.title = 'TextForm - Sky Mode';

  }

  return (
    
    
     
        // <Navbar title = "Textform2" about = "About us"/> 
        // <Navbar/> 
       <>

       
       
       <Navbar title="Textform2" mode={mode} toggleMode={toggleMode} btnText={btnText} colored={colored} coloredBlue={coloredBlue} />
      <Alert alert={alert} />
      <div className="container">
          <Routes>
          <Route exact path="/" element={<TextBox heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
        
      </>
  );
} 

export default App;
