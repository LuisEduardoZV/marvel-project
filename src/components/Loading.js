const Loading = ({text}) => {
    return(
        <div className="flex items-center justify-center flex-col h-screen font-rajdhani">
            <div style={{borderTopColor: "transparent"}} 
            className="w-16 h-16 border-4 border-red-400 border-solid rounded-full animate-spin"></div>
            <p className="mt-3 text-lg">{text}</p>
        </div>
    );
}

export default Loading;