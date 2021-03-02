import { useState } from 'react';

import { FaTimes, FaTimesCircle } from 'react-icons/fa';

import UploadButton from 'components/UploadButton';

import {
  Container,
  Description,
  ErrorField,
  ErrorText,
  ErrorLabel,
  ErrorLabelText,
} from './styles';

type CsvJsonProps = Array<{ [U: string]: string }>;

type UploadContentProps = {
  onChange(disabled: boolean, error: boolean): void;
};

const UploadContent = ({ onChange }: UploadContentProps) => {
  const [file, setFile] = useState<CsvJsonProps | null>(null);
  const [filename, setFilename] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  return (
    <Container>
      <div style={{ height: 23 }} />

      {error ? (
        <ErrorField>
          <ErrorText>{filename}</ErrorText>
          <FaTimes size={16} color="#FF0000" />
        </ErrorField>
      ) : (
        <UploadButton
          onChange={(newFile, newFilename, newError) => {
            setFile(newFile);
            setFilename(newFilename);
            setError(newError);

            onChange(newError, newError);
          }}
        >
          Select File
        </UploadButton>
      )}

      {error ? (
        <div>
          <div style={{ height: 18 }} />
          <ErrorLabel>
            <FaTimesCircle size={16} color="#FF0000" />
            <ErrorLabelText>Missing Value</ErrorLabelText>
          </ErrorLabel>
          <div style={{ height: 10 }} />
        </div>
      ) : (
        <div style={{ height: 28 }} />
      )}

      <Description>
        {error
          ? 'One of records has a missing value for one of the columns. Please ensure your .csv has complete information.'
          : 'File must be in .csv format'}
      </Description>
    </Container>
  );
};

export default UploadContent;
