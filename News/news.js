const apiKey = "e327e7b8e4574965a6685a2d58530a0d";
const news = document.getElementById("news-container");
const menu=document.getElementById("menu");
const contact=document.getElementById("email")
const next=document.getElementById("next")
let i=0,j=9;
async function fetchNews(choice="business") {
    try {
        const response=await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${choice}&apiKey=${apiKey}`)
        const data = await response.json();

        if (data.status === 'ok') {
            news.innerHTML=''
            const articles = data.articles.slice(i, j);

            articles.forEach(article => {
                const articleElement = createArticleElement(article);
                news.appendChild(articleElement);
            });
        } else {
            console.error('Error fetching news:', data.message);
        }
    } catch (error) {
        console.error('Error fetching news:', error);
    }
    
}
function createArticleElement(article) {
    const articleElement = document.createElement('div');
    articleElement.classList.add('article');

    const titleElement = document.createElement('h2');
    titleElement.textContent = article.title;

    const imageElement = document.createElement('img');
    imageElement.src = article.urlToImage;
    imageElement.alt = article.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = article.description;

    const sourceElement = document.createElement('p');
    sourceElement.textContent = `Source: ${article.source.name}`;

    const link = document.createElement('a');
    link.className="btn-dark";
    link.setAttribute("target", "_blank");
    link.href = article.url;
    link.innerHTML="Read more";

    articleElement.appendChild(titleElement);
    articleElement.appendChild(imageElement);
    articleElement.appendChild(descriptionElement);
    articleElement.appendChild(sourceElement);
    articleElement.appendChild(link);

    return articleElement;
}
menu.addEventListener("change",()=>{
    const val=menu.value
    console.log(val)
    i=0
    j=9
    fetchNews(val)
})

fetchNews()
next.addEventListener("click",()=>{
    i=j
    j=j*2
    fetchNews(menu.value)
    window.scrollTo({
        top:0,
        behavior:"smooth"  
    })
})
contact.addEventListener("click",()=>{
    var mailtoLink = "mailto:jayanthariharan98@gmail.com";
    window.location.href = mailtoLink;
})