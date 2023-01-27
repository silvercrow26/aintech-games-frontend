import React from 'react'

export const CheckboxCat = ({ obj, onChange }) => {
    return (
        <>
            <input
                type="checkbox"
                id={`custom-checkbox-${obj.index}`}
                name={obj.name}
                value={obj.checked}
                onChange={() => onChange({ ...obj, checked: !obj.checked })}
            />
            {obj.name}
        </>
    );
}
