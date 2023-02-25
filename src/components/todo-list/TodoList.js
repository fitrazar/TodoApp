import './TodoList.css';

const TodoList = (props) => {
    // console.log(props.dataTodos);

    return (
        <ul>{
            props.dataTodos.map((todo2) => {
                // {id: 1, title: 'eat'}
                return <li key={todo2.id}>{todo2.title}</li>
            })
        }</ul>
    )
}

export default TodoList