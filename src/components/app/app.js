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
                {name: 'Sergii Sternenko', salary: 2780, increase: false, rise: false, id: 1},
                {name: 'Adam Polanski', salary: 480, increase: false, rise: false, id: 2},
                {name: 'Ewa Gonsales', salary: 1100, increase: false, rise: false, id: 3},
                {name: 'Rick Potek', salary: 1500, increase: false, rise: true, id: 4},
                {name: 'Mona Zelinsky', salary: 920, increase: false, rise: false, id: 5}
            ],
            searchString: '',
            filterAttribute: 'all'
        }
        this.maxId = 5;
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
            rise: false,
            id: ++this.maxId
        };
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }


    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, searchString) => {

        if (searchString.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.toUpperCase().indexOf(searchString.toUpperCase()) > -1
        })
    }

     onUpdateSearch = (searchString) => {
        this.setState({searchString});
    }

    filterPost = (items, attribute) => {
        switch (attribute) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'overThousand':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onFilterUpdate = (filterAttribute) => {
        this.setState(
            {filterAttribute})
    }

    onUpdateSalary = (newSalary, name) => {
            this.setState(({data}) => ({
                data: data.map(person => {
                    if (person.name === name) {
                        return {...person, salary: newSalary.replace(/\D/g, '')}
                    }
                    return person
                })
            }))
    }


    render() {
        const {data, searchString, filterAttribute} = this.state;
        const employeesQty = this.state.data.length;
        const increasedQty = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, searchString), filterAttribute);

        return (
            <div className='app'>
                <AppInfo
                    employeesQty={employeesQty}
                    increasedQty={increasedQty}
                />

                <div className='search-panel'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                        filterUpdate={this.onFilterUpdate}
                        filter={filterAttribute}
                    />
                </div>
                <EmployeeList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onUpdateSalary={this.onUpdateSalary}
                />
                <EmployeeAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}


export default App;