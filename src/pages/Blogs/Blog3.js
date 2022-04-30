import Typography from "@mui/material/Typography";

const Blog3 = () => {
  const heading = () => (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <Typography variant="h3" className="text-center">
        Cognitive Hiring: The Future of Recruitment
      </Typography>
      <Typography variant="body1" className="my-3 mx-5 text-justify">
        The recruitment industry is highly competitive due to the lack of
        regulations and low cost of entry. Besides, the industry is quite
        fragmented as no specialized skill sets are required, and multiple
        players operate in various shapes and forms. Further, technological
        advancements have created disruption and forced companies to think
        differently to stay afloat. The ongoing COVID-19 pandemic has resulted
        in a decline in employment, and the rise of remote work has forced
        recruiters to embrace virtual hiring via digital platforms. The modern
        workplace has also seen new trends—from shifts in candidates'
        expectations to new age priorities of enterprises. According to a survey
        by Jobvite, enterprises' top-five recruiting priorities for 2021 are
        improving hire quality, increasing retention rate, time-to-hire, growing
        talent pipeline, and diversity hiring. From the age of referrals and job
        fairs, the industry has evolved into social media networks and online
        job portals. The tech-savvy new breed of headhunters is proactive,
        niche-focused, and highly strategic in prospecting the right talent for
        the job.
      </Typography>

      <Typography variant="h5" className="my-4 text-center">
        What's holding back the recruiters?
      </Typography>
      <Typography variant="body1" className="my-3 mx-5 text-justify">
        Critical productivity dampeners are substantial fluctuations in demand,
        lack of clear job descriptions, poorly written resumes, and virtual
        connections between the recruiters and hiring managers. Most recruiters
        rely on LinkedIn networks or local databases to hire candidates. As a
        result, they find it challenging to achieve the desired fill rate, thus
        impacting a staffing company's performance. Another critical challenge
        employer face today is high attrition and increasing the performance of
        existing staff. Talent lifecycle relies too heavily on soft aspects like
        culture, brand, future opportunities, and work-life balance. These areas
        are ripe for disruption with digital technologies. Without empirical
        data, organizations cannot perform skills gap analysis, workforce
        planning, assessment, engagement, and retention. This blog explores how
        a recruitment firm can transform into a digital recruitment agency to
        achieve higher fill rates, maximize employee value, and reduce churn.
      </Typography>

      <Typography variant="h5" className="my-4 text-center">
        Recruitment and Retention: A Vicious Cycle
      </Typography>
      <Typography variant="body1" className="my-3 mx-5 text-justify">
        According to the U.S. Bureau of Labor Statistics (BLS), more than 3
        million people quit their job in September 2020. Getting talented people
        and further ensuring their stay with the organization requires deep
        analysis and strategic decisions. As per a benchmarking report, a
        company experiences an average 18% turnover Y-O-Y in its workforce every
        year. While involuntary turnover helps develop overall recruitment
        strategies to fill open positions, it is imperative to look at voluntary
        turnover to improve retention. Employee turnover has cost implications
        too. The cost of replacing an individual employee can range from 1.5-2
        times the employee's salary. Hence, hiring top talents is as crucial as
        engaging and retaining them for your business. Numerous reports and
        surveys suggest that toxic culture and lack of personal time contribute
        to burnout—a key reason for turnover. Onboarding is the first
        introduction to an organization's culture for a recruit, and minor
        improvements can make a big difference. According to a survey,
        organizations with a robust onboarding process improve retention by 82%
        and productivity by more than 70%. A positive recruitment experience
        motivates 97% of candidates to refer to other candidates, and more than
        50% of candidates would even share their experience via social media.
        So, how do we improve the candidate experience to create a positive
        image of the organization's recruitment process and hence the overall
        culture? Does it need more FTEs to research, interview, onboard, and
        manage the employee lifecycle? The answer lies in a viable analytics
        platform that can manage employee lifecycle, optimize the hiring
        process, and provide valuable retention insight. A next-gen platform
        objectively evaluates a candidate persona with unique personality
        traits, compatibility, and learning style. It segments candidate types
        as per suitable hiring journeys. Furthermore, it builds a
        consumer-centric experience and assesses the efficiency of recruitment
        processes.
      </Typography>
      <img
        className="my-4"
        src="/images/blog_3.png"
        alt="card__image"
        width="60%"
      />

      <Typography variant="h5" className="my-4 text-center">
        Seamless and Intelligent Recruitment
      </Typography>
      <Typography variant="body1" className="my-3 mx-5 text-justify">
        Many organizations have massive inventories of resumes, and a
        considerable amount of time, cost, and effort is required to mine such a
        vast data lake. Hence, AI was introduced into the recruitment space to
        leverage automation by removing manual tasks and improving the candidate
        experience. A recent survey finds that the top benefits of AI in
        recruiting are uptime in workflow, cost reduction, decreased turnover,
        and increased revenue per employee. A robust platform helps reduce the
        time to extract relevant profiles and automates effort-intensive mundane
        activities. Integrated HR recruitment platforms allow companies to cut
        down hiring costs by up to 17%. These platforms help to find, attract,
        engage, nurture, and convert candidates. Thus, help streamline
        recruitment, making it more efficient and faster. As AI/ML becomes
        deep-rooted in the recruitment industry, we would see innovative
        pre-screening, new hire monitoring, and onboarding programs.
      </Typography>

      <Typography variant="h5" className="my-4 text-center">
        Data-Driven Recruitment
      </Typography>
      <Typography variant="body1" className="my-3 mx-5 text-justify">
        When it comes to hiring, most companies cannot capture the full
        potential from the current wealth of data. Data exist in silos, and
        companies fail to leverage technologies such as AI/ML for insightful
        decision-making. However, industry leaders are changing this equation as
        disruptive technology companies turn to AI, ML, and Natural Language
        Processing (NLP) for new product development. These powerful platforms
        empower HR to make hiring plans and decisions based on data sourced from
        ATS, recruitment marketing platforms, and social networks. Data
        analytics is used to categorize candidates into personas and finding the
        correct fitment for the jobs. The insights generated by such a digital
        platform helps to ensure a seamless onboarding experience. Harnessing
        the power of data plays a significant role in finding motivation and
        working styles, thus crafting optimal tools to encourage engagement,
        creating incentive programs, providing career advancement opportunities,
        and more. Digitization also helps seasoned workers to transition into
        new roles, enabling customized job rotation and synergies. Keeping
        employees connected and engaged during these types of transitions means
        improved turnover and productivity.
      </Typography>

      <Typography variant="body1" className="my-5 mx-5 text-justify">
        As companies strive for higher productivity with increased churn rates
        and much lower costs, AI/ML-powered recruitment platforms seem to be the
        future. With iRekommend, organizations are placed on the trajectory of
        fast-paced growth and accelerated outcomes in the digital era.
      </Typography>
    </div>
  );

  return <div className="my-5 blog">{heading()}</div>;
};

export default Blog3;
