import { useEffect, useState } from 'react';
import './App.css';

function App() {


  const [codingPerc, setCodingPerc] = useState();

  useEffect(() => {


  }, []);


  return (
    <div className="App">
      <div>
        <h1>Simple Fractal</h1>
        <h3>Benchmark Portal</h3>
        <p>Enter your employee ID to see where you stand amongst other candidates</p>
        <label>Employee ID</label>
        <input
          id = 'originInput'
          type='text'
          placeholder='Empoyee ID'
          // name='origin'
          required
          // value={origin}
          // onChange={updateOrigin}
        >
        </input>
        <button>Submit</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Communication Score</th>
              <th>Coding Score</th>
              <th>Job Title</th>
              <th>Communication Percentiles</th>
              <th>Coding Percentiles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>4104210</td>
              <td>8</td>
              <td>10</td>
              <td>Junior Engineer</td>
              <td>85%</td>
              <td>99%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
