import { useState, useEffect } from "react"



export const Content = ({ data, editingEmployee }) => {

    let [Profile, UpdateProfile] = useState({ name: '', email: '', age: '' });
    let [submit, UpdateSubmit] = useState(false);
    function handleChange(e) {
        const { name, value } = e.target;
        console.log(name);
        UpdateProfile({ ...Profile, [name]: value })

        console.log(Profile);
    }
    useEffect(() => {
        if (editingEmployee) {
            UpdateProfile(editingEmployee);
        }
    }, [editingEmployee]);

    function handleSubmit(e) {
        console.log(e);
        e.preventDefault();
        if (Profile.name == '' || Profile.email == '' || Profile.age == '') {
            alert('please fill all the form Input')
            return false;
        }
        else {
            UpdateSubmit(true);
            console.log(Profile)
            data(Profile);
            UpdateProfile({ name: '', email: '', age: '' })



        }

    }
    return (
        <div className="container-fluid heightContainer border-2 text-bg-dark">
            <form className="p-3" onSubmit={handleSubmit}>
                <div className="row d-flex flex-column  align-items-center">
                    <div className="mb-3 col-md-3">
                        <label htmlFor="Name" className="form-label">Name:</label>
                        <input type="text" className="form-control " value={Profile.name} name="name" placeholder="Enter Your Name" aria-label="name" onChange={handleChange} />
                    </div>
                    <div className="mb-3 col-md-3" >
                        <label htmlFor="inputEmail4" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="inputEmail4" value={Profile.email} name="email" placeholder="Enter Your E-mail Id" onChange={handleChange} />
                    </div>
                    <div className="mb-3 col-md-3">
                        <label htmlFor="age" className="form-label">Age:</label>
                        <input type="number" min={0} className="form-control" name="age" value={Profile.age} placeholder="Enter Your Age" id="age" onChange={handleChange} />
                    </div>

                    <div className="mb-3 col-md-3 text-center ">
                        <input type="submit" className="rounded px-3 px-1" value={editingEmployee ? "Update" : "Submit"} />
                    </div>

                </div>
            </form>
            {submit && <p style={{ color: "green", border: "2px solid Red", textAlign: 'center' }}>form has been submitted</p>}
           

        </div>
    )





}