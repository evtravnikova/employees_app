import {Component} from "react";
import EmployeeListItem from '../employee-list-item/employee-list-item';

import './employee-list.css';


class EmployeeList extends Component {


    render() {
        const {data, onDelete, onToggleProp, onUpdateSalary, filterAttribute} = this.props;


        if (Object.keys(data).length === 0) {
            let warningMsg = '';

            switch (filterAttribute) {
                case 'rise':
                     warningMsg = <p>Працівників, які очікують на підвищення, не знайдено</p>
                    break
                case 'overThousand':
                     warningMsg = <p>Працівників, які отримують більше ніж $1000, не знайдено</p>
                    break
                default:
                     warningMsg = <p>Працівників у базі: 0. Додайте першого працівника.</p>
                    break
            }
            return (<ul className='app-list list-group'>
                {warningMsg}
            </ul>)
        }


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
            <ul className='app-list list-group'>
                {elements}
            </ul>
        )
    }


}

export default EmployeeList;