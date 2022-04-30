import Typography from "@mui/material/Typography";

const Blog4 = () => {
  const heading = () => (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <Typography variant="h3" className="text-center">Accelerate Your Recruitment</Typography>
      <Typography variant="body1" className="my-3 mx-5 text-justify">
        All of us could relate to our struggle to identify the right talent
        quickly. And, if you are hiring for a software engineer, the challenges
        are even worse. After opening up roles, sometimes, it takes weeks to
        speak to the candidate. A careful analysis of this problem revealed an
        industry-wide issue for enterprises, start-ups, big tech companies, or
        even IT recruitment firms. The talent availability gap in software
        engineering roles is growing exponentially. We expect this problem to
        grow significantly. As per the US Bureau of Labor Statistics, software
        engineering roles will grow at 22%—the fastest among all professions.
        Unfortunately, our current system & processes cannot handle such a
        massive spike in demand. IT and engineering are among the top ten most
        challenging roles to fill in the US. According to a survey, 69% of
        employers struggle to fill tech positions, and the trend has alarmingly
        more than tripled within a decade. As per a benchmark report, 30 days is
        the average time to hire an IT/Technology role—the highest compared to
        other positions.
      </Typography>

      <Typography variant="h5" className="my-4 text-center">
        Where does the challenge lie?
      </Typography>
      <Typography variant="body1" className="my-3 mx-5 text-justify">
        After performing due diligence with a few of our customers, we found
        that recruiters, despite having all tools, still manually screen resumes
        identifying the fitment. An inefficient recruitment process is wasting
        significant recruiter hours to determine suitable candidates. Recruiters
        often use skills, keywords, or job titles to search through ATS and
        other job portals, requiring hours of manual filtering. Further, the ATS
        systems filter out candidates if their resumes do not have matching
        keywords. For example, LinkedIn offers 100K+ resumes, and then the
        industry-leading ATS products like JobDiva reduce possible candidates to
        10K+ for each role. Thus identifying suitable candidates still requires
        significant manual effort. Fact is, not all candidate resumes will have
        keywords as given in the job description. And, even if the candidate
        profile has keywords, only a diligent manual screening confirms if the
        candidates' skillsets are current and have not been used more than five
        years ago. Lastly, poor role descriptions and skill requirements result
        in mismatched candidate screening. Now, as hiring managers, how do we
        find the right talent given these constraints? According to a recent
        study, 52% of recruitment agencies found, screening from a large pool of
        applicants is the most challenging part of the recruitment process.
        Typically, a recruiter manually screens 100-150 resumes per role and
        spends around two hours per day. Also, there are approximately 2600
        recruitment firms in the US with an average of 50 recruiters. A rough
        estimate suggests a staggering 260,000 hours are spent per day to screen
        resumes manually. While the numbers speak for themselves, a recruiter
        effectively spends only six seconds on average to review a resume. And
        this number even reduces as more candidates apply per job role. Also, a
        CV does not do justice for engineers' potential, as their GitHub or
        Hackerrank rankings must also be among selection criteria. As per recent
        statistics, on average, a job offer attracts around 250 resumes. Of
        these candidates, only 4-6 will get called for an interview, and
        eventually, one will get the job. So, do you believe that the recruiters
        are bringing the best candidates to the hiring managers? Our survey
        gathered data from 100+ recruiters across 15 recruitment firms for %
        efforts across the recruitment value chain. The figure below illustrates
        the result. We also found the average industry productivity for software
        role closure per month per recruiter is 1.4. With the growing demand for
        software engineers, these figures seem not to be improving. Hence,
        optimizing the "Resume Screening" step is much needed to speed up the
        entire process.
      </Typography>
      <img
        className="my-4"
        src="/images/blog_4_2.jpg"
        alt="card__image"
        width="60%"
      />

      <Typography variant="h5" className="my-4 text-center">
        What is the solution?
      </Typography>
      <Typography variant="body1" className="my-3 mx-5 text-justify">
        So, we decided to build an AI-based SaaS product, which can review
        resumes like humans and deliver at scale by processing millions of
        resumes in seconds, reducing time to identify the right talent. Thus,
        it'll help improve our customer's business outcomes - both revenue and
        profitability. A key differentiator in our product is that we have
        re-engineered "search" at foundational levels. We have empirically
        validated to improve 3 KPIs—Revenue per Recruiter, Candidate
        Confirmation per Interview, and 'Time to Staff.' Our product allows
        recruiters to upload their thousands of roles & resumes to our app and
        they can download recommended resumes (with rank) for each role in
        minutes, if not seconds. Hence, no behavioral changes are required among
        the recruitment workforce to adopt our product. The entire product is
        built on Google Cloud, using serverless and ML components, delivering
        scale and performance. We boast a single easy-to-use interface (built on
        React.js) for processing hundreds of roles & thousands of resumes. As
        per recent pilots with 30+ recruitment firms, we have analyzed more than
        15,000 resumes and 2000+ job descriptions. An 80-85% improvement was
        realized in recruiter's efficiency via a four-step process: 1. Recruiter
        collects all roles in an excel spreadsheet 2. Recruiter Zips all
        available resumes 3. Recruiter uploads to our app 4. Recruiter receives
        recommended resume list for each open role Also, the recruiter
        efficiency was improved from 1.2 closures per month to 2.6 closures per
        month (averaged over three months).
      </Typography>
    </div>
  );

  return <div className="my-5 blog">{heading()}</div>;
};

export default Blog4;
