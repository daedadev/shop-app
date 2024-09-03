import Link from 'next/link';
import React from 'react';

export default function MainHeader() {
    return (
        <header className='mx-6 md:mx-14 max-w-[1030px] w-full py-[30px]'>
            <section className='flex flex-row justify-between items-center'>
                <article>
                    <h1 className='text-[90px] font-extrabold italic leading-none'>FTB</h1>
                </article>
                <article>
                    <Link href={'/'} className='px-3 py-1 font-serif font-extralight'>
                        HOME
                    </Link>
                    <Link href={'/shop'} className='px-3 py-1 font-serif font-extralight'>
                        SHOP
                    </Link>
                    <Link href={'/contact'} className='px-3 py-1 font-serif font-extralight'>
                        CONTACT
                    </Link>
                    <Link href={'/terms'} className='px-3 py-1 font-serif font-extralight'>
                        TERMS & INFO
                    </Link>
                    <Link href={'/cart'} className='px-3 py-1 font-serif font-extralight'>
                        CART
                    </Link>
                </article>
            </section>
        </header>
    );
}
