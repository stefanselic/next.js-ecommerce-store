import Link from 'next/link';
import './globals.scss';
import style from './layout.module.scss';
import { Inter } from 'next/font/google';
import { products } from '../database/products';
import { getCookie } from '../app/utils/cookies';
import { parseJson } from './utils/json';
import Image from 'next/image';
import cartIcon from '../public/images/cart-icon-2.png';
// import { createUpdateCart } from './products/[productId]/actions';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: { default: 'My Vitamins', template: '%s | My Vitamins' },
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  const myCookieValue = getCookie('cart');
  const cartQuantity = !myCookieValue ? [] : parseJson(myCookieValue);
  const totalQuantity = cartQuantity.reduce(
    (accum, allItems) => accum + allItems.quantity,
    0,
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className={style.navigator}>
          <ul className={style.innerLeftLinksList}>
            <li>
              <Link className={style.Link} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className={style.Link}
                data-test-id="products-link"
                href="/products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link className={style.Link} href="/about">
                About
              </Link>
            </li>
          </ul>
          <Link href="/cart">
            <div className={style.Cart}>
              <Image src={cartIcon} alt="cart icon" fill />
              <div className={style.cartCircle}>{totalQuantity}</div>
            </div>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
