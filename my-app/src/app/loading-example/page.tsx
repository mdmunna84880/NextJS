
async function LoadingExample() {
    const getData = async ()=>{
        await new Promise((resolve)=> setTimeout(resolve, 2000));

        return{
            stats:{
                user: 'Md Munna'
            }
        }
    }

    const data = await getData();
    return ( 
        <div>
            <h1>Loading is testing</h1>
            <h2>Hi {data.stats.user}</h2>
        </div>
     );
}

export default LoadingExample;