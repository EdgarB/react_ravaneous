

async function yelpSearchWithNetlifyFunc(searchTerms, location, sortBy='best_match'){
  const baseUrl = "/.netlify/functions/fetch-yelp-search";
  const requestParams = `?term="${searchTerms}"&location=${location}&sort_by=${sortBy}`;
  const url = `${baseUrl}${requestParams}`
  
  try{
    const results = await fetch(url);
    if(results.ok){
      const jsonResults = await results.json()
      const businesses = jsonResults.businesses;
      return businesses;
    }
    throw new Error('Something went wrong')
  }catch(error){
    console.log(error);
  }
}

export default yelpSearchWithNetlifyFunc;