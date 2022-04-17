import styled from 'styled-components'
import { useState, useRef, useEffect } from 'react'

const SkillsS = styled.div`
    position: relative;
    border: 5px solid #1fe056;
    margin: 5px 20px;
    overflow: hidden;
`
const RowsS = styled.div`
    display: flex;
    width: 100%;
    position: absolute;
    top: 0;
    justify-content: space-between;
    height: 100%;
`
const RowS = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 30px;
    transform: rotate(${ props => props.rot ? 180 : 0 }deg);
    img{
        width: 40px;
        height: 70%;
        opacity: 0.1;
    }
`
const SkillPrimS = styled.div`
`
const Outwrap = styled.div`
    transition: all 0.5s linear;
    background-color: #f5ab51;
    position: relative;
    right: ${props => props.move}px;
    display: flex;
    justify-content: space-between;
    width: ${ props => props.contSkill*250 }px;
`
// const SkillSecS = styled.div`
//     display: flex;
//     justify-content: space-between;
// `
const SkillS = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: 150px;
        margin: 10px;
    }
`

const skillsPrim = [
    { title: 'React', local: 'skills/react480.svg' },
    { title: 'JavaScript', local: 'skills/javascript480.svg' },
    { title: 'CSS', local: 'skills/css480.svg' },
    { title: 'HTML', local: 'skills/html480.svg' },
    { title: 'Photoshop', local: 'skills/photoshop480.svg' },
    { title: 'Illustrator', local: 'skills/illustrator480.svg' },
]
const skillsSec = [
]

const Skills = () => {
    const [ carPos, setCarPos ] = useState(0)
    const [ valueCarousel, setValueCarousel ] = useState(50)
    const nodeSkill = useRef(0)
    useEffect(() => {
        const bounding = nodeSkill.current.getBoundingClientRect();
        const totalPxInNode = bounding.right - bounding.left
        nodeSkill.current.addEventListener("mousemove", e => {
            let positionXInPx = e.clientX - bounding.left
            let porcentCursorX = positionXInPx * 100 / totalPxInNode
            let porcentCursorXtoFix = ((porcentCursorX / 10).toFixed()) * 10
            setValueCarousel( porcentCursorXtoFix )
            console.log(  )
        })
    })
    useEffect( () => {
        let velocity = ( (valueCarousel - 50) ^ 2 ) / ( 5 * 2 )
        let velocitySet = velocity.toFixed() * 8
        if( valueCarousel > 20 && valueCarousel < 80 ){
        }else{
            let interv = setInterval( () =>{
                setCarPos( carPos => carPos + velocitySet )
            }, 100)
            return () => clearInterval( interv )
        }
    }, [valueCarousel] )
    return(
        <SkillsS>
            <SkillPrimS ref={nodeSkill}>
                <Outwrap contSkill={ skillsPrim.length } move={ carPos } >
                    {
                        skillsPrim.map( skill => {
                            return (
                                <SkillS key={ skill.title } >
                                    <img src={ skill.local } alt={ skill.title }/>
                                </SkillS>
                            )
                        })
                    }
                </Outwrap>
                <RowsS>
                    <RowS 
                        rot={ true }
                    >
                        <img src='arrowrigth96.png' />
                    </RowS>
                    <RowS
                    >
                        <img src='arrowrigth96.png' />
                    </RowS>
                </RowsS>
            </SkillPrimS>
        </SkillsS>
    )
}
export default Skills