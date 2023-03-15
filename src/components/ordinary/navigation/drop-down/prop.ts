export type DropDownProp = {
  name: string;
  isActive: boolean;
  burger: boolean;
  handleClick: (e: boolean) => void;
};

export type DropDownNameProps = {
  name: string;
  setIsOpen: (prevState: boolean) => void;
  isOpen: boolean;
  burger: boolean;
};
