import styled from "styled-components";



export const ArrowDown = styled.div`
  width: 8px;
  height: 8px;
  position: relative;
  top: ${(props) => props.top};
  margin-left: 8px;
  border: solid ${(props) => props.color};
  border-width: 0 1px 1px 0;
  transform: rotate(45deg);
  transition: all 0.2s ease-out;
  @media (max-width: 1500px) {
    flex-direction: column;
    
    
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;



export const ShopByCategorySection = styled.section`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  border: 1px solid #eee;

  .on-sidebar-show {
    display: none;
  }

  @media screen and (max-width: 1500px) {
    width: 30%;
    height: 100vh;
    position: absolute;
    flex-direction: column;
    align-items: start;
    top: -76px;
    left: ${(props) => props.left};
    z-index: 12000;
    background-color: #fff;
    transition: all 0.3s ease;
    @media (max-width: 1500px) {
      flex-direction: column;
    }
    @media (max-width: 800px) {
      flex-direction: column;
    }

    > div {
      width: 100%;
      font-size: 12px;
      font-weight: 500;
      border-bottom: 1px solid #dedede;
      @media (max-width: 1500px) {
        flex-direction: column;
      }
      @media (max-width: 800px) {
        flex-direction: column;
      }
    }

    .on-sidebar-show {
      width: 100%;
      position: relative;
      display: inline-block;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      padding: 8px 10px;
      color: white;
      background-color: #84c225;

      a {
        color: white;
        font-weight: 600;
        text-decoration: none;
      }
    }

    .close-modal {
      width: 28px;
      height: 28px;
      cursor: pointer;
      position: relative;
      background-color: rgb(255, 255, 255, 0.7);
      border-radius: 50%;
    }
    .close-modal span {
      width: 2px;
      height: 20px;
      position: absolute;
      top: 4px;
      right: 13px;
      background-color: #84c225;
    }
    .close-modal span:nth-child(1) {
      transform: rotate(45deg);
    }
    .close-modal span:nth-child(2) {
      transform: rotate(-45deg);
    }
  }

  > div {
    font-size: 15px;
    padding: 8px 6px;
    line-height: 20px !important;
  }

  .shop-by-category,
  .offers,
  .bb-specialty {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 5px;
    cursor: pointer;
  }

  .shop-by-category {
    position: relative;
    width: 245px;
    font-weight: bold;
    color: white;
    background-color: #012652;

    .show-category {
      display: none;
      width: 1145px;
      top: 100%;
      left: 0;
    }
    :hover {
      .show-category {
        display: block;
      }
    }
  }

  .offers {
    color: #666;
    font-size: 14px;
    i {
      width: 15px;
      height: 15px;
      display: inline-block;
      margin-right: 5px;
      background-image: url(https://www.bbassets.com/static/v2530/custPage/build/content/img/header.css.svg);
      background-position: 60.281858250815965% 60.23102310231023%;
    }
  }
  .bb-specialty:hover{
    color:white ;
  }

  .bb-specialty {
    color: #666;
    font-size: 14px;
    i {
      width: 20.16px;
      height: 15px;
      display: inline-block;
      margin-right: 5px;
      // background-image: url(https://www.bbassets.com/bb2assets/images/png/Wallet.png);
      background-position: 16.173811611102742% 14.851485148514852%;
    }
  }
  

  .offers,
  .bb-specialty {
    :hover {
      background-color: #012652;
      color:white;
    }
  }
`;



export const ShopSection = styled.section`
  position: relative;
  top: 5px;
  left: -120%;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
  }

  .favour {
    width: 100%;
    height: 35px;
    background-color: transparent;
  }

  .show-category {
    width: 1160px;
    display: none;
    top: 90%;
    left: -180%;
    transition: all 0.5s ease-in-out;
  }
  :hover {
    .show-category {
      display: block;
    }
  }

  @media screen and (max-width: 870px) {
    display: none;
  }
`;

export const CategoryDiv = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  z-index: 1000;
  box-shadow: 0 2px 4px 0 #b5b5b5 !important;
  background-color: #fff;

  .open-default {
    display: block !important;
  }

  > .top_category {
    width: 250px;
    line-height: 1.6rem;
    text-align: left;
    color: #555;

    > li {
      font-size: 13px;
      padding: 7px 0 7px 7px;
      border-bottom: 1px solid #eee;

      a {
        text-decoration: none;
      }
      span {
        width: 100%;
        display: inline-block;
        color: #555;
      }

      :hover {
        background-color: #eaeaea;

        .sub_category {
          display: block;
        }
      }

      .sub_category,
      .sub_sub_category,
      .popular_search {
        display: none;
        width: 20%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 21%;
        line-height: 1rem;
        padding: 5px 0 0 12px;
        background-color: #eaeaea;
        transition: all 0.3s ease;
      }
      .sub_category,
      .sub_sub_category,
      .popular_search {
        > li {
          font-size: 12px;
          padding: 7px 0 7px 7px;
        }
      }
      .sub_category {
        > li {
          :hover {
            background-color: white;

            .sub_sub_category,
            .popular_search {
              display: block;
            }
          }
        }
      }

      .sub_sub_category,
      .popular_search {
        width: 100%;
        left: 100%;
        background-color: white;
      }
      .sub_sub_category {
        > li {
          :hover {
            color: #84c225;
          }
        }
      }

      .popular_search {
        padding-top: 0;
        left: 200%;
      }
      li.popular_search_title {
        font-size: 15px;
        color: #84c225;
      }
    }
  }
`;

