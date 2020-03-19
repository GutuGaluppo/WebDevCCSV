import React from 'react';

class ShowResults extends React.Component{
    state={

    }
    render(){
        const {results, darkMode} = this.props
        return(
            <ol>
                {results.map(
                    (product,i)=>{
                    return <li key={i} className={darkMode?'liDark':'liLight'}>Name: {product.name}</li>
                    }
                )}
            </ol>
        )
    }
}

export default ShowResults