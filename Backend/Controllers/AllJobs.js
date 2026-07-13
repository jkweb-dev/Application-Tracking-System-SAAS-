import Job from "../Models/jobs.js";


export const getAllJobs = async(req,res)=>{


    try{


        const jobs = await Job.find()

        .populate({

            path:"employerId",

            select:"companyName email"

        })

        .sort({

            createdAt:-1

        });



        return res.status(200).json({

            message:"Jobs fetched successfully",

            jobs

        });



    }


    catch(error){


        console.log(error);


        return res.status(500).json({

            message:"Server error"

        });


    }


};