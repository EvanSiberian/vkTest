import { Grid } from '@mui/material';
import CartList from '../features/cart/CartList';
import CartTotal from '../features/cart/CartTotal';

export const Layout: React.FC = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <CartList />
            </Grid>
            <Grid item xs={4}>
                <CartTotal />
            </Grid>
        </Grid>
    );
};
