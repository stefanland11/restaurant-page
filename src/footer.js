function footer () {
    
    const content = document.getElementById('content');
    const foot = document.createElement('div');
    foot.classList.add('footer');
    foot.textContent = "Photo: Jason Leung"
    content.appendChild(foot);
}

export {footer};