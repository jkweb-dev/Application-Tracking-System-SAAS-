import Job from "../Models/jobs.js";
import Application from "../Models/Application.js";


export const getEmployerAnalytics = async (req, res) => {

    try {


        if (req.user.role === "jobseeker") {

            return res.status(403).json({

                success:false,

                message:"Access denied"

            });

        }



        const employerId = req.user.id;



        // Get employer jobs

        const jobs = await Job.find({

            employerId

        }).select("_id jobTitle");



        const jobIds = jobs.map(

            job => job._id

        );



        const totalJobs = jobs.length;



        // All applications for employer jobs

        const applications = await Application.find({

            jobId: {

                $in: jobIds

            }

        });



        const totalApplications = applications.length;



        const hiredCandidates = applications.filter(

            app => app.status === "Accepted"

        ).length;



        const activeCandidates = applications.filter(

            app =>

                [

                    "Applied",

                    "Under Review",

                    "Shortlisted",

                    "Interview"

                ].includes(app.status)

        ).length;





        // Status distribution

        const statusDistribution = await Application.aggregate([

            {

                $match: {

                    jobId: {

                        $in: jobIds

                    }

                }

            },

            {

                $group: {

                    _id:"$status",

                    count:{

                        $sum:1

                    }

                }

            },

            {

                $project: {

                    _id:0,

                    status:"$_id",

                    count:1

                }

            }

        ]);





        // Job performance

        const jobPerformance = await Application.aggregate([


            {

                $match: {

                    jobId:{

                        $in:jobIds

                    }

                }

            },


            {

                $group:{

                    _id:"$jobId",

                    applicants:{

                        $sum:1

                    }

                }

            },


            {

                $lookup:{

                    from:"jobs",

                    localField:"_id",

                    foreignField:"_id",

                    as:"job"

                }

            },


            {

                $unwind:"$job"

            },


            {

                $project:{

                    _id:0,

                    title:"$job.jobTitle",

                    applicants:1

                }

            }


        ]);





        // Monthly applications trend

        const applicationTrend = await Application.aggregate([


            {

                $match:{

                    jobId:{

                        $in:jobIds

                    }

                }

            },


            {

                $group:{

                    _id:{

                        month:{

                            $month:"$createdAt"

                        },

                        year:{

                            $year:"$createdAt"

                        }

                    },


                    applications:{

                        $sum:1

                    }

                }

            },


            {

                $sort:{

                    "_id.year":1,

                    "_id.month":1

                }

            }

        ]);





        return res.status(200).json({

            success:true,


            analytics:{


                stats:{

                    totalJobs,

                    totalApplications,

                    activeCandidates,

                    hiredCandidates

                },


                statusDistribution,


                jobPerformance,


                applicationTrend

            }


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