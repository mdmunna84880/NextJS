async function Page({params}:{
  params: Promise<{ slug: string }>
}) {
    const {slug} = await params;
    console.log(slug);
    return ( 
        <div>
            <h1>Product Detailed</h1>
        </div>
     );
}

export default Page;