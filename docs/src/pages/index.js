import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Global } from '@emotion/core'
import { globalStyles } from '../styles/global'
import { Button } from '../components/Button/Button'
import { Cast } from '../../../icons/Cast'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Features } from '../components/Features'
import { Section } from '../components/Section'
import { FocusStyles } from '../components/FocusStyles'

const IndexPage = ({
  data: {
    site: {
      siteMetadata: {
        exampleSiteUrls: [
          reduxChangeCastUrl,
          vueChangeCastUrl,
          reactDndChangeCastUrl,
        ],
      },
    },
  },
}) => (
  <>
    <FocusStyles />
    <Global styles={globalStyles} />
    <Helmet>
      <script
        src={`${reduxChangeCastUrl}/widget.js`}
        data-selectors="[data-redux-changecast]"
        defer
      />
      <script
        src={`${vueChangeCastUrl}/widget.js`}
        data-selectors="[data-vue-changecast]"
        defer
      />
      <script
        src={`${reactDndChangeCastUrl}/widget.js`}
        data-selectors="[data-react-beautiful-dnd-changecast]"
        defer
      />
    </Helmet>
    <Header />
    <Section
      title="Give ChangeCast a Try"
      subtitle="See For Yourself"
      content="Ecce, teres racana! Hercle, racana raptus!, bassus axona! Albus extum
          grauiter magicaes usus est. A falsis, compater altus heuretes. Nixus
          de placidus lacta, dignus cacula! Alter, regius eras absolute talem de
          superbus, emeritis lumen."
    >
      <Button color="#4fc08d" data-vue-changecast css={{ marginRight: '30px' }}>
        Vue
      </Button>
      <Button
        color="#764abc"
        data-redux-changecast
        css={{ marginRight: '30px' }}
      >
        Redux
      </Button>
      <Button color="#0052CC" data-react-beautiful-dnd-changecast>
        React Beautiful DnD
      </Button>
    </Section>
    <Features />
    <Section
      title="Deploy With One Click"
      subtitle="Try It Out"
      content="Ecce, teres racana! Hercle, racana raptus!, bassus axona! Albus extum
          grauiter magicaes usus est. A falsis, compater altus heuretes. Nixus
          de placidus lacta, dignus cacula! Alter, regius eras absolute talem de
          superbus, emeritis lumen."
    >
      <a href="https://app.netlify.com/start/deploy?repository=https://github.com/palmerhq/changecast">
        <img
          src="https://www.netlify.com/img/deploy/button.svg"
          alt="Deploy to Netlify"
        />
      </a>
    </Section>
    <Footer />
  </>
)

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        exampleSiteUrls
      }
    }
  }
`

export default IndexPage
