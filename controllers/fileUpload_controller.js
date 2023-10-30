const File = require('../models/File');
const cloudinary = require('cloudinary').v2
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

function isFileTypeSupported(type, supportedTypes){
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder){
    const options = {folder}
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}
//image upload handler
exports.imageUpload = async(req, res) => {
    try {
        // fetch data from request
        const{name, tags, email} = req.body;
        //console.log(name, tags, email);

        const file = req.files.imageFile;
        //console.log("file", file);

        //validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        // console.log("fileType",fileType);

        // file format not supported
        if(!isFileTypeSupported(fileType, supportedTypes)){
            return res.status(400).json({
                success:false,
                message:'File formate is not supported'
            })
        }

        // if file format supported
        const response = await uploadFileToCloudinary(file, "content");
        console.log(response);
        // save entry into db
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url
        });
        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image Successfully Uploaded"
        });


    } catch (error) {
       console.log(error);
       res.status(400).json({
        success:false,
        message:"Something went wrong"
       });
    }
}