import Table from '../../../../components/Table';

import { Container } from './styles';

const Body = () => {
  return (
    <Container>
      <Table
        content={[
          { a: '1', b: '2', c: '3' },
          { a: '4', b: '5', c: '6' },
        ]}
      />
    </Container>
  );
};

export default Body;
