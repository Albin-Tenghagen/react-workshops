import BillspliterInput from './BillspliterInput/BillspliterInput'
// import SplitResult from './SplitResult/SplitResult'

function Billspliter(){
    let perPerson = 0;
console.log("Billspliter container", Billspliter)
    
function calculateSplit(sum: number, divideby: number, tips: number){
    if(divideby <= 0) {
        console.log("Cannot divide by 0")
    } else {
        const totalWithTips = sum * (1 + tips);
        console.log("totalWithTips", totalWithTips)
        perPerson = totalWithTips / divideby;
    }
    console.log("Every person should pay:", perPerson)
}

return (
        <section>
            <h2>Split the tab!</h2>
            <article>
                <BillspliterInput calculateSplit={calculateSplit}/>
                {/* <SplitResult perPerson={perPerson} /> */}
            </article>
        </section>
    )
}

export default Billspliter