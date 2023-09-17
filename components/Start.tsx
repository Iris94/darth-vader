

export default function Start ( {lightUp} : any ) {

    return (
        <div className="w-screen h-screen absolute z-50 flex justify-center items-center">
            <button 
            className="absolute lg:top-20 lg:right-20 top-5 right-5 
            w-32 h-10 bg-red-600 text-white font-bold rounded-md"
            onClick={lightUp}
            >Start</button>
        </div>
    )
}