

async function yelpSearch(searchTerms, location, sortBy='best_match'){
  const yelpApiKey = process.env.REACT_APP_YELP_API_SECRET;
  const withCorsAnywhere = process.env.REACT_APP_USE_CORS_ANYWHERE == 'TRUE';
  const yelpBaseUrl = `${withCorsAnywhere ? 'https://cors-anywhere.herokuapp.com/' : '' }https://api.yelp.com/v3`;

  if(!(sortBy==='best_match' || sortBy === 'rating' || sortBy === 'review_count')){
    console.log('Wrong parameters set for sortBy yelp search.' )
    console.log(`${searchTerms} - ${location} - ${sortBy}`);
    return [];
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
      console.log(jsonResults);
      const businesses = jsonResults.businesses;
      console.log(businesses);
      return businesses;
    }
    throw new Error('Something went wrong')
  }catch(error){
    console.log(error);
  }
}

export default yelpSearch;