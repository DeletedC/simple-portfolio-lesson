const links = [
    {
        href: "/",
        content: "Home"
    },
    {
        href: "https://google.com",
        content: "Google Me!"
    },
    {
        href: "https://linkedin.com",
        content: "LinkedIn Me!"
    }
]

const projects = [
    {
        title: "Number 1",
        link: "https://github.com",
        imgSrc: "https://picsum.photos/300",
        description: "Yabba dabba wabba labba mabba habba grabba pabba dabba wabba labba mabba habba grabba pabba dabba wabba labba mabba habba grabba pabba dabba wabba labba mabba habba grabba pabba dabba wabba labba mabba habba grabba pabba"
    },
    {
        title: "Number 2",
        link: "https://github.com",
        imgSrc: "https://picsum.photos/300",
        description: "Yabba dabba wabba labba mabba habba grabba pabba dabba wabba labba mabba habba grabba pabba dabba wabba labba mabba habba grabba pabba dabba wabba labba mabba habba grabba pabba dabba wabba labba mabba habba grabba pabba"
    },
    {
        title: "Number 3",
        link: "https://github.com",
        imgSrc: "https://picsum.photos/300",
        description: "Yabba dabba wabba labba mabba habba grabba pabba dabba wabba labba mabba habba grabba pabba dabba wabba labba mabba habba grabba pabba dabba wabba labba mabba habba grabba pabba dabba wabba labba mabba habba grabba pabba"
    },
    {
        title: "Number 4",
        link: "https://github.com",
        imgSrc: "https://picsum.photos/300",
        description: "Yabba dabba wabba labba mabba habba grabba pabba dabba wabba labba mabba habba grabba pabba dabba wabba labba mabba habba grabba pabba dabba wabba labba mabba habba grabba pabba dabba wabba labba mabba habba grabba pabba"
    }
]

const buildCards = (cards) => cards.map((card)=> {
    return `
        <li class="card">
            <a href="${card.link}>
            <div class="img-container">
                <img src="${card.imgSrc}" alt="">
            </div>
            <h1>${card.title}</h1>
            <p>${card.description}</p>
        </li>
        `
})

const buildLinks = (links_) => links_.map((link)=>{
    return `
        <li><a href="${link.href}">${link.content}</a></li>
    `
}).join('');

const linkContainer = document.getElementById('navigation__links');
linkContainer.innerHTML = buildLinks(links)

const footer = document.querySelector(".footer");
footer.innerHTML = buildLinks([...links, {
    href: "https://twitter.com",
    content: "Tweet at Me"
}]);

const projectsContainer = document.getElementById('projects');
projectsContainer.innerHTML = buildCards(projects);