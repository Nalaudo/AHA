import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from "./styles";
import { Link } from 'react-router-dom';

const BasicMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <p
                className='bordernav'
                style={styles.productosbtn}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Categorías
            </p>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Link to='/category/amigurumis'><MenuItem onClick={handleClose}>

                    Amigurumis

                </MenuItem></Link>
                <Link to='/category/hogar'><MenuItem onClick={handleClose}>

                    Hogar

                </MenuItem></Link>
                <Link to='/category/accesorios'>
                    <MenuItem onClick={handleClose}>

                        Accesorios

                    </MenuItem>
                </Link>
            </Menu>
        </React.Fragment>
    );
}

export default BasicMenu