import logo from './logo.svg';
import Radium from 'radium';
import styles from './styles.js';

function App() {
  return (
    <div style={styles.app}>
      <header style={styles.appHeader}>
        <img src={logo} style={styles.appLogo} alt="logo" />
        <p>
          Sample React app 
          Demo is great
        </p>
      </header>
    </div>
  );
}

export default Radium(App);
