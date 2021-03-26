import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children, title = 'Crypto Tracker' }) => {
  return (
    <div className='layout'>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='header'>
        <Link href='/' passHref>
          <a>
            <img src="data:image/png;base64,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" alt="Italian Trulli"></img>
            
          </a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;