import React from 'react'
import TextField from '@mui/material/TextField';

function BasicInput({
                        viewLabel, valuData, valueSet, txtEntry,onChange, autoCap, autoCorrect, size, rows, maxRows,multiline
                    }) {

    return (<div>
        <TextField
            style={{height: '100%', width: '100%',color:'#000'}}
            size={size}
            id="outlined-required"
            label={viewLabel}
            value={valuData}
            onClick={valueSet}
            type={txtEntry}
            onChange={onChange}
            rows={rows}
            maxRows={maxRows}
            multiline={multiline}
        />
    </div>)
}

export default BasicInput;
