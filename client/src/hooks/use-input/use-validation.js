import { useState, useEffect } from 'react';

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [compareError, setCompareError] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            let isValid = true;

            switch(validation){
                case 'minLength':
                    isValid = value.length >= validations[validation];
                    setMinLengthError(!isValid);
                    break;
                case 'isEmpty':
                    isValid = value;
                    setEmpty(!isValid);
                    break;
                case 'isEmail':
                    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    isValid = re.test(String(value).toLowerCase());
                    setEmailError(!isValid);
                    break;
                case 'compare':
                    isValid = value === validations[validation].value;
                    setCompareError(!isValid);
                    break;
                default:
                    isValid = true;
            }
        }
    }, [value, validations]);

    const errorMessages = () => {
        const errs = [];

        if(isEmpty){
            errs.push('Поле не може бути пустим');
        }

        if(minLengthError){
            errs.push(`Мінімальна довжина поля ${validations['minLength']} символів`);
        }

        if(emailError){
            errs.push('Введіть коректну e-mail адресу');
        }

        if(compareError){
            errs.push(validations['compare'].message);
        }

        return errs;
    }

    return {
        isEmpty,
        minLengthError,
        emailError,
        errors: errorMessages()
    }
}

export default useValidation;