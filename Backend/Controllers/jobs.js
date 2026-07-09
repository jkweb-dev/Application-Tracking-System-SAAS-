import Job from "../Models/jobs.js";
import Employer from "../Models/employer.js";



export const createJob = async (req,res)=>{

    try{

        const employer = await Employer.findById(req.user.id);

        if(!employer){

            return res.status(404).json({

                success:false,

                message:"Employer not found"

            });

        }

        const {

            jobTitle,

            department,

            employmentType,

            location,

            workMode,

            description,

            requirements,

            skills,

            experienceLevel,

            salaryMin,

            salaryMax,

            currency,

            deadline,

            vacancies,

            status

        } = req.body;



        const job = await Job.create({

            employerId:req.user.id,

            companyName:employer.companyName,

            jobTitle,

            department,

            employmentType,

            location,

            workMode,

            description,

            requirements,

            skills,

            experienceLevel,

            salaryMin,

            salaryMax,

            currency,

            deadline,

            vacancies,

            status

        });




        res.status(201).json({

            success:true,

            message:"Job created successfully",

            job

        });

    }

    catch(error){

        res.status(500).json({

            success:false,

            message:"Server Error"

        });

    }

};


export const getEmployerJobs = async(req,res)=>{

    try{

        const jobs = await Job.find({

            employerId:req.user.id

        })

        .sort({

            createdAt:-1

        });



        res.status(200).json({

            success:true,

            jobs

        });

    }

    catch(error){
console.log(error)
        res.status(500).json({

            success:false,

            message:"Server Error"

        });

    }

};


export const getSingleJob = async(req,res)=>{

    try{

        const job = await Job.findOne({

            _id:req.params.id,

            employerId:req.user.id

        });

        if(!job){

            return res.status(404).json({

                success:false,

                message:"Job not found"

            });

        }

        res.status(200).json({

            success:true,

            job

        });

    }

    catch(error){

        res.status(500).json({

            success:false,

            message:"Server Error"

        });

    }

};


export const updateJob = async(req,res)=>{
console.log("Route Hitted")
    try{

        const job = await Job.findOne({

            _id:req.params.id,

            employerId:req.user.id

        });

        if(!job){

            return res.status(404).json({

                success:false,

                message:"Job not found"

            });

        }

        Object.assign(job,req.body);

        await job.save();

        res.status(200).json({

            success:true,

            message:"Job updated successfully",

            job

        });

    }

    catch(error){

        res.status(500).json({

            success:false,

            message:"Server Error"

        });

    }

};


export const deleteJob = async(req,res)=>{

    try{

        const job = await Job.findOne({

            _id:req.params.id,

            employerId:req.user.id

        });

        if(!job){

            return res.status(404).json({

                success:false,

                message:"Job not found"

            });

        }

        await job.deleteOne();

        res.status(200).json({

            success:true,

            message:"Job deleted successfully"

        });

    }

    catch(error){

        res.status(500).json({

            success:false,

            message:"Server Error"

        });

    }

};