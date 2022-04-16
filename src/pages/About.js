import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import pinchhu from "../img/pinchhu.jpeg";

const About = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    // margin: theme.spacing(10),
    padding: theme.spacing(1),
    textAlign: "left",
    // color: theme.palette.text.secondary,
  }));

  const first = () => (
    <div style={{ margin: "100px 200px" }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="h4">What we do?</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1">
            We started iRekommend in 2021 to simplify the hiring process and
            create an engagement platform between hiring managers and
            candidates. <br /> Our “Augmented Intelligence” platform connects
            hiring managers with candidates directly while supporting candidates
            to position themselves effectively in interview process.
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="h4">Why us?</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1">
            We are a team of technology savvy professionals who have been
            struggling with hiring right teams far too long. <br /> We have
            noticed the challenges and decided to solve this problem once and
            for all by creating a “Decentralized” platform between hiring
            managers and candidates alike! The “Decentralized” platform
            endeavors to deliver value for all stakeholders - hiring managers,
            candidates, recruiters, enabled via technology.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );

  const fp = ['<pre>Person',
  'Position',
  'Else</pre>'
 ].join('\n');

  const advisors = () => (
    <div style={{ margin: "100px 200px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} textAlign={"center"}>
          <Typography variant="h4">Advisors</Typography>
        </Grid>

        <Grid container xs={12} direction="row" justifyContent="space-evenly" alignItems="center">
          <Grid item xs={4}>
            <div class="card-adv" val={fp}>
              <img
                src={pinchhu}
                alt={"logo"}
                style={{ zIndex: "1" }}
                className="position-absolute top-0 start-0"
              />
            </div>
          </Grid>

          <Grid item xs={4}>
            <div class="card-adv">
              <img
                src={pinchhu}
                alt={"logo"}
                style={{ zIndex: "1" }}
                className="position-absolute top-0 start-0"
              />
            </div>
          </Grid>

          <Grid item xs={4}>
            <div class="card-adv">
              <img
                src={pinchhu}
                alt={"logo"}
                style={{ zIndex: "1" }}
                className="position-absolute top-0 start-0"
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );

  return (
    <div className="about">
      {first()} {advisors()}
    </div>
  );
};

export default About;
