import * as React from 'react'
import { Helmet as OriginalHelmet } from 'react-helmet'

export const Helmet: React.StatelessComponent<OriginalHelmet> = (props) => {
  const titleTemplate = '%s | StrawHat Admin'
  return <OriginalHelmet titleTemplate={titleTemplate} {...props}/>
}
