import React from 'react';
import Button from "@material-ui/core/Button";

class SearchButton extends React.Component{
    state={

    }
    render(){
        const {onSearch, darkMode}=this.props
        return(
            <Button
            variant={'contained'}
            onClick={onSearch}
            color={darkMode?'secondary':'primary'}
            >
                Search
            </Button>
        )
    }
}

export default SearchButton