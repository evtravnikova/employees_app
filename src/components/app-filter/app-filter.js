import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Всі працівники'},
        {name: 'rise', label: 'Очікують на підвищення'},
        {name: 'overThousand', label: 'Отримують більш ніж $1000'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (<button
                className={`btn ${clazz}`}
                type='button'
                key={name}
                onClick={(e) =>
                    props.filterUpdate(name)
                }
            >{label}</button>
        )
    })

    return (
        <div className='btn-group'>
            {buttons}
        </div>
    )
}
//onClick={(e) => {
//                     this.props.filterUpdate(e.currentTarget.getAttribute('data-filter'))
//                 }}

export default AppFilter;