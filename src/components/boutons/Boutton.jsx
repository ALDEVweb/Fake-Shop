import './Boutton.css'

export default function Boutton({type, children, className, onClick}){

    let classe = className ? className : ""

    if(type == "large"){
        classe += " button largeBut"
    }else if(type == "small"){
        classe += " button smallBut"
    }else if(type == "filtre"){
        classe += " buttonCat"
    }

    return(
        <button onClick={onClick} className={classe}>{children}</button>
    )
}