import scores from '../data/score-records.json';
import './styles/App.css';

function SearchInput({inputVal, setError, setEmployeeId, setCommScore, setCodingScore, setTitle, setCompanyId, setInputVal}) {

    let findEmpoyee = (json) => {
        if (!inputVal) {
            setError('Cannot be empty')
            return
        }
        for (let i = 0; i < json.length; i++) {
            if ((json[i].candidate_id).toString() === inputVal) {
                setEmployeeId(json[i].candidate_id)
                setCommScore(json[i].communication_score);
                setCodingScore(json[i].coding_score);
                setTitle(json[i].title);
                setCompanyId(json[i].company_id);
                setError(false);
                break
            } else {
                setError('That employee ID is not in our system');
            }
        };
    };

    return (
        <div className='wrapper'>
            <h1>Simple Fractal</h1>
            <h3>Benchmark Portal</h3>
            <p>Enter your employee ID to see where you stand amongst other candidates</p>
            <label>Employee ID</label>
            <input
                id='originInput'
                type='text'
                placeholder='Empoyee ID'
                name='employeeId'
                required
                value={inputVal}
                onChange={(event) => setInputVal(event.target.value)}
            >
            </input>
            <button
                onClick={() => findEmpoyee(scores)}
            >Submit</button>
        </div>
    )
}

export default SearchInput;
