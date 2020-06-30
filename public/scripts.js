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

const linkContainer = document.getElementById('navigation__links');
    linkContainer.innerHTML = links.map((link)=>{
        return `
            <li><a href="${link.href}">${link.content}</a></li>
        `
    }).join('');

const mainContent = document.getElementById('main');
mainContent.innerHTML = "Hello World";