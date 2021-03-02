import { useSelector } from 'react-redux';

import { FaTimes, FaTimesCircle } from 'react-icons/fa';

import UploadButton from 'components/UploadButton';

import { selectUpload } from 'store/features/upload/uploadSlice';

import {
  Container,
  Description,
  ErrorField,
  ErrorText,
  ErrorLabel,
  ErrorLabelText,
} from './styles';

const UploadContent = () => {
  const upload = useSelector(selectUpload);

  return (
    <Container>
      <div style={{ height: 23 }} />

      {upload.error ? (
        <ErrorField>
          <ErrorText>{upload.filename}</ErrorText>
          <FaTimes size={16} color="#FF0000" />
        </ErrorField>
      ) : (
        <UploadButton>Select File</UploadButton>
      )}

      {upload.error ? (
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
        {upload.error
          ? 'One of records has a missing value for one of the columns. Please ensure your .csv has complete information.'
          : 'File must be in .csv format'}
      </Description>
    </Container>
  );
};

export default UploadContent;
