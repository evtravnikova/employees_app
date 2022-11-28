import {Component} from "react";
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form'


import "./app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Sergii Sternenko', salary: 2780, increase: false, id: 1},
                {name: 'Adam Polanski', salary: 480, increase: false, id: 2},
                {name: 'Ewa Gonsales', salary: 1100, increase: false, id: 3},
                {name: 'Rick Potek', salary: 1500, increase: true, id: 4},
                {name: 'Mona Zelinsky', salary: 920, increase: false, id: 5}
            ],
        }
        this.maxId = 6
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <div className='app'>
                <AppInfo/>

                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeeList
                    data={this.state.data}
                    onDelete={this.deleteItem}

                />
                <EmployeeAddForm
                onAdd={this.addItem}/>
            </div>
        )
    }
}


export default App;