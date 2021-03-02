import Papa from 'papaparse';
import { useDispatch } from 'react-redux';
import { uploadFinish } from 'store/features/upload/uploadSlice';

import { Container, InputFile, UploadLabel } from './styles';

type CsvJsonProps = Array<{ [U: string]: string }>;

type UploadContentProps = {
  children: JSX.Element | string;
};

const UploadFile = ({ children }: UploadContentProps) => {
  const dispatch = useDispatch();

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
            dispatch(
              uploadFinish({
                file: data,
                filename: files[0].name,
                error: false,
              }),
            );
          } else {
            dispatch(
              uploadFinish({
                file: data,
                filename: files[0].name,
                error: true,
              }),
            );
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
