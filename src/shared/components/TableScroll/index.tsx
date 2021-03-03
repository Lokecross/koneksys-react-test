import { Container, Th, Td, Tbody, Thead, Tr } from './styles';

interface TableScrollProps {
  content: Array<{
    [U: string]: string;
  }>;
}

const TableScroll = ({ content }: TableScrollProps) => {
  return (
    <Container>
      <Thead>
        <Tr>
          {Object.keys(content[0]).map(key => (
            <Th key={key}>{key}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {content.map(item => (
          <Tr key={JSON.stringify(item)}>
            {Object.keys(item).map(key => (
              <Td key={key}>{item[key]}</Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Container>
  );
};

export default TableScroll;
