function makeRelocateButton(buttonId, pageUrl) {
    document.getElementById(buttonId).addEventListener('click', () => {
        document.location.href = pageUrl
    })
}

function pageRedict(pageUrl) {
        document.location.href = 'Poor_frontend/' + '../html/' + pageUrl + ".html"
}