import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    facultyList:[],
    isLoading:false,
    hasFailed:false
}

const facultySlice = createSlice({
    name: 'Faculty',
    initialState,
    reducers:{
        continueOnErrorhandler(state,action){
            state.hasFailed=false
        }
    },
    extraReducers(builder) {
        builder
            .addCase(addFacultyServer.pending, (state, action) => {
                state.isLoading=true
            })
            .addCase(addFacultyServer.fulfilled, (state, action) => {
                state.facultyList.push({...action.payload})
            })
            .addCase(addFacultyServer.rejected, (state, action) => {
                state.isLoading=false;
                state.hasFailed=true;
                console.log(action);
            })
            .addCase(getFacultyServer.pending,(state,action)=>{
                state.isLoading=true
                console.log(action);
                console.log("Some error occured");
            })
            .addCase(getFacultyServer.fulfilled, (state,action) => {
                action.payload.forEach(element => {
                    state.facultyList.push(element)
                });
            })
            .addCase(getFacultyServer.rejected,(state,action)=>{
                state.isLoading=false;
                state.hasFailed=true;
                console.log(action);
                console.log("Some error occured");
            })
            .addCase(editFacultyServer.pending,(state,action)=>{
                state.isLoading=true
                console.log(action);
                console.log("Some error occured");
            })
            .addCase(editFacultyServer.fulfilled, (state, action) => {
                const index = state.facultyList.findIndex((element) => action.meta.arg._id === element._id)
                state.facultyList[index] = action.meta.arg
            })
            .addCase(editFacultyServer.rejected, (state, action) => {
                state.isLoading=false;
                state.hasFailed=true;
                console.log(action.error)
            })
            .addCase(deleteFacultyServer.pending, (state, action) => {
                state.isLoading=true
            })
            .addCase(deleteFacultyServer.rejected, (state, action) => {
                state.isLoading=false;
                state.hasFailed=true;
            })
            .addCase(deleteFacultyServer.fulfilled, (state, action) => {
                const index = state.facultyList.findIndex((element) => action.payload._id === element._id)
                state.facultyList.splice(index, 1)
            })
    }
})

export const addFacultyServer = createAsyncThunk('faculty/addfaculty', async (data) => {
    const {faculty,token}=data;
    // console.log(faculty);
    // console.log(token);
    const response = await axios.post('http://localhost:5000/api/faculty', faculty,{headers: {Authorization: "Bearer " + token}})
    return response.data
})

export const getFacultyServer = createAsyncThunk('faculty/getfaculty', async (data) => {
    var {token} = data;
    console.log("running");
    const response = await axios.get('http://localhost:5000/api/faculty',{headers: {Authorization: "Bearer " + token}})
    return response.data;
})

export const editFacultyServer = createAsyncThunk('faculty/editfaculty', async (facultyData) => {
    const {token,faculty} = facultyData;
    const response = await axios.patch(`http://localhost:5000/api/faculty/${faculty._id}`, faculty,{headers: {Authorization: "Bearer " + token}})
    return response.data
})

export const deleteFacultyServer = createAsyncThunk('faculty/deletefaculty', async (facultyData) => {
    const {token,faculty} = facultyData;
    const response = await axios.delete(`http://localhost:5000/api/faculty/${faculty._id}`,{headers: {Authorization: "Bearer " + token}})
    return faculty
})

export const { continueOnErrorhandler } = facultySlice.actions

export default facultySlice.reducer 