import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { FaChevronDown } from 'react-icons/fa';

import { changeStatus } from 'store/features/upload/uploadSlice';
import {
  Container,
  Th,
  Td,
  Tbody,
  Thead,
  Tr,
  SelectContainer,
  SelectText,
  Teste,
  SelectItem,
} from './styles';

interface TableEditableProps {
  content: Array<{
    [U: string]: string;
  }>;
}

const TableEditable = ({ content }: TableEditableProps) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState<string | null>(null);

  const options = ['Active', 'Injured', 'Practice', 'Suspended'];

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
            {Object.keys(item)
              .slice(0, Object.keys(item).length - 1)
              .map(key => (
                <Td key={key}>{item[key]}</Td>
              ))}

            <Td
              isHidden={open === item['#']}
              onClick={() => {
                if (open !== item['#']) setOpen(item['#']);
              }}
            >
              <SelectContainer>
                <SelectText>
                  {item[Object.keys(item)[Object.keys(item).length - 1]]}
                </SelectText>
                <FaChevronDown style={{ marginLeft: 10 }} color="#1F1F1F" />
              </SelectContainer>
              {open === item['#'] && (
                <Teste>
                  <SelectItem
                    onClick={() => {
                      setOpen(null);
                    }}
                  >
                    <SelectText>
                      {item[Object.keys(item)[Object.keys(item).length - 1]]}
                    </SelectText>
                    <FaChevronDown style={{ marginLeft: 10 }} color="#1F1F1F" />
                  </SelectItem>
                  {options
                    .filter(
                      status =>
                        status !==
                        item[Object.keys(item)[Object.keys(item).length - 1]],
                    )
                    .map(status => (
                      <SelectItem
                        key={status}
                        onClick={() => {
                          setOpen(null);
                          dispatch(
                            changeStatus({
                              player: item['#'],
                              status,
                            }),
                          );
                        }}
                      >
                        <SelectText>{status}</SelectText>
                      </SelectItem>
                    ))}
                </Teste>
              )}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Container>
  );
};

export default TableEditable;
