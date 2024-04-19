import css from './StatusFilter.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setStatusFilter } from '../../Redux/actions'
import { statusFilters } from '../../Redux/constants'
import { Button } from '../Button/Button'

const StatusFilter = () => {

const dispatch = useDispatch()

const filters = useSelector(state => state.filters.status)
const handleFilterChange = filter => dispatch(setStatusFilter(filter))

return (
    <div className={css.wrapper}>
        <Button onClick={() => handleFilterChange(statusFilters.all)} selected={filters === statusFilters.all}>all</Button>
        <Button onClick={() => handleFilterChange(statusFilters.active)} selected={filters === statusFilters.active}>active</Button>
        <Button onClick={() => handleFilterChange(statusFilters.completed)} selected={filters === statusFilters.completed}>Completed</Button>
    </div>
)


}

export default StatusFilter