import s from "./index.module.scss";
import classnames from "classnames";
import Select, { components } from "react-select";
import { ReactComponent as Loupe } from "./src/loupe.svg";
import { ReactComponent as Loading } from "./src/loading.svg";
import { ReactComponent as XIcon } from "./src/xIcon.svg";

const options = [
  { value: "craps", label: "крэпс" },
  { value: "online casino", label: "онлайн казино" },
  { value: "wine casino", label: "Винное казино" },
  { value: "Cheese casino", label: "Сырное казино" },
  { value: "Chocolate casino", label: "Шоколадное казино" },
  { value: "Chocolate casino1", label: "Шоколадное казино1" },
  { value: "Chocolate casino2", label: "Шоколадное казино2" },
  { value: "Chocolate casino3", label: "Шоколадное казино3" },
  { value: "Chocolate casino4", label: "Шоколадное казино4" },
];

const customStyles = {
  container: (provied, state) => ({
    ...provied,
    fontFamily: "Lato",
  }),
  control: (provided, state) => ({
    ...provided,
    border: "1px solid",
    borderColor: "#323232",
    boxShadow: "none",
    borderRadius: "unset",
    "&:hover": {
      borderColor: "#323232",
    },
  }),
  option: (provided) => ({
    ...provided,
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.02)",
    },
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: "none",
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "22px",
    color: "#323232",
    opacity: 0.7,
  }),
  input: (provided, state) => ({
    ...provided,
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "22px",
    color: "#323232",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "22px",
    color: "#323232",
  }),
  menu: (provided, state) => ({
    ...provided,
    top: "calc(100% - 8px)",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "22px",
    color: "#ffffff",
    backgroundColor: "#323232",
    borderRadius: 0,
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: "6px 8px",
  }),
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      {!props.selectProps.menuIsOpen && !props.hasValue && <Loupe />}
      {!props.hasValue && props.selectProps.menuIsOpen && <Loading />}
      {props.hasValue && (
        <XIcon onClick={props.clearValue} style={{ marginRight: "5px" }} />
      )}
    </components.DropdownIndicator>
  );
};

const HeaderSearchBar = ({ className }) => {
  return (
    <form
      className={classnames(className, s.searchBar)}
      onSubmit={() => alert("Search!")}
    >
      <Select
        components={{ DropdownIndicator }}
        placeholder="Что ищете?"
        options={options}
        styles={customStyles}
      />
    </form>
  );
};

export default HeaderSearchBar;
