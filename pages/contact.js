import { Helmet } from 'react-helmet';
import App from '../components/App';
import withData from '../libraries/withData';
import { dump } from '../libraries/helpers';

export default withData(props => (
  <App>
    <Helmet>
      <title>contact</title>
    </Helmet>
    <div>
      <h1>contact</h1>
      <p>HELLO WORLD! HELLO FROM RAN!</p>
      <hr />
      <p>{dump(props)}</p>
      <p>{dump(props)}</p>
      <p>{dump(props)}</p>
      <p>{dump(props)}</p>
      <p>{dump(props)}</p>
      <p>{dump(props)}</p>
      <p>{dump(props)}</p>
      <p>{dump(props)}</p>
      <p>{dump(props)}</p>
      <p>{dump(props)}</p>
    </div>
  </App>
));
