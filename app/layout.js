import Link from 'next/link';
import './globals.scss';
import style from './layout.module.scss';
import { Inter } from 'next/font/google';
import { products } from '../database/products';
import cart from '../public/images/cart-icon.png';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: { default: 'My Vitamins', template: '%s | My Vitamins' },
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
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
          <div className={style.Cart}>
            <Link href="/cart">Cart</Link>
            <p className={style.CartCount}>{Math.floor(Math.random() * 10)}</p>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
