export default function Join(){
    return(
        <div className="2xl:px-[500px] lg:px-[250px] px-6 md:px-20 flex flex-col w-screen md:h-screen justify-center items-center pt-[120px]" id="join">
            <h1 className="font-[Poppins] text-[#98DABC] uppercase lg:text-[65px] text-[30px] font-extrabold text-center">WHY JOIN US?</h1>
            <p className="text-white mt-[20px] font-[Poppins] font-medium text-[10px] text-center">By holding a Mob you will be able to get some benefits and privileges.</p>
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:mt-[60px] lg:space-x-[50px]">

                <div className="flex flex-col justify-center items-center align-middle w-[95px] h-[145px] lg:w-[190px] lg:h-[290px] border-[3px] border-white rounded-[5px] lg:mt-[0px] mt-[50px]  ">
                    <img src="/DAOPower.svg" className="w-[25px] lg:w-[50px]"></img>
                    <p className="text-white mt-[30px] font-[Poppins] font-medium text-[10px] text-center  ">DAO Power</p>
                </div>
                <div className="flex flex-col justify-center items-center align-middle w-[95px] h-[145px] lg:w-[190px] lg:h-[290px] border-[3px] border-white rounded-[5px] lg:mt-[50px] sm:ml-[25px] mt-[50px]">
                    <img src="/Royalties.svg" className="w-[25px] lg:w-[50px]"></img>
                    <p className="text-white mt-[30px] font-[Poppins] font-medium text-[10px] text-center">Royalties</p>
                </div>
                <div className="flex flex-col justify-center items-center align-middle w-[95px] h-[145px] lg:w-[190px] lg:h-[290px] border-[3px] border-white rounded-[5px] lg:mt-[0px]  mt-[50px]">
                    <img src="/Payouts.svg" className="w-[25px] lg:w-[50px]"></img>
                    <p className="text-white mt-[30px] font-[Poppins] font-medium text-[10px] text-center">Payouts</p>
                </div>
                <div className="flex flex-col justify-center items-center align-middle w-[95px] h-[145px] lg:w-[190px] lg:h-[290px] border-[3px] border-white rounded-[5px] mt-[50px] sm:ml-[25px]">
                    <img src="/Discounts.svg" className="w-[25px] lg:w-[50px]"></img>
                    <p className="text-white mt-[30px] font-[Poppins] font-medium text-[10px] text-center">Discounts</p>
                </div>
            </div>
        </div>
    )
}