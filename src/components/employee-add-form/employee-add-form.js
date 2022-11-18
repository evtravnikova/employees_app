import './employee-add-form.css'


const EmployeeAddForm = () => {
    return (
        <div className='app-add-form'>
            <h3>Додайте нового працівника</h3>
            <form
                className='add-form d-flex'>
                <input type="text"
                       className='form-control new-post-label'
                       placeholder="Впишіть його ім`я та прізвище"/>
                <input type="number"
                       className='form-control new-post-label'
                       placeholder="Впишіть ЗП у доларах"/>

                <button type='submit'
                        className='btn btn-outline-light'>Додати
                </button>
            </form>
        </div>
    )
}

export default EmployeeAddForm;