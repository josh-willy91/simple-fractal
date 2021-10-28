

# Simple Fractal Technical Assessment
## Date 10/27/2021

## To run app
- If file is zipped, unzip then cd into simple-fractal directory
- Otherwise just cd into simple-fractal directory
- install depedencies with 'npm install'
- run app with 'npm start'
- Navigate to localhost:3000 to see in browser
- See requirements.md for assessment rules and guildlines

## Notes & Reflections
- I used create-react-app as my starter.  I spent some time thinking over how to go about this assignment.  I did not feel this project warranted a back end so I did all my data manipulation on the front end.  If this were a production level app with larger data sets and more to it then I would have built out a full stack application or gone with an AWS serverless app.
- Regarding the CSV files, I originally wanted to query the data using fetch or axios. However, I ran into a CORS error when making a fetch to the s3 bucket which the CSV files were located.  I ended up just making a data folder on the front end and converting the CSV files into json for ease of use.
- Instead of just calculating the percentile for those with roles as 'Engineer', I just made the percentile calculate the percentile for those that matched their job title so you can see 'senior engineer' percentiles as well.  It will just rank the senior engineers amongst other senior engineers.  I really wanted to put in a chart but thought that was getting carried away lol.
- One final note is that I did not write any tests for this app. I have some exposure to writing tests though it is limited.  I honestly just ran out of time.  I was happy with my error handling however for the input field.

### Thank you for your consideration! I really enjoyed this assessment :)
