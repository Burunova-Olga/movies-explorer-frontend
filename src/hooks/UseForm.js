import React, { useCallback, useState } from 'react';

export function useForm(inputValues={})
{
  const [formValues, setFormValues] = useState(inputValues);
  
  const handleChange = (event) =>
  {
    const {value, name} = event.target;
    setFormValues({...formValues, [name]: value});
  };
  
  return {formValues, handleChange, setFormValues};
}

//хук управления формой и валидации формы
export function useFormWithValidation(inputValues={})
{
  const [formValues, setFormValues] = useState(inputValues);
  const [errors, setErrors] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) =>
  {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setFormValues({...formValues, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setFormValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setFormValues, setErrors, setIsValid]
  );

  return { formValues, handleChange, errors, isValid, resetForm };
}