import React from 'react'
import {Link} from 'react-router-dom'

const LoginError = (props) => {
    const { location } = props || {}
    const { state } = location || {}
    const { message} = state || ''

    return (
        <div>
            <div> go away! </div>
            <div>{message}</div>
            <Link to='/'>get out</Link>
        </div>
    )
}

export default LoginError