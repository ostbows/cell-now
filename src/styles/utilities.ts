import { css } from '@emotion/css';

export const container = css`
  max-width: 1100px;
  margin: 0 auto;
  overflow: auto;
  padding: 0 40px;
`;

export const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const grid = ({repeat = 2}: {repeat: number}) => css`
  display: grid;
  grid-template-columns: repeat(${repeat}, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const cart = css`
  background-color: #fff;
  color: var(--dark-color);
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.2);
  padding: 20px;
  margin: 10px;
`;

export const btn = (
  {outline, light, primary, small}: {outline?: boolean, light?: boolean, primary?: boolean, small?: boolean}
) => css`
  display: inline-block;
  padding: 10px 30px;
  cursor: pointer;
  background: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
  ${outline ? `
    background-color: transparent;
    border: 1px #fff solid;
  ` : ''}
  ${light ? `
    color: var(--dark-color);
    border-color: var(--primary-color);
  ` : ''}
  ${primary ? `
    background-color: var(--primary-color);
    color: #fff;
  ` : ''}
  ${small ? `
    padding: 5px 15px;
  ` : ''}
`;

export const borderTop = css`
  border-top: 1px solid var(--border-color);
`;

export const textCenter = css`
  text-align: center;
`;

export const my1 = css`
  margin: 1rem 0;
`;
