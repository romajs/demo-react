import { PageRedirect } from './PageRedirect'
import React from 'react'

export default pathname => () => <PageRedirect pathname={pathname} />
