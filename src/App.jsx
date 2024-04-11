import Button from "./components/Button";
import FirstModal from "./components/Modal/FirstModal";
import SecondModal from "./components/Modal/SecondModal";
import { useState } from "react";
import PropTypes from "prop-types";

function App({
  header,
  close,
  image,
  openModal,
  nameBtn,
  content,
  firstText,
  secondaryText,
  firstClick,
  secondaryClick,
}) {
  const [isOpenFirst, setIsOpenFirst] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  return (
    <>
      <div className="body">
        <Button
          openModal={() => {
            setIsOpenFirst(true);
          }}
          nameBtn="Open first modal"
        />
        <Button
          openModal={() => {
            setIsOpenSecond(true);
          }}
          nameBtn="Open second modal"
        />
      </div>

      {isOpenFirst && (
        <FirstModal
          header="Product Delete!"
          close={() => {
            setIsOpenFirst(false);
          }}
          image="https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png"
          content="By clicking the “Yes, Delete” button, PRODUCT NAME will be deleted."
          firstText="NO, CANCE"
          secondaryText="YES, DELETE"
          firstClick={() => {
            setIsOpenFirst(false);
          }}
          secondaryClick={() => {
            setIsOpenFirst(false);
          }}
        />
      )}
      {isOpenSecond && (
        <SecondModal
          header="Add Product “NAME”"
          close={() => {
            setIsOpenSecond(false);
          }}
          content="Description for you product"
          firstText="ADD TO FAVORITE"
          firstClick={() => {
            setIsOpenSecond(false);
          }}
        />
      )}
    </>
  );
}
 

App.propTypes = {
  openModal: PropTypes.func.isRequired,
  nameBtn: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  firstText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  firstClick: PropTypes.func.isRequired,
  secondaryClick: PropTypes.func.isRequired
};
export default App;
