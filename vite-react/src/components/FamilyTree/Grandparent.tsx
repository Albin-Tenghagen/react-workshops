import Parent from './Parent'

function Grandparent() {

    const greetings = {
        childHello: "Hej barnbarn!",
        parentHello: "Hej Far"
    }

    return (
        <>
        <h3>Jag är Gamlefar!här se mina ättlingar</h3>
        
        <Parent  greetings={greetings}/>
        </>
    )


}
export default Grandparent