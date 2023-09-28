function homepage () { 
    const content = document.getElementById('content');
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('child');
    homeDiv.classList.add('home-page');

    const quote = document.createElement('p');
    quote.classList.add('quote');
    homeDiv.appendChild(quote);
    content.appendChild(homeDiv);
    quote.textContent = "This restaurant is certainly a restaurant...";
}

export { homepage };