
import './App.css';

// import Chart1 from "./Chart1";
// import Chart2 from "./Chart2";
import Chart3 from "./Chart3";

const data1 = [12, 32, 15, 23, 10, 6, 31];
const data2 = [5, 10, 15, 20, 25, 30];
const data3 = [10, 5, 10, 5, 10, 5];

const w = 500;
const h = 400;


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Chart3 data={data1} w={w} h={h} color="red" />
        <Chart3 data={data2} w={w} h={h} color="orange" />
        <Chart3 data={data3} w={w} h={h} color="cyan" />

      </header>
    </div>
  );
}

export default App;
