import { articlesArray, newArticlesArray } from "./data.js"

const articleFeed = document.querySelector(".article-feed")
const viewMoreArticles = document.querySelector(".view-more-articles")
const viewMoreBtn = document.querySelector(".view-more-btn")
const viewLessBtn = document.querySelector(".view-less-btn")


const renderArticles = () => {
    let renderFeed = ''
   const articles = [...articlesArray]

    articles.forEach((article) => {
        renderFeed += `
        <article class="article-featured">
        <div class="article-recent-secondary article-flex-container">
            <img src="${article.img}" alt="${article.alt}" class="article-image article-image-container" width="320" height="300">
            <p class="article-info"><time datetime="${article.datetime}">${article.date}</time> | ${article.comments} comments</p>
            <h2 class="article-title">${article.title}</h2>
            <p class="article-description">${article.description}</p>
            <a href="./${article.source}" class="article-read-more article-read-more__black">CONTINUE READING</a>
        </div>
        </article>
        `
    });

    articleFeed.innerHTML = renderFeed
} 

const moreArticles = () => {
    const newArticles = [...newArticlesArray]
    let renderFeed = ''

    newArticles.forEach((article) => {
        renderFeed += `
        <article class="article-featured">
        <div class="article-recent-secondary article-flex-container">
            <img src="${article.img}" alt="${article.alt}" class="article-image article-image-container" loading="lazy" width="320" height="300">
            <p class="article-info"><time datetime="${article.datetime}">${article.date}</time> | ${article.comments} comments</p>
            <h2 class="article-title">${article.title}</h2>
            <p class="article-description">${article.description}</p>
            <a href="./${article.source}" class="article-read-more article-read-more__black">CONTINUE READING</a>
        </div>
        </article>
        `
    });

    viewMoreArticles.innerHTML = renderFeed
}

viewMoreBtn.addEventListener("click", () => {
    moreArticles()
    viewMoreArticles.style.display = "grid"
    viewMoreBtn.style.display = "none"
    viewLessBtn.style.display = "block"
})

viewLessBtn.addEventListener("click", () => {
    viewMoreBtn.style.display = "block"
    viewLessBtn.style.display = "none"
    viewMoreArticles.style.display = "none"
    
})

renderArticles()
moreArticles()
