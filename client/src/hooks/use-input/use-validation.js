import { useState, useEffect } from 'react';

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        for (const validation in validations) {
            let isValid = true;

            switch(validation){
                case 'minLength':
                    isValid = value.length >= validations[validation];
                    setErrorMessage(!isValid ? 'Error' : '');
                    setMinLengthError(!isValid);
                    break;
                case 'isEmpty':
                    isValid = value;
                    setErrorMessage(!isValid ? 'Error 2' : '');
                    setEmpty(!isValid);
                    break;
                case 'isEmail':
                    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    isValid = re.test(String(value).toLowerCase());
                    setErrorMessage(!isValid ? 'Error 3' : '');
                    setEmailError(!isValid);
                    break;
            }
        }
    }, [value, validations]);

    return {
        isEmpty,
        minLengthError,
        emailError,
        errorMessage
    }
}

export default useValidation;