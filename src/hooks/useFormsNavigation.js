import { useState } from 'react';

export const useFormsNavigation = () => {
  const [formOption, setFormOption] = useState('no-one');
  const [move, setMove] = useState('');

  const handleFormOptionChange = (newFormOption) => {
    if (newFormOption !== 'no-one' && formOption === 'no-one') {
      setMove('left');
      setTimeout(() => {
        setMove('');
        setFormOption(newFormOption);
      }, 500);
    } else if (newFormOption === 'no-one' && formOption !== 'no-one') {
      setMove('right');
      setTimeout(() => {
        setMove('');
        setFormOption(newFormOption);
      }, 500);
    } else {
      setFormOption(newFormOption);
    }
  };

  return {
    formOption,
    move,
    handleFormOptionChange,
  };
};