import styled from 'styled-components';
import { colors, dimensions } from 'modules/common/styles';
import { ActionButtons } from '../../styles';

const RowArticle = styled.div`
  background-color: ${colors.colorWhite};
  margin-bottom: ${dimensions.unitSpacing}px;
  padding: 20px 20px 20px 30px;
  overflow: hidden;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  i {
    color: ${colors.colorCoreGray};
  }

  &:hover {
    ${ActionButtons} {
      transform: translate(0px);
    }
  }
`;

const ArticleTitle = styled.h5`
  font-weight: bold;
  font-size: 14px;
  margin: 0 0 ${dimensions.unitSpacing}px;

  span {
    margin-left: ${dimensions.unitSpacing}px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const ArticleColumn = styled.div`
  flex: 1;
`;

const ArticleMeta = styled.div`
  font-size: 11px;
  color: ${colors.colorCoreGray};
  display: flex;
  align-items: center;

  img {
    width: ${dimensions.coreSpacing}px;
    height: ${dimensions.coreSpacing}px;
    line-height: ${dimensions.coreSpacing}px;
    border-radius: ${dimensions.coreSpacing / 2}px;
  }

  i,
  img {
    margin-right: ${dimensions.unitSpacing / 2}px;
  }
`;

const AuthorName = styled.span`
  font-weight: 500;
  color: ${colors.colorCoreDarkGray};
  margin: 0 20px 0 5px;
`;

export {
  ActionButtons,
  RowArticle,
  ArticleTitle,
  ArticleColumn,
  ArticleMeta,
  AuthorName
};
