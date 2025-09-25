'use client'
import { usePathname, useRouter } from "next/navigation";

function NotFoundPage() {
    const rout = useRouter();
    const path = usePathname();

    function handleNavigation(){
        rout.push('/');
    }
    return ( 
        
        <div>
            <h1>The page are you looking for <b>{path}</b>, not found</h1>
            <button className="border-2 border-purple-500 hover:bg-purple-700" onClick={handleNavigation} >Go to home</button>
        </div>
     );
}

export default NotFoundPage;