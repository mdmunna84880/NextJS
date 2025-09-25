async function ProductFilter({params}:{params: Promise<{ slug?: string[] }>}) {
    const { slug } = await params;
    console.log(slug);

    return (
        <div>
            <h1>Optional Catch All route</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum magni molestias aperiam facere ex fugiat quod, a quisquam quo doloremque corrupti harum accusamus sequi.</p>
        </div>
    );
}

export default ProductFilter;