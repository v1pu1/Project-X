import 'express-async-handler';
import Outpass from '../models/Outpass.js'
import Student from '../models/Student.js'
import Faculty from '../models/Faculty.js';

//@description     Get all Outpass
//@route           GET /api/outpass/
//@access          Now Open but make it protected
export const getAllOutpass = async(req,res)=>{
    const {studentId} = req.body;
    if(!studentId){
        res.status(400).json({message:"Provide a student ID"})
        return;
    }
    try{
        const outpasses = await Outpass.find({studentId:studentId});
        res.status(200).json(outpasses);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
};


//@description     Create an outpass
//@route           POST /api/outpass/
//@access          Now Open but make it protected
export const createNewOutpass=async(req,res)=>{
    const { studentId, dateofjourney, dateofreturn, ticket, contactNo, reason, hostelRoom, leaveTime, returnTime }=req.body;

    const dateofJ = new Date(dateofjourney) 
    const dateofR = new Date(dateofreturn)
    console.log(dateofJ, dateofR)
    console.log(req.body)

    // Bad Request
    if(!studentId||!dateofjourney||!dateofreturn){
        res.status(400).json({message:"Please pass all fields"});
        return;
    }

    // Bad Request
    if(dateofJ>dateofR){
        res.status(400).json({message:"Date of Journey should be smaller than date of return"});
        return;
    }

    const outpass={
        studentId:studentId,
        dateofjourney:dateofjourney,
        dateofreturn:dateofreturn,
        ticket:ticket,
        contactNo, reason, hostelRoom, leaveTime, returnTime
    };

    try{
        const student = await Student.findById(studentId)
        const faculty = await Faculty.findById(student.facultyAdvisor)
        const newOutpass = await Outpass.create(outpass)
        student.outpasses.push(newOutpass._id)
        student.currOutpass = newOutpass._id
        await student.save()
        faculty.outpasses.push(newOutpass._id)
        await faculty.save()
        console.log(student)
        res.status(201).json(newOutpass);
    }
    catch(error){
        res.status(400).send({message:"Some error occured"});
    }
};

export const getcurrentOutpass = async(req, res) => {
    try{
        const studentid = req.params.id.replace(/"/g, '');
        const student = await Student.findById(studentid)
        const currentOutpass = await Outpass.findById(student.currOutpass)
        res.status(200).send(currentOutpass)
    } catch(e) {
        console.log(e)
        res.status(400).send(e)
    }
}

export const withdrawOutpass = async(req, res) => {
    try{
        const studentId = req.params.id
        const student = await Student.findById(studentId)
        const outpassId = student.currOutpass
        
        const index = student.outpasses.indexOf(student.currOutpass)
        student.outpasses.splice(index, 1)
        student.currOutpass = undefined
        await student.save()

        const faculty = await Faculty.findById(student.facultyAdvisor)
        const index2 = faculty.outpasses.indexOf(outpassId)
        faculty.outpasses.splice(index2, 1)
        await faculty.save()

        await Outpass.findByIdAndDelete(outpassId)
        res.status(200).send(student)
    } catch(e) {
        console.log(e)
    }
}