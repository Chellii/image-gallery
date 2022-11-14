import React from 'react';
import { StyleInputField } from 'components/styles/InputField.style';

const InputFields = ({label, type, register, formValue}) => {
    return (
        <StyleInputField type={type} placeholder={label}  
            {...register(formValue)}
        />
    )
}

export default InputFields;