

export const Result = (props) => {
    console.log(props);
    const { EmployeeData, filter,handleEdit } = props;
    function handleRemove(props) {
        console.log(props);
        const FilterData = EmployeeData.filter(function (item) {
            console.log(item);
            return (item.email != props)
        }
        )
        console.log(FilterData); 
        
        filter(FilterData);        
    }
    
  
    const employeeData = EmployeeData.map(function (item) {
        return (<li key={item.email}>name:{item.name},Email:{item.email}, age:{item.age}
            <button onClick={() => handleRemove(item.email) } >remove</button>
            <button onClick={() =>  handleEdit(item) }>edit</button></li>)

    })
    console.log(employeeData);


    return (
        <>
            <div className="result bg-dark">
                <ul>
                    {employeeData}
                </ul>

            </div>
        </>
    )

}