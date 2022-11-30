import {Component} from "react";
import './employee-add-form.css'

class EmployeeAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            warningClassName: 'hidden'
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {name, salary} = this.state;

        if (name && salary) {
            this.props.onAdd(name, salary);
            this.setState({
                name: '',
                salary: '',
                warningClassName: 'hidden'
            })
        } else {
            this.setState({
                name: name,
                salary: salary,
                warningClassName: 'showed'
            })
        }
    }


    render() {
        const {name, salary, warningClassName} = this.state;

        return (
            <div className='app-add-form'>
                <h3>Додайте нового працівника</h3>
                <form
                    className='add-form d-flex'
                    onSubmit={this.onSubmit}
                >
                    <input type="text"
                           className='form-control new-post-label'
                           placeholder="Впишіть його ім`я та прізвище"
                           name='name'
                           value={name}
                           onChange={this.onValueChange}
                    />
                    <input type="number"
                           className='form-control new-post-label'
                           placeholder="Впишіть ЗП у доларах"
                           name='salary'
                           value={salary}
                           onChange={this.onValueChange}
                    />

                    <button type='submit'
                            className='btn btn-outline-light'>Додати
                    </button>
                </form>
                <p className={warningClassName}>Введіть обидва значення</p>
            </div>
        )
    }
}

export default EmployeeAddForm;