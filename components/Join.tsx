export default function Join(){
    return(
        <div className="2xl:px-[500px] flex flex-col w-screen h-screen justify-center pt-[120px]" id="join">
            <h1 className="font-[Poppins] text-[#98DABC] uppercase text-[65px] font-extrabold text-center">WHY JOIN US?</h1>
            <p className="text-white mt-[20px] font-[Poppins] font-medium text-[16px] text-center">By holding a Mob you will be able to get some benefits and privileges.</p>
            <div className="flex flex-row mt-[60px] justify-center space-x-[50px]">
                <div className="flex flex-col justify-center items-center align-middle w-[190px] h-[290px] border-[3px] border-white rounded-[5px]">
                    <img src="/DAOPower.svg" className="w-[50px]"></img>
                    <p className="text-white mt-[30px] font-[Poppins] font-medium text-[16px] text-center">DAO Power</p>
                </div>
                <div className="flex flex-col justify-center items-center align-middle w-[190px] h-[290px] border-[3px] border-white rounded-[5px] mt-[50px]">
                    <img src="/Royalties.svg"></img>
                    <p className="text-white mt-[30px] font-[Poppins] font-medium text-[16px] text-center">Royalties</p>
                </div>
                <div className="flex flex-col justify-center items-center align-middle w-[190px] h-[290px] border-[3px] border-white rounded-[5px]">
                    <img src="/Payouts.svg" className="w-[50px]"></img>
                    <p className="text-white mt-[30px] font-[Poppins] font-medium text-[16px] text-center">Payouts</p>
                </div>
                <div className="flex flex-col justify-center items-center align-middle w-[190px] h-[290px] border-[3px] border-white rounded-[5px] mt-[50px]">
                    <img src="/Discounts.svg"></img>
                    <p className="text-white mt-[30px] font-[Poppins] font-medium text-[16px] text-center">Discounts</p>
                </div>
            </div>
        </div>
    )
}