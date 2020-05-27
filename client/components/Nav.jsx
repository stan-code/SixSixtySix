import React from 'react'

class Nav extends React.Component{
    render(){

        return(
            <>
            <div className="navBody">
                <img src="/images/navlogo.png"/>
                <div className="navMenu">
                <h1>Home</h1>
                <h1>About</h1>
                <h1>Food</h1>
                <h1>Contact</h1>
                </div>

            </div>

            </>
        )
    }
}

export default Nav