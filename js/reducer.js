let state// = {count: 0}
let button = document.getElementById('button');

// FUNCTIONS
function reducer(state = {count: 0}, action){
    switch (action.type) {
        case 'INCREASE_COUNT':
            return {count: state.count + 1};
        default:
            return state;
    }
}

function dispatch(action){
    state = reducer(state, action);
    render()
}

function render(){
    let container = document.getElementById('container');
    container.textContent = state.count;
}

// EVENTS
button.addEventListener('click', () => {
    dispatch({type: 'INCREASE_COUNT'})
})


dispatch({type: '@@INIT'})