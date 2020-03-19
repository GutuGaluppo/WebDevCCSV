import React from 'react';

class ShowResults extends React.Component{
    state={

    }
    render(){
        const {results} = this.props
        return(
            <ol>
                {results.map(
                    (product,i)=>{
                    return <li key={i}>Name: {product.name}</li>
                    }
                )}
            </ol>
        )
    }
}

export default ShowResults