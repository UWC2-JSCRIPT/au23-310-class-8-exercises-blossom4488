// create api-key.js file with const API_KEY="your_api_key" in this same directory to use/ create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${topic}&api-key=${API_KEY}`;
const API_KEY = "BLuVnPPyDw7ZCszDeiAoYoGLFzXnPhd9";
const url = `${BASE_URL}?q=tech&api-key=${API_KEY}`;
topic = "cars";
const asyncFetch = async function () {
  try {
    const data = await fetch(url);
    const dataJson = await data.json();
    console.log("Asynce/Await func", data);
    console.log("Asynce/Await func", dataJson);
  } catch (err) {
    console.log(err);
  }
};

fetch(url)
  .then(function (data) {
    return data.json();
  })
  .then(function (responseJson) {
    console.log(responseJson);

    let article = responseJson.response.docs[0];
    console.log(article);

    const mainHeadline = article.headline.main;
    document.getElementById("article-title").innerText = mainHeadline;
    const getSnippet = article.snippet;
    document.getElementById("article-snippet").innerText = getSnippet;
    const getByLine = article.byline.original;
    document.getElementById("byline-original").innerText = getByLine;
    const getFullLink = article.web_url;
    document
      .getElementById("article-link")
      .setAttribute("href", `${getFullLink}`);

    if (article.multimedia.length > 0) {
      const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
      document.getElementById("article-img").src = imgUrl;
    }
  });
