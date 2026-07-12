import Job from "../Models/jobs.js";
import Employer from "../Models/employer.js";
import TeamMember from "../Models/Team_Member.js";


export const deleteAccount = async(req,res)=>{


    try{


        const employerId = req.user.id;
        const role = req.user.role



        const employer = await Employer.findById(employerId);



        if(!employer){


            return res.status(404).json({

                message:"Employer not found"

            });


        }

          if (role === "recruiter" || role === "hiring_manager") {
               return res.status(403).json({

                message:"You are not allowed to delete Company Account"

            });
        }






        // Delete all jobs posted by this employer

        await Job.deleteMany({

            employerId: employerId

        });



await TeamMember.deleteMany({
    EmployerId : employerId
})


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