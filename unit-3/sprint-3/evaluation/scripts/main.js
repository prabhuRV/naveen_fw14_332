async function apiCall(url) {

   let response = await fetch(url)
    
    let data = await response.json()
   return (data.articles) 

}


function appendArticles(articles, main) {

    //add append logic here

}

export { apiCall, appendArticles }