import "./styles.css"

function Header(){
    return(
        <div className="bg-indigo-400 rounded-lg flex justify-center items-center">
            <div>
                <h1 className="font-black text-7xl text-center md:w-2/3 mx-auto text-cyan-50">Let's take some {""}
                    <span className="text-black">notes</span>
                </h1>
            </div>
            <div>
                <img src="/pencil.png" alt=""  />
            </div>
        </div>
    )
}

export default Header;