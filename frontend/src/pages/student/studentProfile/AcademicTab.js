import React from 'react'
import { Divider } from 'primereact/divider';

function AcademicTab() {
    return (
        <>
            <div className="grid p-fluid">
                <div className="col">
                    <h3 className="my-2 font-bold mt-6">Degree Details</h3>
                    <Divider className="my-4" layout="horizontal"></Divider>

                    <div className="flex w-full">
                        <div className='w-full'>
                            <div className="flex justify-content-between ">
                                <h5 className="m-0">Degree Name</h5>
                                <h5 className="m-0 font-semibold">Bachelor of Technology</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Degree Type</h5>
                                <h5 className="m-0 font-semibold">Regular</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Branch</h5>
                                <h5 className="m-0 font-semibold">Data Science</h5>
                            </div>
                        </div>
                        <Divider layout="vertical" />
                        <div className='w-full'>
                            <div className="flex justify-content-between">
                                <h5 className="m-0">Batch Year</h5>
                                <h5 className="m-0 font-semibold">2020</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">From date</h5>
                                <h5 className="m-0 font-semibold">45-34-2313</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">To date</h5>
                                <h5 className="m-0 font-semibold">45-34-2313</h5>
                            </div>
                        </div>
                    </div>

                    <h5 className="my-2 font-bold mt-6">Guide Details</h5>
                    <Divider className="mb-7" layout="horizontal"></Divider>
                    <div className="flex w-full">
                        <div className='w-full'>
                            <div className="flex justify-content-between">
                                <h5 className="m-0">Name</h5>
                                <h5 className="m-0 font-semibold">Horoshi Nohara</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">From date</h5>
                                <h5 className="m-0 font-semibold">45-34-2313</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between">
                                <h5 className="m-0">To date</h5>
                                <h5 className="m-0 font-semibold">45-34-2313</h5>
                            </div>
                        </div>
                        <Divider layout="vertical" />
                        <div className='w-full'>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Email</h5>
                                <h5 className="m-0 font-semibold">sdngngf@gmail.com</h5>
                            </div>
                            <Divider layout="horizontal"></Divider>
                            <div className="flex justify-content-between my-5">
                                <h5 className="m-0">Mobile No.</h5>
                                <h5 className="m-0 font-semibold">335534627637</h5>
                            </div>
                        </div>
                    </div>




                </div>
            </div>

        </>
    );
}

export default AcademicTab;