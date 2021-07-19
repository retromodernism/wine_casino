import Popup from "../popup";
import s from "./index.module.scss";
import { ReactComponent as Success } from "./src/success.svg";
import { ReactComponent as XIcon } from "./src/xIcon.svg";
import { closeCartSuccessPopup } from "../../redux/modules/popup";
import { connect } from "react-redux";

const CartSuccessPopup = ({ closeCartSuccessPopup, ...props }) => {
  return (
    <Popup
      onClick={(e) => {
        const clickOnBackground = e.target.getAttribute("name") === "popup";
        if (clickOnBackground) {
          closeCartSuccessPopup();
        }
      }}
    >
      <div className={s.cartSuccessPopup}>
        <button className={s._closeIcon} onClick={closeCartSuccessPopup}>
          <XIcon />
        </button>
        <div className={s._content}>
          <div className={s._title}>Заявка отправлена</div>
          <div className={s._desciption}>
            Среднее время рассмотрения составляет до 5 минут
          </div>
          <Success />
        </div>
      </div>
    </Popup>
  );
};

export default connect(null, { closeCartSuccessPopup })(CartSuccessPopup);
