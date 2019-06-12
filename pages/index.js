import { Helmet } from 'react-helmet';

import App from '../components/App';
import withData from '../libraries/withData';
import { dump } from '../libraries/helpers';
import { Link } from '../routes';

var Frame;

export default withData(props => {
  /* eslint-disable global-require */
  if (typeof window !== 'undefined') {
    Frame = require('framer').Frame;
  }
  /* eslint-disable global-require */
  return (
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
        {typeof window !== 'undefined' && Frame ? (
          <Frame
            size={'100%'}
            initial={{
              top: -100,
              opacity: 0
            }}
            animate={{
              top: 0,
              opacity: 1
            }}
          >
            {console.log('Frame', Frame)}
            <h1>index</h1>
            <p>HELLO WORLD! HELLO FROM RAN!</p>
            <p>HELLO WORLD! HELLO FROM RAN!</p>
            <p>HELLO WORLD! HELLO FROM RAN!</p>
            <p>HELLO WORLD! HELLO FROM RAN!</p>
            <p>
              HELLO WORLD! HELLO FROM RALLO WORLD! HELLO FROM RALLO WORLD! HELLO
              FROM RALLO WORLD! HELLO FROM RALLO WORLD! HELLO FROM RALLO WORLD!
              HELLO FROM RALLO WORLD! HELLO FROM RALLO WORLD! HELLO FROM RALLO
              WORLD! HELLO FROM RALLO WORLD! HELLO FROM RALLO WORLD! HELLO FROM
              RALLO WORLD! HELLO FROM RALLO WORLD! HELLO FROM RALLO WORLD! HELLO
              FROM RALLO WORLD! HELLO FROM RALLO WORLD! HELLO FROM RALLO WORLD!
              HELLO FROM RALLO WORLD! HELLO FROM RAN!
            </p>

            <Link prefetch route="hey" passHref>
              Hey
            </Link>
            <br />

            <Link prefetch route="about" passHref>
              about
            </Link>
            <br />
            <Link prefetch route="contact" passHref>
              contact
            </Link>

            <br />
            <img
              src="https://fsmedia.imgix.net/07/05/10/11/b2e4/4575/937c/7b9a134d6ae4/5pikachu-1gif.gif?rect=0%2C0%2C1000%2C500&auto=compress&dpr=2&w=650&fm=jpg"
              alt="pika"
            />
          </Frame>
        ) : (
          ''
        )}
        <p>{dump(props)}</p>
        <p>{dump(props)}</p>
        <p>{dump(props)}</p>
        <p>{dump(props)}</p>
      </div>
    </App>
  );
});
