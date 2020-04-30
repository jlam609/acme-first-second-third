const app = document.querySelector('#app')
const createHeader = () => {
    const headerContainer = document.createElement('div')
    const header = document.createElement('h1')
    headerContainer.classList.add('headerContainer')
    header.innerText = 'Acme First, Second, Third'
    headerContainer.append(header)
    app.append(headerContainer)
    return headerContainer
}
const createUser = (index) => {
    const userContainer = document.createElement('div')
    userContainer.classList.add('user')
    userContainer.innerHTML = index.name
    userContainer.addEventListener('click', ev => {
        ev.preventDefault();
        index.selected = true;
        index.classList.add('userSelected')
})
    return userContainer
}
const state = [
    {id: 1, name: 'moe', slot: 'first'},
    {id: 2, name: 'larry', slot: 'second'},
    {id: 3, name: 'curly', slot: 'third'},
    {id: 4, name: 'lucy',  slot: 'third'},
]
const reset = () => {
    for (let i = 0; i < state.length; i++){
        let user = state[i];
        if (user.selected === true) {
            user.selected = false;
        }
        if (user.classList === 'userSelected') user.classList = 'user'
    }
}

const createRightArrow = () => {
    const rightArrow = document.createElement('div')
    rightArrow.classList.add('arrows')
    rightArrow.innerText = '>'
    return rightArrow
}
const createLeftArrow = () => {
    const leftArrow = document.createElement('div')
    leftArrow.classList.add('arrows')
    leftArrow.innerText = '<'
    return leftArrow
}
const createChildContainer1 = () => {
    const childContainer = document.createElement('div')
    const title = document.createElement('h1')
    const rightArrow = createRightArrow()
    const leftArrow = createLeftArrow()
    rightArrow.classList.add('activeArrow')
    rightArrow.addEventListener('click', ev => {
        ev.preventDefault()
        for (let i = 0; i < state.length; i++){
            let user = state[i]
            if (user.slot === 'first' && user.selected === true) {
                user.slot = 'second'
            }
        }
        reset()
        render()
    })
    title.innerHTML = 'FIRST'
    childContainer.append(leftArrow)
    childContainer.append(rightArrow)
    childContainer.append(title)
    return childContainer
}

const createChildContainer2 = () => {
    const childContainer = document.createElement('div');
    const title = document.createElement('h1');
    const rightArrow = createRightArrow();
    const leftArrow = createLeftArrow();
    rightArrow.classList.add('activeArrow');
    leftArrow.classList.add('activeArrow');
    rightArrow.addEventListener('click', ev => {
        ev.preventDefault()
        for (let i = 0; i < state.length; i++){
            let user = state[i]
            if (user.slot === 'second' && user.selected === true) {
                user.slot = 'third'
            }
        }
        reset();
        render();
    })
    leftArrow.addEventListener('click', ev => {
        ev.preventDefault()
        for (let i = 0; i < state.length; i++){
            let user = state[i]
            if (user.slot === 'second' && user.selected === true) {
                user.slot = 'first'
            }
        }
        reset();
        render();
    })
    title.innerHTML = 'SECOND'
    childContainer.append(leftArrow)
    childContainer.append(rightArrow)
    childContainer.append(title)
    return childContainer
}
const createChildContainer3 = () => {
    const childContainer = document.createElement('div');
    const title = document.createElement('h1');
    const rightArrow = createRightArrow();
    const leftArrow = createLeftArrow();
    leftArrow.classList.add('activeArrow');
    leftArrow.addEventListener('click', ev => {
        ev.preventDefault()
        for (let i = 0; i < state.length; i++){
            let user = state[i]
            if (user.slot === 'third' && user.selected === true) {
                user.slot = 'second'
            }
        }
        reset();
        render();
    })
    title.innerHTML = 'THIRD';
    childContainer.append(leftArrow);
    childContainer.append(rightArrow);
    childContainer.append(title);
    return childContainer;
}
const createBody = () => {
    const bodyContainer = document.createElement('div');
    bodyContainer.classList.add('bodyContainer');
    const firstContainer = createChildContainer1();
    const secondContainer = createChildContainer2();
    const thirdContainer = createChildContainer3();
    for (let i = 0; i < state.length; i++){
        let user = state[i];
        const userName = createUser(user);
        userName.addEventListener('click', ev => {
            ev.preventDefault();
            user.selected = true;
            userName.classList.add('userSelected')
        });
        if (user.slot === 'first') {
            firstContainer.append(userName);
        }
        if (user.slot === 'second') {
            secondContainer.append(userName);
        }
        if (user.slot === 'third') {
            thirdContainer.append(userName);
        }
    }
    bodyContainer.append(firstContainer);
    bodyContainer.append(secondContainer);
    bodyContainer.append(thirdContainer);
    app.append(bodyContainer);
    return bodyContainer;
}
const render = () => {
    app.innerHTML = '';
    createHeader();
    createBody();
}
render();
