import { Helmet } from 'react-helmet';
import App from '../components/App';
import withData from '../libraries/withData';
import { dump } from '../libraries/helpers';

export default withData(props => (
  <App>
    <Helmet>
      <title>{dump(props)}</title>
    </Helmet>
    <div>
      <h1>hey</h1>
      <p>HELLO WORLD! HELLO FROM RAN!</p>
      <hr />
      <pre>{dump(props)}</pre>
    </div>
  </App>
));
