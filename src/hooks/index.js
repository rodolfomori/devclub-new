import React from 'react'

import { HomeProvider } from './HomeContext'

const AppProvider = ({ children }) => <HomeProvider>{children}</HomeProvider>


export default AppProvider
