import multer from "multer";
import path from "path";



const storage = multer.diskStorage({

    destination:(req,file,cb)=>{

        cb(
            null,
            "uploads/resumes"
        );

    },


    filename:(req,file,cb)=>{


        const uniqueName =

            Date.now()
            +
            "-"
            +
            Math.round(Math.random()*1E9)
            +
            path.extname(file.originalname);



        cb(
            null,
            uniqueName
        );

    }

});





const fileFilter = (req,file,cb)=>{


    if(file.mimetype === "application/pdf"){

        cb(null,true);

    }

    else{


        const error = new Error(
            "Only PDF files are allowed"
        );


        error.statusCode = 415;


        cb(error,false);

    }


};





const upload = multer({

    storage,

    fileFilter,

    limits:{

        fileSize:5 * 1024 * 1024

    }

});





const uploadResume = (req,res,next)=>{


    upload.single("resume")(req,res,(error)=>{


        if(error){



            if(error.code === "LIMIT_FILE_SIZE"){


                return res.status(413).json({

                    success:false,

                    message:
                    "File size must be less than 5MB"

                });

            }





            if(error.statusCode === 415){


                return res.status(415).json({

                    success:false,

                    message:error.message

                });

            }





            return res.status(400).json({

                success:false,

                message:error.message

            });


        }



        next();


    });


};





export default uploadResume;