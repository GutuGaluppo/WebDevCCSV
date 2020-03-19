import React from 'react';
import TextField from "@material-ui/core/TextField";

class InputFields extends React.Component{
    render(){
        const {inputField, onChange, name} = this.props
        return(
            <div className='inputWrap'>
                <TextField 
                id={name}
                type="number"
                value={inputField}
                onChange={(e)=>onChange(name,e.target.value)}
                variant='outlined'
                label='Product Name'
                color='primary'                
                />
            </div>
        )
    }
}

export default InputFields