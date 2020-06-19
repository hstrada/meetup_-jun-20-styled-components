import React from 'react';

import styled from 'styled-components/native';

interface Props {
  bold?: boolean;
}

const Title = styled.Text<Props>`
  ${({ bold }) => bold && { 'font-weight': 'bold' }};
`;

const Typography = () => {
  return <Title bold={true}>Hello World</Title>;
};

export default Typography;
