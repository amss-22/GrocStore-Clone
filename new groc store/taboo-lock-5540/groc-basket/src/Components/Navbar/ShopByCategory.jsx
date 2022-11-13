import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowDown } from "./HeaderElement";
import { BiWallet } from 'react-icons/bi'
import {
  CategoryDiv,
  ShopByCategorySection,
  ShopSection,
} from "./HeaderElement";
import categoryData from "./category.json";

export const ShopByCategory = ({ sidebar, setSidebar }) => {

  const navigate=useNavigate()



  return (
    <ShopByCategorySection
      left={sidebar ? "0%" : "-100%"}
      className="nav-category cats"
    >
      {sidebar && (
        <>
          <div className="on-sidebar-show">
            <Link to="/big-basket">HOME</Link>
            <div className="close-modal" onClick={() => setSidebar(!sidebar)}>
              <span></span>
              <span></span>
            </div>
          </div>
          <div>SHOP BY CATEGORY</div>
          <div>OFFERS</div>
          <div>BB EXPRESS</div>
          <div>BB SPECIALITY STORES</div>
          <div>MORE SHOPS</div>
        </>
      )}
      {!sidebar && (
        <>
          <div className="shop-by-category">
            <span>SHOP BY CATEGORY</span>
            <ArrowDown top="-3px" />
            <TopCategory categoryData={categoryData} />
          </div>
          <div className="offers">
            <i></i>
            <span>OFFERS</span>
          </div>
          <div onClick={()=>navigate("/wallet")} className="bb-specialty">
            
              <BiWallet  color={"black"} size={20}/>
            
            <span>BB WALLET</span>
          </div>
        </>
      )}
    </ShopByCategorySection>
  );
};

export const Shop = () => {
  return (
    <>
      <ShopSection>
        <div>
          <span>SHOP</span>
          <ArrowDown top="-3px" />
        </div>
        <div className="favour"></div>
        <TopCategory categoryData={categoryData} />
      </ShopSection>
    </>
  );
};

const TopCategory = ({ categoryData }) => {
  const [openDefault, setOpenDefault] = useState(true);

  return (
    <CategoryDiv className="show-category">
      <ul className="top_category">
        {categoryData.topcats.map((topItem, index) => (
          <li className="top_category_item" key={topItem.top_category.name}>
            <Link to="/product">
              <span>{topItem.top_category.name}</span>
            </Link>
            <SubCategory
              openDefault={index === 0 ? openDefault : false}
              subItems={topItem.sub_cats}
            />
          </li>
        ))}
      </ul>
    </CategoryDiv>
  );
};

const SubCategory = ({ subItems, openDefault }) => {
  return (
    <ul className={openDefault ? "sub_category open-default" : "sub_category"}>
      {subItems.map((subItem) => (
        <li className="sub_category_item" key={subItem.sub_category[0]}>
          {subItem.sub_category[0]}
          <SubSubCategory
            openDefault={openDefault ? openDefault : false}
            subSubItems={subItem.cats}
          />
          <PopularSearchTerms
            openDefault={openDefault ? openDefault : false}
            PopularSearchItems={subItem.search_term}
          />
        </li>
      ))}
    </ul>
  );
};

const SubSubCategory = ({ subSubItems, openDefault }) => {
  return (
    <ul
      className={
        openDefault ? "sub_sub_category open-default" : "sub_sub_category"
      }
    >
      {subSubItems.map((subSubItem) => (
        <li className="sub_sub_category_item" key={subSubItem.cat[0]}>
          {subSubItem.cat[0]}
        </li>
      ))}
    </ul>
  );
};

const PopularSearchTerms = ({ PopularSearchItems, openDefault }) => {
  return (
    <ul
      className={openDefault ? "popular_search open-default" : "popular_search"}
    >
      <li className="popular_search_title">Popular Searches</li>
      {PopularSearchItems.map((searchTerm) => (
        <li className="popular_search_item" key={searchTerm.display_term}>
          {searchTerm.display_term}
        </li>
      ))}
    </ul>
  );
};