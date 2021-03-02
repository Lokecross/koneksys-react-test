import Papa from 'papaparse';

import { Container, InputFile, UploadLabel } from './styles';

type CsvJsonProps = Array<{ [U: string]: string }>;

type UploadContentProps = {
  onChange(file: CsvJsonProps, filename: string, error: boolean): void;
  children: JSX.Element | string;
};

const UploadFile = ({ onChange, children }: UploadContentProps) => {
  const validateFile = (jsonFile: CsvJsonProps): { valid: boolean } => {
    let valid = true;

    Object.keys(jsonFile[0]).forEach(key => {
      jsonFile.forEach(item => {
        if (!item[key]) {
          valid = false;
        }
      });
    });

    return { valid };
  };

  const handleChange = (files: FileList | null) => {
    if (files) {
      Papa.parse(files[0], {
        complete: ({ data }: { data: CsvJsonProps }) => {
          if (validateFile(data).valid) {
            onChange(data, files[0].name, false);
          } else {
            onChange(data, files[0].name, true);
          }
        },
        header: true,
      });
    }
  };

  return (
    <Container>
      <InputFile
        id="upload"
        hidden
        type="file"
        onChange={e => handleChange(e.target.files)}
      />
      <UploadLabel htmlFor="upload">{children}</UploadLabel>
    </Container>
  );
};

export default UploadFile;
