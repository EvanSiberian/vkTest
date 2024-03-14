import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Box } from '@mui/material';
import { RootState } from '../../app/store';

const CartTotal: React.FC = () => {
    const total = useSelector((state: RootState) => state.cart.total);
    const discountedTotal = useSelector((state: RootState) => state.cart.discountedTotal);

    return (
        <Typography variant="subtitle1" color="text.secondary" component="div">
            Итого:
            {total > discountedTotal ? (
                <>
                    <span style={{ textDecoration: 'line-through' }}>
                        ${total.toFixed(2)}
                    </span>{' '}
                    <span>
                        ${discountedTotal.toFixed(2)}
                    </span>
                </>
            ) : (
                <span>
                    ${total.toFixed(2)}
                </span>
            )}
        </Typography>
    );
};

export default CartTotal;