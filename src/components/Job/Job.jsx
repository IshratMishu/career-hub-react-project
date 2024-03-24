import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite,location, job_type, salary} = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className='flex gap-5'>
                    <button className='px-5 py-2 font-extrabold border rounded border-lime-400'>{remote_or_onsite}</button>
                    <button className='px-5 py-2 font-extrabold border rounded border-lime-400'>{job_type}</button>
                </div>
                <div className='flex gap-4'>
                <h2 className='flex items-center'><CiLocationOn />{location}</h2>
                <h2 className='flex items-center'><CiDollar />{salary}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                    <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object,
}

export default Job;