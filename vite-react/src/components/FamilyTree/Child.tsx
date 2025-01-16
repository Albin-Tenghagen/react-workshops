interface greetings {
    childHello: string,
    parentHello: string;
}

function Child({greetings}: {greetings: greetings}) {
    return (
        <>
        <h5>Jag är ättlingen</h5>
        <p>"{greetings.childHello}" Sade Gamlefar.</p>
        </>
    )
}
export default Child