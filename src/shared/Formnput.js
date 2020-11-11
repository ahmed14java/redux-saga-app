import React from 'react';
import { Label, Input } from 'reactstrap';

const Formnput = ({ handleChange,placeHolder, label, ...otherProps }) => {
    return (
        <div>
            <Label>
                {label}
            </Label>
            <Input placeholder={placeHolder} onChange={handleChange} {...otherProps} />
        </div>
    )
}

export default Formnput
