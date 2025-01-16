import Child from './Child'

interface greetings {
    childHello: string,
    parentHello: string;
}

function Parent({greetings}: {greetings: greetings}){


    return (
        <>
        <h4>Jag är far, här se min ättling</h4>
        <p>"{greetings.parentHello}" Sade Gamlefar.</p>

        <Child greetings={greetings} />
        </>
    )
}
export default Parent