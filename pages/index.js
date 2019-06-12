import { Helmet } from 'react-helmet';
import App from '../components/App';
import withData from '../libraries/withData';
import { dump } from '../libraries/helpers';

export default withData(props => (
  <App>
    <Helmet>
      <title>index</title>
      <meta name="description" content="Helmet application" />
      <meta property="og:type" content="article" />
      <meta
        property="og:image"
        content="https://yt3.ggpht.com/a/AGF-l79odxmUaLdPO8rxtYP3un8kS7p3aJnUGmKJGg=s900-mo-c-c0xffffffff-rj-k-no"
      />
    </Helmet>
    <div>
      <h1>index</h1>
      <p>HELLO WORLD! HELLO FROM RAN!</p>
      <hr />
      <pre>{dump(props)}</pre>
    </div>
  </App>
));
