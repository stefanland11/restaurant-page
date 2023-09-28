function menu() {
    const content = document.getElementById('content');
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('child');
    menuDiv.classList.add('menu-div');

    const menuArr = ["chicken", "chicken", "chicken", "chicken", "chicken", "chicken", "chicken", 
    "chicken", "chicken", "chicken", "chicken", "chicken"];

    menuArr.forEach((item, index) => {
        
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');
        const name = document.createElement('p');
        const description = document.createElement('p');
        const price = document.createElement('p');

        itemDiv.appendChild(name);
        itemDiv.appendChild(description);
        itemDiv.appendChild(price);

        name.textContent = menuArr[index];
        description.textContent = "description description description description description description description description";
        price.textContent = "$9.99";

        menuDiv.appendChild(itemDiv);

    })

    content.appendChild(menuDiv);


    

}

export{menu};