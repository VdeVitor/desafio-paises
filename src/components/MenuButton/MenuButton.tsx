import React, { useCallback, useState } from 'react';
import { MenuItem } from '@material-ui/core';
import Button from '../Button/Button';
import { symbols } from '../../themes/symbols';
import { Menu } from './styles';

const MenuButton = ({
  listData,
  title,
  onItemClicked,
}: {
  onItemClicked: (item: string) => void;
  listData: any;
  title: string;
}) => {
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

  return (
    <>
      <Button
        onClick={handleClick}
        marginStyle={{ marginRight: symbols.spacing._12 }}
        active={buttonSelected}
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
            transform: `translateY(${symbols.spacing._48})`,
          },
        }}
      >
        {listData.map((item: any) => (
          <MenuItem key={item} onClick={() => onItemClicked(item)}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MenuButton;
