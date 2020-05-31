import React, { useCallback, useState, useMemo } from 'react';
import Button from '../Button/Button';
import { symbols } from '../../themes/symbols';
import { Menu, MenuItemSeparator, MenuItem } from './styles';
import { OptionTypes } from '../../containers/ViewCountries';
import Icon from '../Icon/Icon';

interface Props {
  onItemClicked: (item: string, callback: () => void) => void;
  listData: any;
  title: string;
  removeFilter?: () => void;
}

const MenuButton = ({
  listData,
  title,
  onItemClicked,
  removeFilter,
}: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [buttonSelected, setButtonSelected] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const active = useMemo(
    () => !Object.values(OptionTypes).includes(title as OptionTypes),
    [title, OptionTypes]
  );

  return (
    <>
      <Button
        onClick={handleClick}
        marginStyle={{ marginRight: symbols.spacing._12 }}
        active={active}
        filterButton
        removeFilter={removeFilter}
      >
        {title}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: symbols.size.maxMenuHeight,
            transform: `translateY(${symbols.spacing._34})`,
          },
        }}
      >
        {listData.map((item: any) => (
          <>
            <MenuItem
              key={item}
              onClick={() => onItemClicked(item, handleClose)}
            >
              {item}
              {active && item === title && (
                <Icon type="check" size={symbols.size.iconSmall} />
              )}
            </MenuItem>
            <MenuItemSeparator />
          </>
        ))}
      </Menu>
    </>
  );
};

export default MenuButton;
