import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../utility/localstorage';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams()
    const job = jobs.find(job => job.id === parseInt(id))

    const handleApplyJob = () => {
        saveJobApplication(parseInt(id))
        toast("You have applied successfully")
    }
    return (
        <div>

            <div className='grid gap-4 md:grid-cols-4'>
                <div className='border md:col-span-3'>
                    <h2 className="text-4xl">Details Coming here</h2>
                    <h2>Job Details of: {job.job_title}</h2>
                    <p>{job.company_name}</p>
                </div>
                <div className='border'>
                    <h2 className="text-2xl">Side Thing</h2>
                    <button onClick={handleApplyJob} className='btn btn-primary w-full'>APPLY NOW</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;