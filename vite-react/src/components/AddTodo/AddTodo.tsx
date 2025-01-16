

function AddTodo(props) {
    const { updateTodos } = props;
    let text = "";
    function handleOnChange(event) {
    //   console.log("Input changed", event.target.value);
  
      text = event.target.value;
    }
  
    function handleClick() {
      console.log("Button clicked");
      updateTodos(text)
    }
  
    return (
      <div>
        <input
          type="text"
          placeholder="Vad ska göra?"
          onChange={handleOnChange}
        />
        <button onClick={handleClick}>Klicka </button>
      </div>
    );
  }
  
  export default AddTodo;