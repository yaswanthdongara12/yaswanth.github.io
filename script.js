document.addEventListener("DOMContentLoaded", function() {
    const navBar = document.getElementById('navBar');
    const websites = [
        { name: "Google", url: "https://www.google.com" },
        { name: "DuckDuckGo", url: "https://duckduckgo.com" },
        { name: "Cricbuzz", url: "https://www.cricbuzz.com" },
        { name: "Telegram Web", url: "https://web.telegram.org" },
        { name: "Microsoft Teams", url: "https://teams.microsoft.com" },
        { name: "Twitter", url: "https://twitter.com" },
        { name: "Pinterest", url: "https://www.pinterest.com" },
        { name: "Amazon", url: "https://www.amazon.com" },
        { name: "Flipkart", url: "https://www.flipkart.com" },
        { name: "JioCinema", url: "https://www.jiocinema.com" },
        { name: "Swayam", url: "https://www.swayam.gov.in" },
        { name: "MyJio", url: "https://www.jio.com" },
        { name: "ChatGPT", url: "https://www.chatgpt.com" },
        { name: "Crex.Live", url: "https://www.crex.live" }
    ];

    let currentRow = document.createElement('div');
    currentRow.classList.add('row');

    websites.forEach((site, index) => {
        if (index > 0 && index % 4 === 0) {
            navBar.appendChild(currentRow);
            currentRow = document.createElement('div');
            currentRow.classList.add('row');
        }

        const link = document.createElement('a');
        link.href = site.url;
        link.textContent = `(${site.name[0]}) ${site.name}`;
        currentRow.appendChild(link);
    });

    // Append the last row if it's not empty
    if (currentRow.childNodes.length > 0) {
        navBar.appendChild(currentRow);
    }
});
