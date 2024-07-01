// create context for url

import React, { createContext } from 'react'

const UrlContext = createContext({
    baseUrl : `https://recipesharingappbackend.onrender.com/api/users`
})

export default UrlContext