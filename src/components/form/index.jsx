import s from "./index.module.scss";
import cx from "classnames";
import InputMask from "react-input-mask";
import { useState } from "react";

const Form = (props) => {
  /* Form State */
  const [formSuccess, setFormSuccess] = useState(false);
  const openSuccess = setFormSuccess.bind(null, true);

  const [wrongNameInput, setWrongNameInput] = useState(false);
  const [wrongPhoneInput, setWrongPhoneInput] = useState(false);

  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");

  const validateName = () => formName.length > 3;
  const reg =
    /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/;
  const validatePhone = () => reg.test(formPhone);

  const handleNameInputChange = (e) => {
    setFormName(e.target.value);
  };

  const handlePhoneInputChange = (e) => {
    setFormPhone(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const nameInputIsCorrect = validateName();
    const phoneInputIsCorrect = validatePhone();

    const validationPassed = nameInputIsCorrect && phoneInputIsCorrect;

    if (!nameInputIsCorrect) {
      setWrongNameInput(true);
    } else {
      setWrongNameInput(false);
    }

    if (!phoneInputIsCorrect) {
      setWrongPhoneInput(true);
    } else {
      setWrongPhoneInput(false);
    }

    if (validationPassed) {
      openSuccess();
    }
  };

  return (
    <section className={s.form}>
      {formSuccess ? (
        <div className={s._success}>
          <h2 className={s._title}>Оставьте заявку</h2>
          <p className={s._subtitle}>Заявка отправлена</p>
          <p className={s._description}>
            Наш менеджер свяжется с вами в ближайшее время
          </p>
        </div>
      ) : (
        <form className={s._form} onSubmit={handleFormSubmit}>
          <h2 className={s._title}>Оставьте заявку</h2>
          <p className={s._description}>
            Оставляйте заявку и наши менеджеры проконсультуруют и помогут
            подобрать оптимальное решение для вашего корпоратива.
          </p>
          <label>
            <input
              type="text"
              className={cx(s._input, s._input_text, {
                [s._input_error]: wrongNameInput,
              })}
              placeholder="Ваше имя"
              onChange={(e) => {
                setFormName(e.target.value);
              }}
            />
          </label>
          <label>
            <InputMask
              mask="+7 999 999 99 99"
              maskChar=" "
              type="text"
              className={cx(s._input, s._input_text, {
                [s._input_error]: wrongPhoneInput,
              })}
              placeholder="Ваш телефон"
              onChange={(e) => {
                setFormPhone(e.target.value);
              }}
            />
          </label>
          <label>
            <input
              type="submit"
              className={cx(s._input, s._input_submit)}
              value="Отправить"
            />
          </label>
        </form>
      )}
    </section>
  );
};

export default Form;
