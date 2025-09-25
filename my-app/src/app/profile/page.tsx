'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Profile() {
    const router = useRouter();
    const pathName = usePathname();
    const search = useSearchParams();

    console.log(`${pathName}, path name`);

    console.log(search.getAll("name"));

    const handleNevigation = ()=>{
        router.push('/');
    }


    return ( <div className="p-5">
        <h1>This is profile Page nested under home page</h1>
        <button className="p-2 mt-4 border border-blue-400 hover:bg-blue-300 rounded-sm" onClick={handleNevigation}>Go to Home</button>
    </div> );
}

export default Profile;