import { useDispatch, useSelector } from 'react-redux';

import { FaTimes, FaTimesCircle, FaCheck } from 'react-icons/fa';

import UploadButton from 'components/UploadButton';
import Input from 'components/Input';

import { selectUpload, changeName } from 'store/features/upload/uploadSlice';

import {
  Container,
  Description,
  Filename,
  FilenameText,
  ErrorLabel,
  ErrorLabelText,
  Title,
} from './styles';

const UploadDefault = () => {
  return (
    <Container>
      <div style={{ height: 23 }} />
      <UploadButton>Select File</UploadButton>
      <div style={{ height: 28 }} />
      <Description>File must be in .csv format</Description>
    </Container>
  );
};

const UploadError = () => {
  const upload = useSelector(selectUpload);

  return (
    <Container>
      <div style={{ height: 23 }} />

      <Filename>
        <FilenameText>{upload.filename}</FilenameText>
        <FaTimes size={16} color="#FF0000" />
      </Filename>

      <div>
        <div style={{ height: 18 }} />
        <ErrorLabel>
          <FaTimesCircle size={16} color="#FF0000" />
          <ErrorLabelText>Missing Value</ErrorLabelText>
        </ErrorLabel>
        <div style={{ height: 10 }} />
      </div>

      <Description>
        One of records has a missing value for one of the columns. Please ensure
        your .csv has complete information.
      </Description>
    </Container>
  );
};

const UploadSuccess = () => {
  const dispatch = useDispatch();
  const upload = useSelector(selectUpload);

  return (
    <Container>
      <div style={{ height: 23 }} />

      <Filename>
        <FilenameText>{upload.filename}</FilenameText>
        <FaCheck size={16} color="#2F54D0" />
      </Filename>

      <div style={{ height: 30 }} />
      <Title>Team Name</Title>
      <div style={{ height: 30 }} />

      <Input
        value={upload.name}
        onChange={e => dispatch(changeName(e.target.value))}
        placeholder="Name"
      />
    </Container>
  );
};

const UploadContent = () => {
  const upload = useSelector(selectUpload);

  if (upload.error) {
    return <UploadError />;
  }

  if (upload.file) {
    return <UploadSuccess />;
  }

  return <UploadDefault />;
};

export default UploadContent;
