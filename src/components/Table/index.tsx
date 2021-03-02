import { Container, Th, Td } from './styles';

interface TableProps {
  content: Array<{
    [U: string]: string;
  }>;
}

const Table = ({ content }: TableProps) => {
  return (
    <Container>
      <tr>
        {Object.keys(content[0]).map(key => (
          <Th key={key}>{key}</Th>
        ))}
      </tr>
      <tr>
        {Object.keys(content[0]).map(key => (
          <Td key={key} isActive>
            {content[0][key]}
          </Td>
        ))}
      </tr>
      {content.slice(1).map(item => (
        <tr>
          {Object.keys(item).map(key => (
            <Td key={key}>{item[key]}</Td>
          ))}
        </tr>
      ))}
    </Container>
  );
};

export default Table;
