

function SplitResult({perPerson}: {perPerson: number}){
    console.log("perPerson: ", perPerson)
  return (
  <> 
    <article>
    <h4>Sum per person:</h4>
    <p>{perPerson > 0 ?`Each person should pay: ${perPerson} kr`: "Could not calculate"}</p>
    
    </article>
  </>) 
}
export default SplitResult