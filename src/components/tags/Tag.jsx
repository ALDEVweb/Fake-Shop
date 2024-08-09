import './Tag.css'

export default function MyTag({type, children}){

    let classe = "tag"
    if (type == "small"){
        classe += " smallTag"
    }else if(type == "large"){
        classe += " largeTag"
    }


    return <p className={classe}>{children}</p>
}