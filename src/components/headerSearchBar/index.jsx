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
import { useHistory } from "react-router";

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
  option: (provided, state) => ({
    ...provided,
    backgroundColor: "none",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
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
  option: (provided, state) => ({
    ...provided,
    backgroundColor: "none",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
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
      query: "screen and (min-width: 1300px)",
    });
    const isTablet = useMediaQuery({
      query: "screen and (min-width: 768px) and (max-width: 1299px)",
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
        <XIcon_tablet
          onClick={() => {
            closeSearchBar();
          }}
          style={{ marginRight: "5px", height: isMobile ? "20px" : "auto" }}
        />
      </components.DropdownIndicator>
    );
  }
);

const NoOptionsMessage = (props) => {
  return (
    <components.NoOptionsMessage {...props}>
      <span>Ничего не найдено</span>
    </components.NoOptionsMessage>
  );
};

const HeaderSearchBar = ({ casinos, className, closeSearchBar }) => {
  /* Options */
  const casinosPages = casinos.map(({ title, url }) => ({
    label: title,
    value: url,
  }));

  const options = [
    ...casinosPages,
    { value: "/news", label: "Новости" },
    { value: "/croupiers", label: "Крупье" },
    { value: "/klassicheskoe-kazino", label: "Классическое казино" },
    { value: "/", label: "Food Casino" },
    { value: "/contacts", label: "Контакты" },
  ];

  /* Routing */
  const history = useHistory();

  /* Media Queries */
  const isDesktop = useMediaQuery({ query: "screen and (min-width: 1300px)" });
  const isTablet = useMediaQuery({
    query: "screen and (min-width: 768px) and (max-width: 1299px)",
  });
  const isMobile = useMediaQuery({ query: "screen and (max-width: 767px)" });

  let customStyles;
  if (isDesktop) customStyles = customStylesDesktop;
  if (isTablet) customStyles = customStylesTablet;
  if (isMobile) customStyles = customStylesTablet;

  return (
    <Select
      components={{ DropdownIndicator, NoOptionsMessage }}
      placeholder="Что ищете?"
      options={options}
      styles={customStyles}
      onChange={({ value }) => {
        console.log(value);
        closeSearchBar();
        history.push(value);
      }}
    />
  );
};

export default connect(
  (state) => ({
    casinos: state.casinos.casinos,
  }),
  { closeSearchBar }
)(HeaderSearchBar);
