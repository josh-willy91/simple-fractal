import { useEffect, useState } from 'react';
import './styles/App.css';
import companies from '../data/companies.json';
import scores from '../data/score-records.json';
import TableData from './TableData';
import SearchInput from './SearchInput';

function App() {

  const [error, setError] = useState(false);
  const [inputVal, setInputVal] = useState();

  const [employeeId, setEmployeeId] = useState();
  const [commScore, setCommScore] = useState();
  const [codingScore, setCodingScore] = useState();
  const [title, setTitle] = useState();
  const [companyId, setCompanyId] = useState();

  const [codingPerc, setCodingPerc] = useState();
  const [commPerc, setCommPerc] = useState();

  useEffect(() => {
    if(employeeId) {
      setCommPerc(findCommPerc(employeeId))
      setCodingPerc(findcodingPerc(employeeId))
    };
  },[employeeId])


  // Will find all companies that are within .15 of the fractal score the candidate works at
  let findLikeCompanies = (companyId) => {
    // start with an array with the candidates own company
    let likeCompanies = [companyId];
    let fractalScore = 0;

    // finds the candiates company and sets its fractal index
    companies.forEach((ele) => {
      if(ele.company_id === companyId) {
        fractalScore = ele.fractal_index;
      }
    })

    // loop through companies to find others with similar fractal index
    for(let i = 0; i < companies.length; i++) {
      if(companyId === companies[i].company_id) {
        continue
      } else if(Math.abs(companies[i].fractal_index - fractalScore) < .15) {
        // if similar fractal then push into array
        likeCompanies.push(companies[i].company_id)
      }
    }
    return likeCompanies
  }

  // finds where the candidate's communication percentile amongst other like candidates is
  let findCommPerc = (employeeId) => {
    let total = 0;
    let numBelow = 0;
    let similarFractal = findLikeCompanies(companyId)

    for(let i = 0;  i < scores.length; i++) {
      if(employeeId === (scores[i].candidate_id)) {
        total++
        continue
      } else if(similarFractal.includes(scores[i].company_id) && scores[i].title === title) {
        total++
        if(commScore > scores[i].communication_score) {
          numBelow++
        }
      } else if(similarFractal.includes(scores[i].company_id) && scores[i].title === title) {
        total++
        if(commScore > scores[i].communication_score) {
          numBelow++
        }
      }
    }
    // formula for percentile is numberBelowCandidate/totalNumber*100 set to 2 decimal points
    if(numBelow === (total - 1)) return 100;
    return ((numBelow/total)*100).toFixed(2)
  }

    // finds where the candidate's coding percentile amongst other like candidates is
    let findcodingPerc = (employeeId) => {
      let total = 0;
      let numBelow = 0;
      let similarFractal = findLikeCompanies(companyId)

      for(let i = 0;  i < scores.length; i++) {
        if(employeeId === (scores[i].candidate_id)) {
          total++
          continue
        } else if(similarFractal.includes(scores[i].company_id) && (scores[i].title === title)) {
          total++
          if(codingScore > scores[i].coding_score) {
            numBelow++
          }
        } else if(similarFractal.includes(scores[i].company_id) && (scores[i].title === title)) {
          total++
          if(codingScore > scores[i].coding_score) {
            numBelow++
          }
        }
      }
      // formula for percentile is numberBelowCandidate/totalNumber*100 set to 2 decimal points
      if(numBelow === (total - 1)) return 100;
      return ((numBelow/total)*100).toFixed(2)
    }


  return (
    <div className="App">
      <SearchInput inputVal={inputVal} setError={setError} setEmployeeId={setEmployeeId} setCommScore={setCommScore}
        setCodingScore={setCodingScore} setTitle={setTitle} setCompanyId={setCompanyId} setInputVal={setInputVal} />
      <TableData error={error} employeeId={employeeId} commScore={commScore}
        codingScore={codingScore} title={title} companyId={companyId}
        commPerc={commPerc} codingPerc={codingPerc}
      />
    </div>
  );
}

export default App;
