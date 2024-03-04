const initialState = {
  formData: {
    firstName: '',
    lastName: '',

    email: '',
    password:'',
  },
  formData2: {
     addressLine1: "",
    addressLine2: "",
     country: "",
     state: "",
     
    pincode: "",
  }
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'SAVE_FORM_DATA':
       return {
           ...state,
           formData: action.payload,
      };
   case 'SAVE_ADDITIONAL_FORM_DATA':
      return {
        ...state,
         formData2: action.payload,
      };
    default:
    return state;
  } 
};

export default formReducer;
