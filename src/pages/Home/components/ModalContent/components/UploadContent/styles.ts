import styled from 'styled-components';

export const Container = styled.div``;

export const UploadButton = styled.label`
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  color: #2f54d0;
  padding: 8px 16px;
  margin-right: 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

export const Description = styled.div`
  color: #000000;
  font-size: 14px;
  font-weight: 400;
`;

export const Filename = styled.div`
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 8px 13px 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min-content;
  min-width: 323px;
`;

export const FilenameText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #000;
`;

export const ErrorLabel = styled.div`
  display: flex;
  align-items: center;
  width: min-content;
`;

export const ErrorLabelText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #000;
  margin-left: 8px;
  white-space: nowrap;
`;

export const Title = styled.div`
  color: #000000;
  font-size: 14px;
  font-weight: 500;
`;
