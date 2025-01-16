function BillspliterInput({calculateSplit}: { calculateSplit: (sum: number, divideBy: number, tips: number) => void }){
    let sum: number = 0;
    let divideby: number = 1;
    let tips: number = 0
    
    function handleCalculate(){
        console.log("sum:", sum, "divideby:", divideby, "tips", tips)
        calculateSplit(sum, divideby, tips)
   
    }
   
    return (
        <>
        <p>Summa:</p>
        <input 
        type="number"
        placeholder="Total sum of the bill" 
        onChange={(e) => (sum = parseFloat(e.target.value) || 0)}
        />

        <p>Party Size:</p>
        <input 
         type="number"
         placeholder="amount of people"
         onChange={(e) => (divideby = parseInt(e.target.value) || 1)}
        />

        <p>Tips</p>
        <input
         type="number"
         placeholder="if 10% tip type 0.10 for example " 
        
         onChange={(e) => (tips = parseFloat(e.target.value) || 0)}
        />
        
        <button onClick={handleCalculate}>Calculate</button>
        </>
    )
}

export default BillspliterInput