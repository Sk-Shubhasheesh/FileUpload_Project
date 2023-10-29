const File = require('../models/File');

//localfileupload  --> handler function
exports.localFileUpload = async(req, res) => {
    try {
        //fetch file
        const file = req.files.file;
        // console.log("file is come", file);
        // for stroing file define path
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        // console.log("Path->",path);
        // move file to the path
        file.mv(path, (err)=>{
            console.log(err);
        });

        res.json({
            success:true,
            message:'Local File Uploaded Successfully'
        });
    } catch (error) {
        console.log("Not able to upload file on server");
        console.log(error);
    }

}