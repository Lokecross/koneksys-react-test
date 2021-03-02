import { Container, Th, Td } from './styles';

interface TableProps {
  content: Array<{
    [U: string]: string;
  }>;
}

const Table = ({ content }: TableProps) => {
  return (
    <Container>
      <thead>
        <tr>
          {Object.keys(content[0]).map(key => (
            <Th key={key}>{key}</Th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Object.keys(content[0]).map(key => (
            <Td key={key} isActive>
              {content[0][key]}
            </Td>
          ))}
        </tr>
        {content.slice(1).map(item => (
          <tr key={JSON.stringify(item)}>
            {Object.keys(item).map(key => (
              <Td key={key}>{item[key]}</Td>
            ))}
          </tr>
        ))}
      </tbody>
    </Container>
  );
};

export default Table;
