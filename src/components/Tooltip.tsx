import { useRef, useEffect } from 'react'

let loaded = false
export default function Tooltip(props: any) {
    let container: any = useRef()
    
    function track(e: any) {
        let tip: any = document.getElementById('tooltip')
        tip.style.left = (e.clientX + 25) + 'px'
        tip.style.top = (e.clientY + 25) + 'px'
    }
    
    useEffect(()=>{
        if (!loaded) {loaded = true ; return}
        let tip: any = document.getElementById('tooltip')
        container.current.addEventListener('mouseenter', () => {
            tip.innerText = props.tip
            container.current.addEventListener('mousemove', track)
            tip.style.display = 'block'
        })
        container.current.addEventListener('mouseleave', () => {
            tip.style.display = 'none'
            container.current.removeEventListener('mousemove', track)
        })
    }, [])

    return (
        <div className="tooltip-container" ref={container}>
            {props.children}
        </div>
    )
}