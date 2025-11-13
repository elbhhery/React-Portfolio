import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import type { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import type { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ShootingStarsAndStarsBackgroundDemo } from "../shared/aboutBackground";
import { motion } from "motion/react";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      <ShootingStarsAndStarsBackgroundDemo />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute top-33 translate-x-[-50%] left-[50%] z-10 mt-12"
      >
        {/* Panel 1 */}
        <Accordion
          className="rounded-2xl mb-4"
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography component="span">
              What services do you offer as a Front-End Developer?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              I provide design and development of modern, responsive web
              interfaces using HTML, CSS, Tailwind CSS, JavaScript, TypeScript,
              and React.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Panel 2 */}
        <Accordion
          className="rounded-2xl mb-4"
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography component="span">
              Do you build websites from scratch or redesign existing ones?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              I can create brand-new websites or improve and modernize existing
              front-end designs.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Panel 3 */}
        <Accordion
          className="rounded-2xl mb-4"
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography component="span">
              Are the websites responsive?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, all websites I develop are fully responsive and optimized for
              mobile, tablet, and desktop screens.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Panel 4 */}
        <Accordion
          className="rounded-2xl mb-4"
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography component="span">
              How long does it take to develop a website?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The timeline depends on the project's size and complexity. A
              schedule can be provided after reviewing the details.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Panel 5 */}
        <Accordion
          className="rounded-2xl mb-4"
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography component="span">
              Do you offer post-launch support?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, limited support is provided after launch to ensure smooth
              operation and fix any technical issues.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Panel 6 */}
        <Accordion
          className="rounded-2xl mb-4"
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <Typography component="span">
              Can you add interactive elements or animations?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Absolutely! I can integrate interactive features and animations
              using JavaScript and libraries like Framer Motion to enhance user
              engagement.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </motion.div>
    </>
  );
}
