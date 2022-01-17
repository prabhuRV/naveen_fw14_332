async function apiCall(url) {

   let response = await fetch(url)
    
    let data = await response.json()
   return (data.articles) 

}


function appendArticles(articles, mai) {

    articles.map( (elem) => {

        let div = document.createElement('div');
        div.onclick = ( ()=> {
            console.log(elem)
            let da = elem
           localStorage.setItem('article',JSON.stringify(da))
           window.location.href = 'news.html'
        })
        let con = document.createElement('p');
        con.textContent= elem.title;
        
        let desc = document.createElement('p');
        desc.textContent = elem.content;
        
        let img = document.createElement('img');
        img.src = elem.image;
        img.setAttribute('width','400px')
        img.setAttribute('height','400px')
        div.append(con,desc,img)
        mai.append(div)

    })

}

function showItem(data,hd,co,im){

     
      let tit = document.createElement('p');
      tit.textContent= data.title;
      hd.append(tit);

      let cont = document.createElement('p');
      cont.textContent = data.content;
      co.append(cont);

      let img = document.createElement('img');
      img.src = data.image;
      im.append(img)
}

export { apiCall, appendArticles }
export { showItem}