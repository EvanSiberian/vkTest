import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from './CartSlice';
import { CartItem as CartItemType } from '../../types/cartTypes';
import { Card, CardMedia, CardContent, Typography, CardActions, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
    item: CartItemType;
}

const CartItem: React.FC<Props> = ({ item }) => {
    const dispatch = useDispatch();

    const handleQuantityChange = (quantity: number) => {
        dispatch(updateQuantity({ id: item.id, quantity }));
    };

    const handleRemove = () => {
        dispatch(removeFromCart(item.id));
    };

    // Рассчитываем общую стоимость без скидки для отображения
    const totalBeforeDiscount = item.price * item.quantity;

    return (
        <Card sx={{ display: "flex", marginBottom: 2 }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={item.thumbnail}
                alt={item.title}
            />
            <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                    {item.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Price:
                    {item.discountPercentage > 0 ? (
                        <div>
                            <span style={{ textDecoration: 'line-through' }}>
                                ${(item.total).toFixed(2)}
                            </span>
                            {" "}
                            <span>
                                ${(item.discountedPrice).toFixed(2)}
                                {item.quantity > 1 && ` (x${item.quantity})`}
                            </span>
                        </div>
                    ) : (
                        <div>
                            <span>
                                ${(item.total).toFixed(2)}
                                {item.quantity > 1 && ` (x${item.quantity})`}
                            </span>
                        </div>
                    )}
                </Typography>


            </CardContent>
            <CardActions>
                <IconButton onClick={() => handleQuantityChange(item.quantity - 1)} disabled={item.quantity <= 1}>
                    <RemoveCircleOutlineIcon />
                </IconButton>
                <Typography>{item.quantity}</Typography>
                <IconButton onClick={() => handleQuantityChange(item.quantity + 1)} disabled={item.quantity >= 10}>
                    <AddCircleOutlineIcon />
                </IconButton>
                <IconButton onClick={handleRemove}>
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default CartItem;
