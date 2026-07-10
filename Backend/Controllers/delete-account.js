import Job from "../Models/jobs.js";
import Employer from "../Models/employer.js";


export const deleteAccount = async(req,res)=>{


    try{


        const employerId = req.user.id;



        const employer = await Employer.findById(employerId);



        if(!employer){


            return res.status(404).json({

                message:"Employer not found"

            });


        }





        // Delete all jobs posted by this employer

        await Job.deleteMany({

            employerId: employerId

        });






        // Delete employer account/profile

        await Employer.findByIdAndDelete(employerId);






        return res.status(200).json({

            message:"Account deleted successfully"

        });



    }


    catch(error){


        console.log(error);



        return res.status(500).json({

            message:"Server error"

        });


    }


};