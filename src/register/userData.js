

const initialState = [
    {
        firstName:'',
        lastName:'',
        tel:'',
        email:'',
        address:'',
        userName:'',
        password1:'',
        password2:'',

    }
]

const Shop = (state=initialState, action) =>{
    let item = action.payload
    switch (action.type) {
        case 'NAME':
            state[0].firstName = action.payload
            state[0].lastName = action.payload
            return state;
        case 'contact':
            state[0].tel = action.payload
            state[0].email = action.payload
            state[0].address = action.payload
            return state
        case 'password':
            state[0].userName = action.payload
            state[0].password1 = action.payload
            state[0].password2 = action.payload
            return state
        default:
            return state
            break;
    }
}

export default Shop