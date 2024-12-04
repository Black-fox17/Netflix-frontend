import './style.css'
const MovieList = ()=>{
    return (
        <main>
            <head>
                <title>Netflix - Profile</title>
                <link rel="stylesheet" href="assets/style.css"/>
                <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
            </head>
            <body className='font-primary'>
                <nav className="flex justify-between items-center py-3 px-4 fixed w-full z-50">
                    <div className="w-6/12">
                        <img src="assets/netflix.png" alt="logo" className="w-5/12 md:w-2/12"/>
                    </div>

                    <div>
                        <button className='bg-primary_red py-1 px-3 text-white md:text-lg rounded-md'>
                            Log out
                        </button>
                    </div>
                    
                </nav>
                <main className='bg-primary_black min-h-screen w-full'>
                    <section className="h-screen relative bg-no-repeat pb-8 pl-6 flex justify-end items-end bg-cover" style="background-image: url('assets/vikings.jpg');">
                        <div>
                            <h2 className="text-6xl font-semibold text-white my-4">
                                Vikings
                            </h2>
                            <p className=" w-11/12 md:w-5/12 font-medium text-white my-4">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus repellendus odit perspiciatis nostrum culpa exercitationem quis. Ab obcaecati odio minus. Dolorum sapiente eaque, repellendus ea fugiat amet fuga libero at!
                            </p>
                            <div className="flex my-4">

                                <button className="flex items-center bg-white py-2 px-5 rounded-md">
                                    <ion-icon name="play" className="text-2xl"></ion-icon>
                                    <span className="ml-3 font-medium">
                                        Play
                                    </span>
                                </button>
                
                                <button className="ml-4 text-white flex items-center bg-gray-500 bg-opacity-80 py-2 px-5 rounded-md">
                                
                                    <ion-icon name="information-circle-outline" className="text-2xl" ></ion-icon>
                                    <span className="ml-3 font-medium">
                                        More Info
                                    </span>
                                </button>
                            </div>
                        </div>
                    </section> 
                    <section className='bg-primary_black  min-h-screen flex justify-center py-10'>
                        <div className="p-8 w-10/12 relative" >
                            <h2 className="text-gray-200 text-2xl font-medium">
                                Popular on Netflix
                            </h2>
                            <div className="flex justify-center  items-center min-w-full  movie_lis">
                                <div className=" h-40 m-4  bg-blue-500 flex-shrink-0 rounded-md cursor-pointer w-40">
                                    <img src="assets/vikings.jpg" className="w-full h-full " alt=""/>
                                </div>

                                <div className="flex-shrink-0  h-40 m-4  bg-blue-500 rounded-md cursor-pointer w-40" >
                                    <img src="assets/vikings.jpg" className="w-full h-full " alt=""/>
                                </div>

                                <div className="flex-shrink-0  h-40 m-4  bg-blue-500 rounded-md cursor-pointer w-40" >
                                    <img src="assets/vikings.jpg" className="w-full h-full " alt=""/>
                                </div>

                                <div className="flex-shrink-0  h-40 m-4  bg-blue-500 rounded-md cursor-pointer w-40" >
                                    <img src="assets/vikings.jpg" className="w-full h-full " alt=""/>
                                </div>

                                <div className="flex-shrink-0  h-40 m-4  bg-blue-500 rounded-md cursor-pointer overflow-hidden w-40" >
                                    <img src="assets/vikings.jpg" className="w-full h-full " alt=""/>
                                </div>

                                <div className="flex-shrink-0  h-40 m-4  bg-blue-500 rounded-md cursor-pointer w-40">
                                    <img src="assets/vikings.jpg" className="w-full h-full " alt=""/>
                                </div>

                                

                            
                            </div>
                        </div>
                    </section>
                    
                </main>
            </body>
        </main>
    )
}
export default MovieList;