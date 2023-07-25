import "../styles/homePage.css";
import JobCard, { JobCardType } from "./JobCard";

const JobResults = () => {

    let temporaryJobResult: JobCardType[] = [];
  
  for (let i = 0; i < 20; i++) {
    const job = {
      company: "Microsoft",
      title: "Software Engineer",
      payMin: 30,
      payMax: 40,
      location: "London",
      id: i,
    };
    temporaryJobResult.push(job);
  }

  let jobs = temporaryJobResult.map((job) => {
    return (
      <div key={job.id}>
        <JobCard
          company={job.company}
          title={job.title}
          payMin={job.payMin}
          payMax={job.payMax}
          location={job.location}
        ></JobCard>
      </div>
    );
  });

  return <div className="jobResults">{jobs}</div>;
};

export default JobResults;
