import { switchMenu } from "./menuButton.service";
import "./MenuButton.css";
import { useDispatch, useSelector } from "react-redux";
import { getMenuSection, setMenuSection } from "../../redux/menuSectionState";

function MenuButton({ buttonName }: { buttonName: string }) {
  const menuSection = useSelector(getMenuSection);
  const dispatch = useDispatch();

  return (
    <>
      <button
        type="button"
        className={`button ${
          menuSection === buttonName ? "button--selected" : "button--unselected"
        }`}
        onClick={() => dispatch(setMenuSection(switchMenu(buttonName)))}
      >
        {buttonName}
      </button>
    </>
  );
}

export default MenuButton;
