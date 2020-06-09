

const getSearchResults = (queryString) => {

    fetch("https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=" + encodeURI(queryString) + "&limit=5").
    
    then((response) => {
        //console.log("IN then" + response.json());
        return response.json()})
    .catch(
            (error) => console.log("In error" + error))
        
        
}

export default getSearchResults;

