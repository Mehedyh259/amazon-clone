import Image from 'next/image';
import React from 'react';
import { StarIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

const CheckoutProduct = ({ product }) => {
    const { id, title, price, rating, description, category, image, hasPrime } = product;
    const dispatch = useDispatch()

    const addItemToBasket = () => {
        dispatch(addToBasket(product))
    }
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }));
    }

    return (
        <div className='grid grid-cols-5 items-center'>
            <Image src={image} height={200} width={200} objectFit='contain' alt='...' />

            {/* Middle */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {
                        rating && Array(Math.round(rating?.rate)).fill().map((_, i) => (
                            <StarIcon key={i} className="h-5 text-yellow-500" />
                        ))
                    }
                </div>
                <p className='text-xs my-2 line-clamp-3'>{description}</p>
                <h3 className='font-bold'>${price}</h3>
            </div>

            {/* right  */}
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <button onClick={addItemToBasket} className='button'>Add to Basket</button>
                <button onClick={removeItemFromBasket} className='button'>Remove from Basket</button>
            </div>

        </div>
    );
};

export default CheckoutProduct;