import {Component} from "react";
import EmployeeListItem from '../employee-list-item/employee-list-item';

import './employee-list.css';


class EmployeeList extends Component {


    render() {
        const {data, onDelete, onToggleProp, onUpdateSalary, riseEmptyFilter, overThousandEmptyFilter, allEmptyFilter} = this.props;

        let emptyRiseWarning = '',
            emptyIncreaseWarning = '',
            emptyAllFilter = '';

        riseEmptyFilter? emptyRiseWarning = <p>Працівників, які очікують на підвищення, не знайдено</p> : emptyRiseWarning = '';
        overThousandEmptyFilter? emptyIncreaseWarning = <p>Працівників, які отримують більше ніж $1000, не знайдено</p> : emptyIncreaseWarning = '';
        allEmptyFilter? emptyAllFilter = <p>Працівників у базі: 0. Додайте першого працівника.</p> : emptyAllFilter = '';

        const elements = data.map(item => {
            const {id, ...itemProps} = item;

            return (
                <>
                    <EmployeeListItem
                        key={id}
                        {...itemProps}
                        onDelete={() => onDelete(id)}
                        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                        onUpdateSalary={onUpdateSalary}
                    />
                </>
            )
        })

        return (
            <>
                <ul className='app-list list-group'>
                    {elements}
                    {emptyAllFilter}
                    {emptyRiseWarning}
                    {emptyIncreaseWarning}
                </ul>

            </>
        )
    }


}

export default EmployeeList;