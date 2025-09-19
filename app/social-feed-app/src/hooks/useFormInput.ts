import { ChangeEvent, useState } from "react"

export const useFormInput = (initialValue: string = '') => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value);
    }
    
    const reset = () => {
        setValue(initialValue);
    }

    const isEmpty = value.trim() === '';

    return {
        value,
        setValue,
        handleChange,
        reset,
        isEmpty,
    };
};