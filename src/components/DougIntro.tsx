import DougLinks from './DougLinks'
import Card from './Card'

export default function DougIntro() {
    return (
        <Card>
            <h1>Doug Alcedo</h1>
            <p>Full-stack web developer & tutor</p>
            <DougLinks dark={true}/>
        </Card>
    )
}