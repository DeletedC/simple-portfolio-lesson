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

const mainContent = document.getElementById('main');
mainContent.innerHTML = "Hello World";