// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {

  const yelpApiKey = process.env.REACT_APP_YELP_API_SECRET;
  const yelpBaseUrl = 'https://api.yelp.com/v3';
  
  const sortBy = event.queryStringParameters.sort_by;
  const searchTerms = event.queryStringParameters.term;
  const location = event.queryStringParameters.location;

  if(!(sortBy==='best_match' || sortBy === 'rating' || sortBy === 'review_count')){
    return { statusCode: 500, body: 'Sort by needs to be one of the expected values (best_match, rating, review_count) ' };
  }
  
  const endpoint= '/businesses/search';
  const config = {
    headers:{
      Accept: 'application/json',
      Authorization: `Bearer ${yelpApiKey}`
    }
  }
  const requestParams = `?term="${searchTerms}"&location=${location}&sort_by=${sortBy}`;
  const url = `${yelpBaseUrl}${endpoint}${requestParams}`
  
  try{
    const results = await fetch(url, config);
    if(results.ok){
      const jsonResults = await results.json()
      const businesses = jsonResults.businesses;
      return {
        statusCode: 200,
        body: JSON.stringify({businesses: businesses}),
      };
    }
    
    throw new Error('Something went wrong');
   
  }catch(error){
    return { statusCode: 500, body: error.toString() };
  }
}

module.exports = { handler }
