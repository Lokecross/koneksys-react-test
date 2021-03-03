import { useDispatch, useSelector } from 'react-redux';

import { FaCheck } from 'react-icons/fa';

import {
  changeFavorite,
  selectUpload,
} from 'store/features/upload/uploadSlice';

import {
  Container,
  Th,
  Td,
  Tbody,
  Thead,
  Tr,
  RadioContainer,
  RadioText,
  Radio,
} from './styles';

interface TableRadioProps {
  content: Array<{
    [U: string]: string;
  }>;
}

const TableRadio = ({ content }: TableRadioProps) => {
  const dispatch = useDispatch();

  const upload = useSelector(selectUpload);

  return (
    <Container>
      <Thead>
        <tr>
          {Object.keys(content[0]).map(key => (
            <Th key={key}>{key}</Th>
          ))}
        </tr>
      </Thead>
      <Tbody>
        {content.map(item => (
          <Tr
            key={JSON.stringify(item)}
            onClick={() => {
              dispatch(changeFavorite(item['#']));
            }}
          >
            <Td isActive={upload.favorite === item['#']}>
              <RadioContainer>
                <Radio isActive={upload.favorite === item['#']}>
                  {upload.favorite === item['#'] && (
                    <FaCheck size={10} color="#fff" />
                  )}
                </Radio>
                <RadioText>{item[Object.keys(item)[0]]}</RadioText>
              </RadioContainer>
            </Td>
            {Object.keys(item)
              .slice(1)
              .map(key => (
                <Td key={key} isActive={upload.favorite === item['#']}>
                  {item[key]}
                </Td>
              ))}
          </Tr>
        ))}
      </Tbody>
    </Container>
  );
};

export default TableRadio;
