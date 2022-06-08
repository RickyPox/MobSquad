export default function About(){
    return(
        <div className="2xl:px-[500px] lg:px-[150px] px-6 md:px-20 flex flex-col justify-center w-screen md:h-screen pt-[120px]" id="about">

                <h1 className="font-[Poppins] text-white uppercase lg:text-[65px] text-[30px] font-extrabold text-center">WHAT IS MOBSQUAD?</h1>
                <div className="flex flex-row  mt-[70px] justify-center space-x-10">
                    <div className="w-[240px] lg:w-[550px]">
                    <p className="text-white font-[Poppins] font-medium text-[10px] lg:text-[16px]  mt-[20px]">Far deep in confines of Solana nature, lives a colony of 1001 dwarf creatures - commonly known as Mobs.</p>
                    <p className="text-white font-[Poppins] font-medium text-[10px] lg:text-[16px]  mt-[20px]">Striving in secrecy and rising throughout the strength of their own tribe, Mobs have been approached by a few explorers. Do you have what it takes to join Mob $quad?</p> 
                    <p className="text-white font-[Poppins] font-medium text-[10px] lg:text-[16px]  mt-[50px]"><strong>Get yours while you still can!</strong></p>
                    </div>
                    <img src="/MobImage.svg" className=" w-[110px] lg:w-[250px]"></img>
                </div>     
        </div>
    )
}