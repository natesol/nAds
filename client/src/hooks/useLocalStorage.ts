import { useState } from 'react';

const useLocalStorage = <T>(key: string, initialValue: T): [T, (value: T) => void] => {
    const storedValue = JSON.parse(localStorage.getItem(key) || JSON.stringify(initialValue));

    const [value, setValue] = useState<T>(storedValue);

    const updateValue = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };

    return [value, updateValue];
};

export default useLocalStorage;
