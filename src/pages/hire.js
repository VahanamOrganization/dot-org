import React from 'react'

import Layout from '../components/layout/layout'

const HirePage = () => (
  <Layout>
    <div className="Hero Sliver">
      <div className="Hero__Contents"></div>
    </div>
    <div className="Block">
      <div className="Form">
        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
        <iframe
          title="join form"
          class="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shrzb9Ntu48yw0uxV?backgroundColor=green"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="2046"
          style={{ background: '#000', border: 'none' }}
        ></iframe>
      </div>
    </div>
  </Layout>
)

export default HirePage
