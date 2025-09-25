import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div >
        <aside>
            <nav>
                <ul className="p-4 flex items-center gap-4">
                    <li><Link href='/dashboard'>Dashboard Home</Link></li>
                    <li><Link href='/dashboard/analytics'>Dashboard Anylitics</Link></li>
                </ul>
            </nav>
        </aside>
        <div className="flex-1">
            {children}
        </div>
    </div>
  );
}