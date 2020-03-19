import React from 'react';
import Button from "@material-ui/core/Button";

class SearchButton extends React.Component{
    state={

    }
    render(){
        const {onSearch}=this.props
        return(
            <Button
            variant={'contained'}
            color='primary'
            onClick={onSearch}
            >
                Search
            </Button>
        )
    }
}

export default SearchButton