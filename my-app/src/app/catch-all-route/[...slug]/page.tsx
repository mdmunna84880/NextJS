async function Filter({params}:{params: Promise<{ slug: string[] }>}) {
    const {slug} = await params;
    console.log(slug);
    return ( 
        <div>
            <h1>Filtered page</h1>
        </div>
     );
}

export default Filter;