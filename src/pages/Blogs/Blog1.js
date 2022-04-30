import Typography from "@mui/material/Typography";

const Blog1 = () => {
  const heading = () => (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <Typography variant="h3" className="text-center">
        How AI is Revolutionizing Candidate Screening
      </Typography>
      <img
        className="m-4"
        src="/images/blog_1.png"
        alt="card__image"
        width="60%"
      />
      <Typography variant="body1" className="my-3 mx-5 text-justify">
        Candidate search is the first and most critical aspect of the
        recruitment cycle. An organization may have dedicated recruiters to
        perform this activity. Few may also outsource it to agencies. However,
        the challenge in this process seems to be never-ending—mapping the
        skillsets required in JD to that of candidates from a list of hundreds,
        if not thousands. Be it recruitment portals or ATS; keywords are the
        most helpful tool to carry out candidate sourcing. In several scenarios,
        the 'gut-feel plays a more significant role than the experience and
        skills of the recruiter. To bring efficiency, several organizations have
        started leveraging the power of automation to screen the right
        candidate. In terms of technology, AI/ML-based tools are revolutionizing
        the entire recruitment value chain—especially the screening part that
        consumes the most effort.
      </Typography>

      <Typography variant="h5" className="my-4 text-center">
        Machine-driven CV screening
      </Typography>
      <Typography variant="body1" className="my-3 mx-5 text-justify">
        Resume screening to date has never been fast and accurate. Humans do
        make mistakes while screening apart from being unconsciously biased.
        Plus, it takes a massive effort to screen skillsets that 'really' match
        the job description. With an automated approach by next-gen platforms,
        resume screening has been incredibly fast, along with clinical level
        accuracy. AI-enabled ATS considers all aspects of a candidate's
        skillsets (recency, competency, industry, geography) before filtering
        out noise. The best part is that the machine only thinks objectively,
        taking out any account of biases or influences. As preliminary
        activities, a recruiter needs to set up rules in the ATS that are too
        customized for his requirement. AI/ML has garnered attention in
        candidate screening and the entire recruitment process, with remarkable
        outcomes.
      </Typography>

      <Typography variant="h5" className="my-4 text-center">
        Advantages of AI-driven profile screening
      </Typography>
      <Typography variant="body1" className="my-3 mx-5 text-justify">
        A modern-day recruitment process is powered by digital technologies to
        bring in higher efficiency and better outcomes. As more organizations
        embrace data-driven automation, resume screening will evolve into a
        commodity rather than a niche skill. Due to the higher demand for talent
        and diversified skillsets, AI-enabled recruitment platforms will gain
        popularity and adoption.
      </Typography>

      <Typography variant="h5" className="my-4 text-center">
        Time & Effort{" "}
      </Typography>
      <Typography variant="body1" className="my-3 mx-5 text-justify">
        Fulfilling an open position is an arduous task, further exacerbated due
        to a rising skills shortage. Firstly, there are thousands of suggested
        resumes with matching keywords, and only a diligent screening filters
        out unqualified of them—usually in a range of 75-85%. Screening such a
        vast list takes a lot of time and effort and is not the end of the
        tunnel. Only further down the process and with a high elimination rate
        during interviews, recruiters realize the pipeline needs even more
        filtered resumes to find the right candidate. Hence, the cycle
        continues. And, all these screening activities are only a part of
        recruiters' tasks apart from other day-to-day activities like
        scheduling, marketing job openings, or writing job descriptions.
        Adopting automated resume screening tools based on machine learning
        algorithms like iRekommend saves more than 60% on cost and reduces the
        possibility of bad hires. AI-enables platforms help source the best
        candidates from a pool of relevant skillsets and then screens the
        candidates using advanced analytics. Thus, it saves a lot of time for
        the recruiters to enhance their skills, participate in webinars and
        training, and improve the organization's standards.
      </Typography>

      <Typography variant="h5" className="my-4 text-center">
        Cultural Fitment{" "}
      </Typography>
      <Typography variant="body1" className="my-3 mx-5 text-justify">
        Just screening the candidates doesn't ensure that organization gets the
        right candidate fit for their culture. Many other aspects are critical
        to evaluation criteria and are only possible via data-based analytics
        driven by AI/ML technologies. Candidate engagements, interview results,
        and behavioral assessments all contribute to the holistic ranking of the
        candidates. An automated resume screening software performs such tasks
        with ease resulting in the hiring of the right talent.
      </Typography>

      <Typography variant="h5" className="my-4 text-center">
        Unconscious Bias{" "}
      </Typography>
      <Typography variant="body1" className="my-3 mx-5 text-justify">
        Selecting a candidate can sometimes be an emotionally biased decision
        rather than a logical process, hampering the recruiting process and the
        desired outcome. Biases can be in the form of gender, religion,
        community, location, or even education. On several occasions, the
        recruiter gets influenced by the candidates' subjective text on their
        resumes. Interestingly, these biases are not intentional, literally
        impossible to eliminate them. Machine scores big in this space.
        AI-driven resume screening is free from prejudices and acts only upon
        objective algorithms.
      </Typography>

      <Typography variant="h5" className="my-4 text-center">
        Diversity, Equity, and Inclusion{" "}
      </Typography>
      <Typography variant="body1" className="mt-3 mb-3 mx-5 text-justify">
        Organizations are increasingly looking for a diversified, equitable, and
        inclusive workforce. As a result, modern recruiting practices are
        embracing these strategies to deliver the right results for
        organizations. A machine-driven approach in the hiring process helps
        achieve these practices that might be too difficult for people-driven
        methods. It reduces the bias in the recruitment process and finds the
        right fit informed by data but driven by organizational priorities.
      </Typography>

      <Typography variant="body1" className="my-5 mx-5 text-justify">
        AI-enabled recruitment platforms facilitate the end-to-end hiring
        process right from talent sourcing to onboarding. Candidates become much
        more informed as the entire process is seamless, unbiased, fast, and
        transparent. With 360-degree feedback provisioning, it creates a
        positive brand image in candidates mind for the organization he is being
        hired. Most importantly, these platforms learn from previous
        interactions and better their suggestions for the next time. Be it a
        start-up or an enterprise; it is always best to automate the recruitment
        process—especially the resume screening activity. At iRekommend, we're
        building the future of recruitment powered by AI/ML to solve the most
        pressing recruitment problems of today's world.
      </Typography>
    </div>
  );

  return <div className="my-5 blog">{heading()}</div>;
};

export default Blog1;
