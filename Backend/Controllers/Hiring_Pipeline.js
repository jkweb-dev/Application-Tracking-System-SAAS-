import Application from "../Models/Application.js";
import Job from "../Models/jobs.js";



export const getJobApplications = async (req, res) => {

    try {

        // Only Employer

        if (req.user.role !== "employer") {

            return res.status(403).json({

                success: false,

                message: "Access denied"

            });

        }



        const { jobId } = req.params;



        // Find Job

        const job = await Job.findById(jobId);



        if (!job) {

            return res.status(404).json({

                success: false,

                message: "Job not found"

            });

        }



        // Verify Ownership

        if (job.employerId.toString() !== req.user.id) {

            return res.status(403).json({

                success: false,

                message: "Access denied"

            });

        }



        // Get Applications

        const applications = await Application.find({

            jobId

        })

        .populate({

            path: "jobSeekerProfileId"

        })

        .sort({

            createdAt: -1

        });



        return res.status(200).json({

            success: true,

            applications

        });

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal server error"

        });

    }

};





export const updateApplicationStatus = async (req, res) => {

    try {


        // Only employer allowed

        if (req.user.role !== "employer") {

            return res.status(403).json({

                success: false,

                message: "Access denied"

            });

        }



        const { applicationId } = req.params;


        const { status } = req.body;



        const allowedStatuses = [

            "Applied",

            "Under Review",

            "Shortlisted",

            "Interview",

            "Accepted",

            "Rejected"

        ];



        if (!allowedStatuses.includes(status)) {

            return res.status(400).json({

                success:false,

                message:"Invalid application status"

            });

        }



       const application = await Application.findById(applicationId)
.populate("jobId");


if(
    application.jobId.employerId.toString()
    !==
    req.user.id
){

    return res.status(403).json({

        success:false,

        message:"You cannot modify this application"

    });

}

        if (!application) {

            return res.status(404).json({

                success:false,

                message:"Application not found"

            });

        }



        /*
            Important:

            Here we should verify that this employer
            owns the job related to this application

        */


        const updatedApplication = await Application.findByIdAndUpdate(

            applicationId,

            {

                status

            },

            {

                new:true

            }

        );



        return res.status(200).json({

            success:true,

            message:"Application status updated successfully",

            application:updatedApplication

        });


    }

    catch(error){

        console.log(error);


        return res.status(500).json({

            success:false,

            message:"Internal server error"

        });

    }

};