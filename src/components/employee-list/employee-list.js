import EmployeeListItem from '../employee-list-item/employee-list-item';

import './employee-list.css';


const EmployeeList = ({data,filterState, onDelete, onToggleProp, onUpdateSalary}) => {
    if (Object.keys(data).length === 0) {
            let msg = "";
            switch (filterState) {
                case 'rise':
                    msg = "No rise"
                    break
                case 'overThousand':
                    msg = "No 1000"
                    break
                default:
                    msg = "No users"
                    break
            }
            return ( <ul className='app-list list-group'>
                {msg}
        </ul>)
        }
    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return (
            <EmployeeListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onUpdateSalary={onUpdateSalary}
            />
        )
    })

    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    )
}

export default EmployeeList;