import { recentPostsArray } from "./data.js"

const recentArticlesFeed = document.querySelector(".recent-articles-feed")

const recentPosts = () => {
    let renderFeed = ''
    const recentArticles = [...recentPostsArray]

    recentArticles.forEach((article) => {
        renderFeed += `
        <article class="article-featured">
        <div class="article-recent-secondary article-flex-container">
            <img src="../${article.img}" alt="${article.alt}" class="article-image article-image-container" loading="lazy" width="320" height="300">
            <p class="article-info"><time datetime="${article.datetime}">${article.date}</time> | ${article.comments} comments</p>
            <h2 class="article-title">${article.title}</h2>
            <p class="article-description">${article.description}</p>
            <a href="../${article.source}" class="article-read-more article-read-more__black">CONTINUE READING</a>
        </div>
        </article>
        `
    });

    recentArticlesFeed.innerHTML = renderFeed
}

recentPosts()