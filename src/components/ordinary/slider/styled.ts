import styled from 'styled-components';

export const SliderStyled = styled.figure<{ length: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-height: 696px;
  width: 445px;
  z-index: 0;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .mySwiper2 {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.greyBlack40};
  }

  .mySwiper {
    height: 14.5%;
    box-sizing: border-box;

    .swiper-wrapper {
      justify-content: ${({ length }) => (length > 4 ? 'start' : 'center')};
      align-items: center;
    }

    .swiper-slide {
      width: 10%;
      height: 100%;
      border: 1px solid ${({ theme }) => theme.colors.greyBlack40};
      border-radius: 3px;
      overflow: hidden;
      margin-right: 30px !important;
    }

    .swiper-slide-thumb-active {
      border: 1px solid ${({ theme }) => theme.colors.primary};
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-slide {
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.media.large}) {
    gap: 20px;
    min-height: 238px;
    width: 136px;

    .mySwiper {
      box-sizing: border-box;
      height: 26px;

      .swiper-wrapper {
        justify-content: center;
      }

      .swiper-slide {
        background: ${({ theme }) => theme.colors.greyBlack40};
        border: none;
        margin: 8px !important;
        border-radius: 50%;
        width: 7px !important;
        height: 7px !important;
        align-items: center;
        img {
          display: none;
        }
      }

      .swiper-slide-thumb-active {
        background: ${({ theme }) => theme.colors.dark};
        width: 9px !important;
        height: 9px !important;
      }
    }

    .mySwiper2 {
      border-radius: 3px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.large}) {
    gap: 20px;
    min-height: 300px;
    width: 136px;

    .mySwiper {
      box-sizing: border-box;
      height: 26px;
    }

    .mySwiper2 {
      border-radius: 10px;
    }
  }
`;
