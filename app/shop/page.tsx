'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className='grid grid-cols-4 gap-y-7'>
            {items.map((_, index) => {
                return (
                    <Link key={index} href={'/products/1'} className='flex flex-col items-center justify-center w-[220px]'>
                        <Image
                            width={220}
                            height={220}
                            alt='Black Jacket'
                            src={`/leather_puffer/Leather_Puffer_Small.png`}
                        />
                        <p className='text-center text-[14px] font-serif mt-2'>MADE IN HELL LEATHER PUFFER COAT (BLACK)</p>
                        <p className='text-[12px] font-serif text-gray-500'>$ 168.00</p>
                    </Link>
                );
            })}
        </div>
    );
}
