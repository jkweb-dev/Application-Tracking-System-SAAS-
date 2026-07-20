import fs from "fs";
import path from "path";


export const viewResume = async (req, res) => {

    try {

        const { filename } = req.params;



        if (!filename) {

            return res.status(400).json({

                success:false,

                message:"Resume path is required"

            });

        }



        const filePath = path.join(

            process.cwd(),

            "Uploads" ,
            
            "Resumes" ,

            filename

        );



        if (!fs.existsSync(filePath)) {

            return res.status(404).json({

                success:false,

                message:"Resume file not found"

            });

        }



        res.sendFile(filePath);


    }

    catch(error){

        console.log(error);


        return res.status(500).json({

            success:false,

            message:"Internal server error"

        });

    }

};