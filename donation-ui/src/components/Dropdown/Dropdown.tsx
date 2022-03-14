import { useCallback } from "react";
import useBoolean from "../../hooks/useBoolean";
import cn from "./Dropdown.module.scss";

/**
 * Выпадающее меню
 */
const Dropdown = ({
  selected,
  options,
  onChange,
}: {
  selected: string;
  options: string[];
  onChange: (value: string) => void;
}) => {
  const { value, toggle, setFalse } = useBoolean(false);

  const onOptionChange = useCallback(
    (option: string) => {
      onChange(option);
      setFalse();
    },
    [onChange, setFalse]
  );

  const renderOptions = useCallback(() => {
    return options.map((option) => (
      <div
        className={cn.dropdown_option}
        onClick={() => onOptionChange(option)}
        key={option}
      >
        {option}
      </div>
    ));
  }, [onOptionChange, options]);

  return (
    <div className={cn.dropdown}>
      <div onClick={toggle}>{selected}</div>
      {value && <div className={cn.dropdown_content}>{renderOptions()}</div>}
    </div>
  );
};

export default Dropdown;
