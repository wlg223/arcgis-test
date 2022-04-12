import type { NextPage } from 'next'

import EsriMap from '../src/components/EsriMap'
import EsriMapWithNoSSR from '../src/components/EsriMapWithNoSSR'
const Home: NextPage = () => {
  return (
    <div >
      <EsriMapWithNoSSR />
  
  </div>
  )
}

export default Home
