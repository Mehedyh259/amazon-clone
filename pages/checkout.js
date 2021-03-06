import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutProduct from '../components/CheckoutProduct';
import Header from '../components/Header';
import { selectItems, selectTotal } from '../slices/basketSlice';
import { useSession } from "next-auth/react"

const Checkout = () => {

    const items = useSelector(selectItems)
    const { data: session } = useSession();
    const total = useSelector(selectTotal);
    if (session) {
        console.log(session);
    }
    return (
        <div className='bg-gray-100'>
            <Header />
            <main className='lg:flex max-w-screen-xl mx-auto'>
                {/* left */}
                <div className='flex-grow m-5 shadow-sm'>
                    <Image
                        src="https://links.papareact.com/ikj"
                        width={1020}
                        height={250}
                        objectFit="contain"
                        alt='...'
                    />

                    <div className='flex flex-col p-5 space-y-10 bg-white'>
                        <h1 className="text-3xl border-b pb-4">
                            {
                                items.length === 0 ? "Your Amazon Basket is empty"
                                    :
                                    "Shopping Basket"
                            }
                        </h1>
                        {
                            items.map((item, i) => (
                                <CheckoutProduct
                                    key={i}
                                    product={item}
                                />
                            ))
                        }

                    </div>

                </div>


                {/* right */}
                {
                    items.length > 0 && (
                        <div className='flex flex-col bg-white p-7 shadow-md'>

                            <h2 className='whitespace-nowrap'>Subtotal ({items.length} items) :
                                <span className='font-bold'>
                                    ${total}
                                </span>
                            </h2>
                            <button className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 text-gray-600 cursor-not-allowed'}`}>
                                {!session ? "signin to checkout" : "checkout"}
                            </button>
                        </div>

                    )
                }
            </main>
        </div>
    );
};

export default Checkout;