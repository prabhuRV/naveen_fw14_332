async function apiCall(url) {

   let response = await fetch(url)
    
    let data = await response.json()
   return (data.articles) 

}


function appendArticles(articles, main) {

    map.articles( (elem) => {

        let div = document.createElement('div');

        let con = document.createElement('p');
        con.textContent= elem.content;
        
        let desc = document.createElement('p');
        desc.textContent = elem.description;

        let img = document.createElement('img');
        img.src = elem.image;

        div.append(con,desc,img)
        main.append(div)

    })

}

export { apiCall, appendArticles }