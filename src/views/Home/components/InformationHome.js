const InformationHome = () => {
    return(
        <div className="flex drop-shadow-2xl w-3/4 bg-marvel-red-100 h-48 rounded-lg items-center justify-center flex-col"
            style={{marginTop: "650px"}}>
            <p className="font-rajdhani font-light text-white text-3xl">
                In this project you will be able to search for everything related to Marvel; characters, events, comics, creators, series or any related information.
            </p>
            <a className="outline-none" href="#search">
                <button className="bg-marvel-vino-80 font-rajdhani font-light 
                text-white text-xl p-2 rounded-md mt-5 w-36 hover:bg-marvel-vino-100">
                    Buscar
                </button>
            </a>
        </div>
    );
}

export default InformationHome;