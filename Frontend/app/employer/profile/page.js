"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


export default function EmployerProfilePage() {


    const [profile, setProfile] = useState(null);

    const [editMode, setEditMode] = useState(false);

    const [loading, setLoading] = useState(true);

    const [saving, setSaving] = useState(false);



    const router = useRouter()

    const [formData, setFormData] = useState({

        companyName: "",
        industry: "",
        companySize: "",
        location: "",
        hrName: "",
        email: ""

    });



    // Fetch Employer Profile


    const fetchProfile = async()=>{


        try {


            setLoading(true);



            const token = localStorage.getItem("token");



            const response = await axios.get(

                "http://localhost:5000/employer/profile",

                {

                    headers:{

                        Authorization:`Bearer ${token}`

                    }

                }

            );



            const user = response.data.user;



            setProfile(user);



            setFormData({

                companyName:user.companyName || "",

                industry:user.industry || "",

                companySize:user.companySize || "",

                location:user.location || "",

                hrName:user.hrName || "",

                email:user.email || ""

            });



        } catch(error){


          
    if(error.response){

        const status = error.response.status;
        const message = error.response.data.message;

        if(status === 401){

            toast.error(message || "Session expired. Please login again");

            localStorage.removeItem("token");

            router.push("/");

        }else{

            toast.error(message || "Something went wrong");

        }

    }else{

        toast.error("Network error. Please check your connection");

    }


        }

        finally{


            setLoading(false);


        }


    };





    useEffect(()=>{


        fetchProfile();


    },[]);





    // Handle Change


    const handleChange=(e)=>{


        setFormData({

            ...formData,

            [e.target.name]:e.target.value

        });


    };





    // Save Profile


    const handleSave=async()=>{


        try{


            setSaving(true);



            const token = localStorage.getItem("token");



            const response = await axios.put(

                "http://localhost:5000/employer/profile",

                {

                    companyName:formData.companyName,

                    industry:formData.industry,

                    companySize:formData.companySize,

                    location:formData.location,

                    hrName:formData.hrName

                },

                {

                    headers:{

                        Authorization:`Bearer ${token}`

                    }

                }

            );



            toast.success(

                response.data.message ||

                "Profile updated"

            );



            setEditMode(false);



            fetchProfile();



        }

        catch(error){


        
    if(error.response){

        const status = error.response.status;
        const message = error.response.data.message;

        if(status === 401){

            toast.error(message || "Session expired. Please login again");

            localStorage.removeItem("token");

            router.push("/login");

        }else{

            toast.error(message || "Something went wrong");

        }

    }else{

        toast.error("Network error. Please check your connection");

    }

        }

        finally{


            setSaving(false);


        }


    };





    // Cancel Editing


    const handleCancel=()=>{


        setEditMode(false);



        setFormData({

            companyName:profile.companyName || "",

            industry:profile.industry || "",

            companySize:profile.companySize || "",

            location:profile.location || "",

            hrName:profile.hrName || "",

            email:profile.email || ""

        });


    };





    if(loading){


        return (

            <div className="min-h-screen flex items-center justify-center">


                <div className="text-emerald-600 font-semibold text-xl">

                    Loading Profile...

                </div>


            </div>

        );


    }





    return (


        <div className="max-w-5xl mx-auto space-y-8">



            {/* Header Card */}


            <div className="bg-white rounded-3xl shadow-lg border border-emerald-100 p-8">



                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">



                    <div className="flex items-center gap-5">



                        <div className="w-24 h-24 rounded-full bg-emerald-600 text-white flex items-center justify-center text-4xl font-bold shadow-lg">


                            {

                                formData.companyName

                                ?

                                formData.companyName.charAt(0).toUpperCase()

                                :

                                "C"

                            }


                        </div>




                        <div>


                            <h1 className="text-3xl font-bold text-gray-800">

                                {formData.companyName}

                            </h1>



                            <p className="text-gray-500 mt-1">

                                Company Profile

                            </p>


                        </div>



                    </div>





                    {

                        !editMode &&

                        (

                            <button


                                onClick={()=>setEditMode(true)}


                                className="

                                px-6

                                py-3

                                rounded-xl

                                bg-emerald-600

                                text-white

                                font-semibold

                                hover:bg-emerald-700

                                transition

                                "

                            >

                                Edit Profile


                            </button>


                        )

                    }



                </div>



            </div>





            {/* Information Card */}



            <div className="bg-white rounded-3xl shadow-lg border border-emerald-100 p-8">



                <h2 className="text-2xl font-bold text-gray-800 mb-8">

                    Company Information

                </h2>





                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">



                    <InputField

                        label="Company Name"

                        name="companyName"

                        value={formData.companyName}

                        editMode={editMode}

                        onChange={handleChange}

                    />




                    <SelectField

                        label="Industry"

                        name="industry"

                        value={formData.industry}

                        editMode={editMode}

                        onChange={handleChange}

                        options={[

                            "Software",

                            "Security",

                            "Construction",

                            "Education",

                            "Healthcare"

                        ]}

                    />




                    <SelectField

                        label="Company Size"

                        name="companySize"

                        value={formData.companySize}

                        editMode={editMode}

                        onChange={handleChange}

                        options={[

                            "1-10",

                            "11-50",

                            "51-200",

                            "201-500",

                            "500+"

                        ]}

                    />





                    <InputField

                        label="Location"

                        name="location"

                        value={formData.location}

                        editMode={editMode}

                        onChange={handleChange}

                    />





                    <InputField

                        label="HR Name"

                        name="hrName"

                        value={formData.hrName}

                        editMode={editMode}

                        onChange={handleChange}

                    />





                    <InputField

                        label="Email"

                        name="email"

                        value={formData.email}

                        editMode={false}

                    />



                </div>






                {

                    editMode &&

                    (

                        <div className="flex justify-end gap-4 mt-10">


                            <button

                                onClick={handleCancel}

                                className="px-6 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 transition"

                            >

                                Cancel

                            </button>




                            <button

                                onClick={handleSave}

                                disabled={saving}

                                className="px-6 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition"

                            >

                                {

                                    saving

                                    ?

                                    "Saving..."

                                    :

                                    "Save Changes"

                                }


                            </button>



                        </div>


                    )

                }




            </div>



        </div>


    );


}





function InputField({

    label,

    name,

    value,

    editMode,

    onChange

}){


    return (

        <div>


            <label className="text-sm text-gray-500">

                {label}

            </label>



            {

                editMode

                ?

                (

                    <input

                        name={name}

                        value={value}

                        onChange={onChange}

                        className="

                        mt-2

                        w-full

                        px-4

                        py-3

                        rounded-xl

                        border

                        focus:ring-2

                        focus:ring-emerald-400

                        outline-none

                        "

                    />

                )

                :

                (

                    <p className="mt-2 font-semibold text-gray-800">

                        {value || "-"}

                    </p>

                )

            }



        </div>

    );


}






function SelectField({

    label,

    name,

    value,

    editMode,

    onChange,

    options

}){


    return (

        <div>


            <label className="text-sm text-gray-500">

                {label}

            </label>



            {

                editMode

                ?

                (

                    <select

                        name={name}

                        value={value}

                        onChange={onChange}

                        className="

                        mt-2

                        w-full

                        px-4

                        py-3

                        rounded-xl

                        border

                        outline-none

                        focus:ring-2

                        focus:ring-emerald-400

                        "

                    >

                        {

                            options.map((item)=>(

                                <option

                                    key={item}

                                >

                                    {item}

                                </option>

                            ))

                        }


                    </select>


                )

                :

                (

                    <p className="mt-2 font-semibold text-gray-800">

                        {value || "-"}

                    </p>

                )

            }



        </div>

    );


}