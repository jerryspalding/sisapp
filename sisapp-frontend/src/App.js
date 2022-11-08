import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SundryItems from './components/SundryItems';

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
          SISApp (Stig Items Sample Application v0.0.3)
          </Typography>
        </Toolbar>
      </AppBar>
      <SundryItems />
    </div>
  );
}

export default App;
