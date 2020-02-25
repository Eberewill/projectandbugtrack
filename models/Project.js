const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 const projectSchema  = new Schema({
     user:{
         type: Schema.Types.ObjectId,
         ref: 'user'
     },
     title:{
         type: String,
         required: true,
     },
     description:{
         type:String,
     },
     startdate:{
         type:Date,
         default: Date.now
     },
     enddate:{
        type:Date,
    },
    bugs:[
        {
            title:{
                type:String,
                required:true,
            },
            reporter:{
                type: Schema.Types.ObjectId,
                ref: 'user'
            },
            severerity:{
                type:String,
            },
            reportdate:{
                type:Date,
                default: Date.now
            },
            status:{
                type: String
            }
        }
    ],

    tasks:[
        {
            title:{
                type:String,
            },
            startdate:{
                type:Date,
                default: Date.now
            },
            enddate:{
                type:Date,
            },
            iscompleted:{
                type: Boolean,
                default: false
            }

        }
    ],
    githubrepo:{
        type: String
    }
   
 })

 module.exports = mongoose.model('Project', projectSchema)