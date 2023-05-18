import { useEffect, useRef } from 'react'
let loaded = false
export default function Card(props: any) {
    let card: any = useRef()
    useEffect(()=>{
        if (!loaded) {loaded = true ; return}
        card.current.style.boxShadow = '5px 5px 0 rgba(0,0,0,.4)'
    })
    return (
        <div className={`card ${props.classes || ""}`} ref={card}>
            {props.children}
        </div>
    )
}