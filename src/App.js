import './App.css';

function App() {


  return (
    <div className="App">
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
  );
}

export default App;
