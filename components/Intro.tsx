export default function Intro(){
    return(
        <div className="container w-screen h-screen mx-auto flex flex-col items-center justify-center pt-[120px] ">
                <img src="/Logo.svg"></img>
                <h2 className="text-white mt-[20px] font-[Poppins] font-semibold text-[20px] uppercase">1001 Dwarf Creatures living in a colony</h2>
                <button className="text-black font-[Poppins] bg-[#98DABC] px-[30px] py-[10px] font-semibold rounded-[5px] mt-[180px] border-[3px] border-wh"> <span className="py-[5px] border-b-[1px] border-white" >Join The Squad</span></button>       
        </div>
    )
}