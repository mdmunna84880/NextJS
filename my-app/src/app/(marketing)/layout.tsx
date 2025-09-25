import Link from 'next/link'

function MarketingLayout({children}:{children: React.ReactNode}) {
    return ( 
        <div>
            <header>
                <nav>
                    <Link href='/'>Home</Link>
                </nav>
            </header>
            <main>{children}</main>
        </div>
     );
}

export default MarketingLayout;