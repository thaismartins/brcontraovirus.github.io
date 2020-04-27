import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;

  ${({ arrows }) =>
    arrows &&
    `
    padding: 2rem 8rem;
  `}

  .slick-track {
    height: auto;
    overflow: hidden;
    display: flex;
  }

  .slick-list {
    padding: 0;
    height: auto;
    overflow: hidden;
  }

  .slick-slide {
    display: inline-flex;
    height: auto;
    overflow: hidden;
    align-items: stretch;
    position: relative;

    &.slick-active {
      z-index: 2;
    }
  }

  .slick-arrow {
    z-index: 3;
  }

  .slick-dots {
    height: 32px;
    text-align: center;
    z-index: 3;

    li {
      width: 0.5rem;
      height: 0.5rem;
      display: inline-block;
      margin: 0.55rem;
      cursor: pointer;

      &.slick-active {
        button {
          &::before {
            background-color: ${({ theme, color }) => theme.colors[color]};
          }
        }
      }

      button {
        width: 0.65rem;
        height: 0.65rem;
        padding: 1px;
        font-size: 0;
        position: relative;
        border: none;
        border-radius: 50%;
        overflow: hidden;

        &::before {
          line-height: 0.75rem;
          width: 0.65rem;
          height: 0.65rem;
          background-color: ${({ theme }) => theme.colors.gray};
          opacity: 1;
          position: absolute;
          top: 0;
          left: 0;
          content: '•';
        }
      }
    }
  }
`

export { Container }
