import Application from "../Models/Application.js";
import Job from "../Models/jobs.js";
import JobSeekerProfile from "../Models/JobSeekerProfile.js";



export const applyJob = async (req, res) => {

    try {

        // Only Job Seekers

        if (req.user.role !== "jobseeker") {

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



        // Check Job Status

        if (job.status !== "active") {

            return res.status(400).json({

                success: false,

                message: "This job is no longer accepting applications"

            });

        }



        // Check Deadline

        if (new Date(job.deadline) < new Date()) {

            return res.status(400).json({

                success: false,

                message: "Application deadline has passed"

            });

        }



        // Find Job Seeker Profile

        const profile = await JobSeekerProfile.findOne({

            userId: req.user.id

        });



        if (!profile) {

            return res.status(404).json({

                success: false,

                message: "Please complete your profile before applying"

            });

        }



        // Already Applied?

        const existingApplication = await Application.findOne({

            jobId,

            jobSeekerId: req.user.id

        });



        if (existingApplication) {

            return res.status(409).json({

                success: false,

                message: "You have already applied for this job"

            });

        }



        // Create Application

        const application = await Application.create({

            jobId,

            employerId: job.employerId,

            jobSeekerId: req.user.id,

            jobSeekerProfileId: profile._id

        });



        return res.status(201).json({

            success: true,

            message: "Application submitted successfully",

            application

        });

    }

    catch (error) {

        console.log(error);



        // Handle duplicate index error (extra safety)

        if (error.code === 11000) {

            return res.status(409).json({

                success: false,

                message: "You have already applied for this job"

            });

        }



        return res.status(500).json({

            success: false,

            message: "Internal server error"

        });

    }

};