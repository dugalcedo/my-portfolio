import { useRef, useEffect } from 'react'

const colors = [
    '#ff774d',
    '#d0ff4d',
    '#4dff8b',
    '#4ed4fd',
    '#e571ff'
]

const rand = (arr: any) => arr[Math.floor(Math.random()*arr.length)]
let color: string = rand(colors)
let loaded = false
let changing = false

export default function Background() {
    let bg: any = useRef()

    function reset() {
        bg.current.innerHTML = ""
    }

    function changeColor() {
        const current = color
        let newColor = rand(colors)
        while (newColor === current) {
            newColor = rand(colors)
        }
        color = newColor
    }

    async function changeBg() {
        changing = true
        reset()
        changeColor()
        document.documentElement.style.setProperty('--bg', color)
        await makeBricks()
        document.documentElement.style.setProperty('--bg-async', color)
        setTimeout(() => {
            changing = false
        }, 100);
    }

    function makeBricks() {
        return new Promise<void>(resolve => {
            for (let i = 0 ; i < 10 ; i ++) {
                let brick = document.createElement('div')
                brick.style.width = '0px'
                brick.style.height = (Math.ceil(bg.current.offsetHeight) / 10) + 'px'
                brick.style.backgroundColor = color
                brick.style.transition = 'width 1s'
                bg.current.append(brick)
                setTimeout(() => {
                    brick.style.width = bg.current.offsetWidth + 'px'
                    if (i === 9) {
                        setTimeout(() => {
                            resolve()
                        }, 1000);
                    }
                }, i*50);
            }
        })
    }
    
    useEffect(()=>{

        changeBg()
        document.addEventListener('requestBackgroundChange', ()=>{
            if (changing) return
            changeBg()
        })

    })

    return (
        <div id="bg" ref={bg}></div>
    )
}