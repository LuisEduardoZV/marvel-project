const Footer = ({ text }) => {
    return (
        <div className="flex flex-row h-16 w-full bg-marvel-vino-100 font-rajdhani text-white 2xl:justify-between xl:justify-between lg:justify-between md:justify-around sm:justify-around 2xl:px-36 xl:px-36 lg:px-36 md:px-7 items-center absolute bottom-0 2xl:text-lg xl:text-base sm:text-sm">
            <div className="h-auto w-auto">
                <p>
                    Project created by Luis Eduardo Zúñiga Vera
                </p>
            </div>
            <div className="h-auto w-auto">
                <p>
                    {text}
                </p>
            </div>
        </div>
    );
}

export default Footer;