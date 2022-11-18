import './app-filter.css';

const AppFilter = () => {
    return (
        <div className='btn-group'>
            <button
                className='btn btn-light'
                type='button'>
                Всі працівники
            </button>
            <button
                className='btn btn-outline-light'
                type='button'>
                Очікують підвищення
            </button>
            <button
                className='btn btn-outline-light'
                type='button'>
                Отримують більш ніж $1000
            </button>
        </div>
    )
}

export default AppFilter;