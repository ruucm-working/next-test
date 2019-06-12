import { Helmet } from 'react-helmet';
import App from '../components/App';
import withData from '../libraries/withData';
import { dump } from '../libraries/helpers';
import { Link } from '../routes';

export default withData(props => (
  <App>
    <Helmet>
      <title>index</title>
      {/* <meta name="description" content="Helmet application" /> */}
      <meta property="og:type" content="article" />
      {/* <meta
        property="og:image"
        content="https://yt3.ggpht.com/a/AGF-l79odxmUaLdPO8rxtYP3un8kS7p3aJnUGmKJGg=s900-mo-c-c0xffffffff-rj-k-no"
      /> */}
    </Helmet>
    <div>
      <h1>index</h1>
      <p>HELLO WORLD! HELLO FROM RAN!</p>
      <p>HELLO WORLD! HELLO FROM RAN!</p>
      <p>HELLO WORLD! HELLO FROM RAN!</p>
      <p>HELLO WORLD! HELLO FROM RAN!</p>

      <p>
        HELLO WORLD! HELLO FROM RALLO WORLD! HELLO FROM RALLO WORLD! HELLO FROM
        RALLO WORLD! HELLO FROM RALLO WORLD! HELLO FROM RALLO WORLD! HELLO FROM
        RALLO WORLD! HELLO FROM RALLO WORLD! HELLO FROM RALLO WORLD! HELLO FROM
        RALLO WORLD! HELLO FROM RALLO WORLD! HELLO FROM RALLO WORLD! HELLO FROM
        RALLO WORLD! HELLO FROM RALLO WORLD! HELLO FROM RALLO WORLD! HELLO FROM
        RALLO WORLD! HELLO FROM RALLO WORLD! HELLO FROM RALLO WORLD! HELLO FROM
        RAN!
      </p>

      {/* <Link route="about">About</Link>
      <a href="/about">about</a> */}

      <Link prefetch route="hey" passHref>
        Hey
      </Link>

      <hr />
      <pre>{dump(props)}</pre>
      <img
        src="https://fsmedia.imgix.net/07/05/10/11/b2e4/4575/937c/7b9a134d6ae4/5pikachu-1gif.gif?rect=0%2C0%2C1000%2C500&auto=compress&dpr=2&w=650&fm=jpg"
        alt="pika"
      />
    </div>
  </App>
));
