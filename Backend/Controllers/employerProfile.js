import Employer from "../Models/employer.js";




// GET PROFILE


export const getEmployerProfile = async(req,res)=>{


    
    try{


        const employer = await Employer.findById(

            req.user.id

        ).select("-password");



        if(!employer){


            return res.status(404).json({

                message:"Employer not found"

            });


        }



        res.status(200).json({


            success:true,


            user:employer


        });



    }

    catch(error){


        res.status(500).json({

            message:"Server error"

        });


    }


};






// UPDATE PROFILE


export const updateEmployerProfile = async(req,res)=>{


    try{


        const employer = await Employer.findById(

            req.user.id

        );


          if (req.user.role === "recruiter" || req.user.role === "hiring_manager") {
               return res.status(403).json({

                message:"You are not allowed to edit Company Profile"

            });
        }




        if(!employer){


            return res.status(404).json({

                message:"Employer not found"

            });


        }




        employer.companyName = req.body.companyName || employer.companyName;


        employer.industry = req.body.industry || employer.industry;


        employer.companySize = req.body.companySize || employer.companySize;


        employer.location = req.body.location || employer.location;


        employer.hrName = req.body.hrName || employer.hrName;




        await employer.save();



        res.status(200).json({

            success:true,

            message:"Profile updated successfully",

            user:{

                companyName:employer.companyName,

                industry:employer.industry,

                companySize:employer.companySize,

                location:employer.location,

                hrName:employer.hrName,

                email:employer.email

            }


        });



    }

    catch(error){


        res.status(500).json({

            message:"Server error"

        });


    }


};