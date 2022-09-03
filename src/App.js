import { Container } from '@mui/material';
import './App.css';
import ContinuousSlider from './Slider';

function App() {
  return (
    <Container className="App" sx={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <ContinuousSlider />
    </Container>
  );
}

export default App;
