import styled from 'styled-components';

import { colors } from '../../styles';

const Container = styled.div`
  min-height: 95vh;
  background: #edebe9;

  &:hover {
    box-shadow: 2px 3px 12px -6px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 2px 3px 12px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 3px 12px -6px rgba(0, 0, 0, 0.75);
  }

  .Light {
    &:hover {
      background-color: ${colors.mar};

      svg {
        color: ${colors.whiteDark};
      }
    }
  }
`;

export { Container };
