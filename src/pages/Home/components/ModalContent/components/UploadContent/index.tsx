import { useCallback, useEffect, useState } from 'react';

import Papa from 'papaparse';

import {
  Container,
  InputFile,
  UploadButton,
  Upload,
  Description,
} from './styles';

type UploadContentProps = {
  onChange(disabled: boolean, error: boolean): void;
};

const UploadContent = ({ onChange }: UploadContentProps) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const toggleError = useCallback(() => {
    setError(!error);
    setDisabled(!error);
  }, [error]);

  console.log(toggleError);

  useEffect(() => {
    onChange(disabled, error);
  }, [disabled, error, onChange]);

  const handleChange = (files: FileList | null) => {
    if (files) {
      Papa.parse(files[0], {
        complete: result => {
          const { data } = result;
          console.log(data);
        },
        header: true,
      });
    }
  };

  return (
    <Container>
      <div style={{ height: 23 }} />
      <Upload>
        <InputFile
          id="upload"
          hidden
          type="file"
          onChange={e => handleChange(e.target.files)}
        />
        <UploadButton htmlFor="upload">Select File</UploadButton>
      </Upload>

      <Description>File must be in .csv format</Description>
    </Container>
  );
};

export default UploadContent;
