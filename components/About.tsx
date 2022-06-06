export default function About(){
    return(
        <div className="2xl:px-[500px] flex flex-col justify-center w-screen h-screen pt-[120px]" id="about">

                <h1 className="font-[Poppins] text-white uppercase text-[65px] font-extrabold text-center">WHAT IS MOBSQUAD?</h1>
                <div className="flex flex-row mt-[70px] justify-between">
                    <p className="text-white font-[Poppins] font-medium text-[16px] w-[550px]"> Mob Squad is all about underground culture and supporting great independent artists. 
                        We come from Brazil, where we have felt poverty and the social issues that comes with it. 
                        From drugs addiction to extreme fear of the environment surrounding us, ink saved our lives and helped us upgrade everything to a new level. 
                        Mob Squad is formed by independent tattoo artists and entrepreneurs whose founders are also owners of the Black Coffee Art Gallery, 
                        a well located and successful private tattoo parlor in Lisbon.
                    </p>
                    <img src="/MobImage.svg"></img>
                </div>     
        </div>
    )
}