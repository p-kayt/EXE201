import React from "react";

import addCircleBold from "../assets/icons/add-circle-bold.svg";
import searchIcon from "../assets/icons/search-linear.svg";

import DropdownSearchBar from "../components/dropdown/DropdownSearchBar";
import Dropdown from "../components/dropdown/Dropdown";

import Avatar from "../components/avatar/Avatar";
import Hearder from "../components/header/Hearder";
import Footer from "../components/footer/Footer";
import TabBar from "../components/tabs/TabBar";
import { ToastContainer, toast } from "react-toastify";
import NewButton from "../components/button/NewButton";

const TempComponent = () => {
  const displayToast = () => {
    toast("aaa");
  };
  return (
    <>
      <Hearder />
      {/* ---------------normal button-------------------------------------------- */}
      <div style={{ width: "100px", margin: "20px" }}>
        <NewButton
          theme="light"
          enabled={false}
          btnText="ss"
          onClick={() => console.log("a")}
        />
      </div>
      {/* -------------stripe button---------------------------------------------- */}
      <div style={{ width: "100px", margin: "20px" }}>
        <NewButton
          theme="stripe"
          enabled={true}
          btnText="ss"
          onClick={() => console.log("a")}
        />
      </div>
      {/* -------------color normal button---------------------------------------------- */}
      <div style={{ width: "100px", margin: "20px" }}>
        <NewButton
          theme="light"
          enabled={true}
          color={"#FECE00"}
          btnText="ss"
          onClick={() => console.log("a")}
        />
      </div>
      {/* -------------color stripe button---------------------------------------------- */}
      <div style={{ width: "100px", margin: "20px" }}>
        <NewButton
          theme="stripe"
          enabled={false}
          color={"#FECE00"}
          btnText="ss"
          onClick={() => console.log("a")}
        />
      </div>

      {/* -------------icon button with text---------------------------------------------- */}
      <div style={{ width: "100px", margin: "20px" }}>
        <NewButton
          theme="light"
          enabled={true}
          iconSrc={addCircleBold}
          btnText="ss"
          onClick={() => console.log("a")}
        />
      </div>

      {/* -------------icon button no text---------------------------------------------- */}
      <div style={{ width: "100px", margin: "20px" }}>
        <NewButton
          theme="light"
          enabled={true}
          iconSrc={addCircleBold}
          onClick={() => console.log("a")}
        />
      </div>
      {/* -------------button with img with text---------------------------------------------- */}
      <div style={{ width: "100px", margin: "20px" }}>
        <NewButton
          theme="light"
          enabled={true}
          imgSrc="https://www.arsenal.com/sites/default/files/shorthand/stories/R7nKRzpKMp/2023-05-15T13%3A02%3A04.201Z/assets/x0FLXAhH2V/gettyimages-1488192786_enhanced-750x500.jpg"
          imgSize={32} /* default 32*/
          imgOptions={"rounded"} /* required to display*/
          btnText="aaaa"
          onClick={() => console.log("a")}
        />
      </div>
      {/* -------------button with img no text---------------------------------------------- */}
      <div style={{ width: "100px", margin: "20px" }}>
        <NewButton
          theme="light"
          enabled={true}
          imgSrc="https://www.arsenal.com/sites/default/files/shorthand/stories/R7nKRzpKMp/2023-05-15T13%3A02%3A04.201Z/assets/x0FLXAhH2V/gettyimages-1488192786_enhanced-750x500.jpg"
          imgSize={32} /* default 32*/
          imgOptions={"rounded"} /* required to display*/
          onClick={() => console.log("a")}
        />
      </div>
      {/* ----------------------------------------------------------- */}
      <div className="search-bar">
        <img src={searchIcon} alt="" />
        <input placeholder="Search"></input>
      </div>
      {/* ----------------------------------------------------------- */}
      <br />
      <DropdownSearchBar />
      <br />
      {/* ----------------------------------------------------------- */}
      <Dropdown
        dropdownText="Dropdown"
        valueList={[
          "Dropdown item 1",
          "Dropdown item 2",
          "Dropdown item 3",
          "Dropdown item 4",
        ]}
        selectedItem={"Dropdown item 1"}
      />
      {/* ----------------------------------------------------------- */}
      <div style={{ margin: "10px" }}>
        <TabBar
          valueList={["Tab 1", "Tab 2", "Tab 3", "Tab 4"]}
          selectedItem={"Tab 1"}
        />
      </div>
      {/* ----------------------------------------------------------- */}
      <div>Mini kit</div>
      <div>Chips</div>
      {/* ----------------------------------------------------------- */}
      <Avatar
        source="https://www.arsenal.com/sites/default/files/shorthand/stories/R7nKRzpKMp/2023-05-15T13%3A02%3A04.201Z/assets/x0FLXAhH2V/gettyimages-1488192786_enhanced-750x500.jpg"
        size={32}
        type={"rounded"}
      />
      {/* ----------------------------------------------------------- */}
      <div className="card" style={{ width: "200px", margin: "20px" }}>
        <span>
          <div>content</div>
        </span>
      </div>
      {/* ----------------------------------------------------------- */}
      <div>
        <button onClick={() => displayToast()}>Display Toast</button>
      </div>
      <Footer />
    </>
  );
};

export default TempComponent;
