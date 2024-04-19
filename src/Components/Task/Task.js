import css from './Task.module.css'
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from '../../Redux/actions';


 const Task = ({ task }) => {


  const dispatch = useDispatch()

  const handleDelete = () => dispatch(deleteTask(task.id))
  const handleToggle = () => dispatch(toggleCompleted(task.id))

    return (
      <div className={css.wrapper}>
        <input
          type="checkbox"
          className={css.checkbox}
          checked={task.completed}
          onChange={handleToggle}
        />
        <p className={css.text}>{task.text}</p>
        <button className={css.btn} onClick={handleDelete}>
          delete
        </button>
      </div>
    );
  };

  export default Task