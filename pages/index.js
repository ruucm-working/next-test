import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import App from '../components/App';
import withData from '../libraries/withData';
import { dump } from '../libraries/helpers';
import { Link } from '../routes';
import DefaultCon from '../containers/Default';
import PinList from '../components/PinList';

const Wrap = styled.div``;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-columns: center;
`;

const Column = styled.div`
  background: green;
  flex: 0 0 33.3%;
  max-width: 33.3%;
`;

const Content = styled.div`
  background: pink;
  position: relative;
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
`;

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
      <Wrap>
        <Row>
          <Column>
            <Content>
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
                  <h1>index</h1>
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
                  <Img
                    src="https://fsmedia.imgix.net/07/05/10/11/b2e4/4575/937c/7b9a134d6ae4/5pikachu-1gif.gif?rect=0%2C0%2C1000%2C500&auto=compress&dpr=2&w=650&fm=jpg"
                    alt="pika"
                  />
                </Frame>
              ) : (
                ''
              )}
            </Content>
          </Column>
          <Column>
            <Content>
              <PinList />
            </Content>
          </Column>
          <Column>
            <Content>
              <div>{dump(props)}</div>
            </Content>
          </Column>
          <Column>
            <Content>4</Content>
          </Column>
        </Row>
      </Wrap>
    </App>
  );
});
