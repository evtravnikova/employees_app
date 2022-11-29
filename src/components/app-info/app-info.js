import './app-info.css';

const AppInfo = (props) => {
    const { employeesQty, increasedQty } = props;

    return (
        <div className='app-info'>
            <h1>Облік працівників у компанії Rozetka</h1>
            <h2>Загальна кількість працівників: {employeesQty}</h2>
            <h2>Премію отримають: {increasedQty}</h2>
        </div>
    )
}

export default AppInfo;