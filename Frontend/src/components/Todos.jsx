export function Todos({ todos }) {

    return <div className="main-todos">
        {todos.map(function (todo) {
            return <div className="todo1">
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>

                <button className="todo-button" onClick={() => { markas(todo._id) }}>{todo.completed == true ? "Completed" : "Mark as completed"}</button>
            </div>               // here we use double function because stop it from executing infinitely.thats why we passing referece of markas
        })}
    </div>
    function markas(id) {
        fetch("http://localhost:3000/completed", {
            method: "PUT",
            body: JSON.stringify({
                id: id
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(() => {
                console.log("Completed");
            })

    }
}