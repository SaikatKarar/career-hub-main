const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applications');
    return storedJobApplication ? JSON.parse(storedJobApplication) : [];
}

const saveJobApplication = id => {
    const storedJobApplications = getStoredJobApplication();
    const exists = storedJobApplications.includes(id);
    if (!exists) {
        storedJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications));
    }
}

export { getStoredJobApplication, saveJobApplication }
