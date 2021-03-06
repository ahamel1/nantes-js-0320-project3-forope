import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Flex, Content, Italic, Subtitle } from '../mainStyle';

const PartTitle = styled.h3`
  color: ${(props) => props.theme.mediumGreen};
  font-size: 24px;
`;

const TitleContext = styled.h2`
  font-size: 28px;
  color: ${(props) => props.theme.mediumGreen};
  margin: 3rem 6rem;
`;

const ContainerFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

export default function Context({
  subtitle,
  firstTitle,
  content1,
  quote1,
  quote2,
  quote3,
}) {
  return (
    <>
      <TitleContext>{subtitle}</TitleContext>
      <Content>
        <ContainerFlex col>
          <Flex col>
            <PartTitle>{firstTitle}</PartTitle>
            <Subtitle>{content1}</Subtitle>
          </Flex>
          <Flex col>
            <Italic>{quote1}</Italic>
            <Italic>{quote2} </Italic>
            <Italic>{quote3}</Italic>
          </Flex>
        </ContainerFlex>
        <ContainerFlex col>
          <img src="https://via.placeholder.com/200" alt="illustration" />
        </ContainerFlex>
      </Content>
    </>
  );
}

Context.propTypes = {
  subtitle: PropTypes.string.isRequired,
  firstTitle: PropTypes.string.isRequired,
  content1: PropTypes.string.isRequired,
  quote1: PropTypes.string.isRequired,
  quote2: PropTypes.string.isRequired,
  quote3: PropTypes.string.isRequired,
};
