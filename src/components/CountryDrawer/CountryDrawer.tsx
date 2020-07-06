import React from 'react';
import { Drawer } from '@material-ui/core';

const CountryDrawer = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <>
      <Drawer anchor={'right'} open={open} onClose={onClose}>
        <p>Test</p>
      </Drawer>
    </>
  );
};

export default CountryDrawer;
