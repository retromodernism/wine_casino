import s from "./index.module.scss";
import classnames from "classnames";
import Select, { components } from "react-select";
import { ReactComponent as Loupe } from "./src/loupe.svg";
import { ReactComponent as Loading } from "./src/loading.svg";
import { ReactComponent as XIcon } from "./src/xIcon.svg";
import { ReactComponent as XIcon_tablet } from "./src/xIcon_tablet.svg";
import { useMediaQuery } from "react-responsive";
import { connect } from "react-redux";
import { closeSearchBar } from "../../redux/modules/tabletSearchBar";

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

const customStylesDesktop = {
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

const customStylesTablet = {
  container: (provied, state) => ({
    ...provied,
    fontFamily: "Lato",
    width: "100%",
  }),
  control: (provided, state) => ({
    ...provided,
    border: "unset",
    borderBottom: "2px solid",
    borderColor: "#000000",
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

const DropdownIndicator = connect(null, { closeSearchBar })(
  ({ closeSearchBar, ...props }) => {
    const isDesktop = useMediaQuery({
      query: "screen and (min-width: 1024px)",
    });
    const isTablet = useMediaQuery({
      query: "screen and (min-width: 768px) and (max-width: 1023px)",
    });
    const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

    return isDesktop ? (
      <components.DropdownIndicator {...props}>
        {!props.selectProps.menuIsOpen && !props.hasValue && <Loupe />}
        {!props.hasValue && props.selectProps.menuIsOpen && <Loading />}
        {props.hasValue && (
          <XIcon onClick={props.clearValue} style={{ marginRight: "5px" }} />
        )}
      </components.DropdownIndicator>
    ) : (
      <components.DropdownIndicator {...props}>
        <XIcon_tablet onClick={() => {closeSearchBar(); console.log(123)}} style={{ marginRight: "5px" }} />
      </components.DropdownIndicator>
    );
  }
);

const HeaderSearchBar = ({ className, closeSearchBar }) => {
  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1024px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1023px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  let customStyles;
  if (isDesktop) customStyles = customStylesDesktop;
  if (isTablet) customStyles = customStylesTablet;
  // if (isMobile) customStyles = customStylesMobile;

  return (
    <Select
      components={{ DropdownIndicator }}
      placeholder="Что ищете?"
      options={options}
      styles={customStyles}
    />
  );
};

export default HeaderSearchBar;
