'use client';

import { cartItemDataType } from '@/types/types';
import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

type ShopContextType = {
    cart: cartItemDataType[];
    addItemToCart: (item: cartItemDataType) => void;
};

export const ShopContext = createContext<ShopContextType>({} as ShopContextType);
const defaultCart: any[] = [];

interface ShopContextWrapperProps {
    children: React.ReactNode;
}

export function ShopContextWrapper({ children }: ShopContextWrapperProps) {
    const [cart, setCart] = useState(defaultCart);

    const addItemToCart = (item: cartItemDataType) => {
        setCart((cart) => {
            return [...cart, item];
        });
    };

    const value = {
        cart,
        addItemToCart,
    };
    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
