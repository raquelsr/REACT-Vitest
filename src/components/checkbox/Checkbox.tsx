import React, { useState } from 'react';

interface CheckBoxProps {
    checked: boolean;
    onChange?: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckBoxProps> = ({ checked, onChange }) => {
    const [isChecked, setIsChecked] = useState<boolean>(checked);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCheckedValue = event.target.checked;
        setIsChecked(newCheckedValue);
        if (!onChange) return;
        onChange(newCheckedValue);
    };

    return (
        <input type="checkbox" checked={isChecked} onChange={handleOnChange} />
    );
}; 