import mongoose from "mongoose";

const employerSchema = new mongoose.Schema(

{

companyName:{

type:String,

required:true

},

industry:{

type:String,

required:true

},

companySize:{

type:String,

required:true

},

location:{

type:String,

required:true

},

hrName:{

type:String,

required:true

},

email:{

type:String,

required:true,

unique:true

},

password:{

type:String,

required:true

},

role:{

type:String,

default:"employer"

}

},

{

timestamps:true

}

);

const Employer =  mongoose.model(

"Employer",

employerSchema

);

export default Employer