import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;

  ${({ arrows }) =>
    arrows &&
    `
    padding: 0 6rem;
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
      width: 8px;
      height: 8px;
      margin-top: 13px;
      display: inline-block;
      margin: 4px;

      &.slick-active {
        button {
          &::before {
            background-color: ${({ theme, color }) => theme.colors[color]};
          }
        }
      }

      button {
        width: 8px;
        height: 8px;
        padding: 1px;
        font-size: 0;
        position: relative;
        border: none;
        border-radius: 50%;
        overflow: hidden;

        &::before {
          line-height: 10px;
          width: 8px;
          height: 8px;
          background-color: #dddddd;
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
