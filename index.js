const web_sesv = "https://www.sesvtutorial.com/"
const proxy = "https://api.allorigins.win/raw?url="
const url = proxy + web_sesv
const content = document.querySelector('#content')
let isFetch = false


const processHTML = (data) => {
    let start = data.search('<section class="posts simple">');
    let end = data.search("</section>");
    data = data.slice(start, end);
    while (data.search('href="/') !== -1) {
        data = data.replace('href="/', 'href="https://www.sesvtutorial.com/');
    }
    return data;
}

async function getAPI() {
    if (confirm("Fetch SESV?")) {
        const response = await fetch(url)
        let data = await response.text()
        data = processHTML(data)
        content.innerHTML += data
    } else {
        alert("No fetch")
    }
}

