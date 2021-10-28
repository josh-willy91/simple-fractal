



function TableData({error, employeeId, commScore, codingScore, title, companyId, commPerc, codingPerc}) {


    return (
        <div>
            {!error ?
                <table>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Communication Score</th>
                            <th>Coding Score</th>
                            <th>Job Title</th>
                            <th>Company ID</th>
                            <th>Communication Percentiles</th>
                            <th>Coding Percentiles</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{employeeId}</td>
                            <td>{commScore}</td>
                            <td>{codingScore}</td>
                            <td>{title}</td>
                            <td>{companyId}</td>
                            <td>{commPerc}</td>
                            <td>{codingPerc}</td>
                        </tr>
                    </tbody>
                </table>
                :
                <p>{error}</p>
            }
        </div>
    )
};


export default TableData;
