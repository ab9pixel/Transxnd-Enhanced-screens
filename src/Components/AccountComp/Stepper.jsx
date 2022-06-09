import React, { useContext } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ColorContext } from "../../Context/Context";
import PersonalDetail from "./PersonalDetail";
import UploadLicns from "./UploadLicns";
import UserGetDetail from "./UserGetDetail";
import SelectCard from "./SelectCard";
import SelectPayment from "./SelectPayment";
import { useHistory } from "react-router";

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
    //   borderColor: ({ color }) => color.mode,
      borderColor: "#72FAEC",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#72faec",
    },
  },
  line: {
    borderColor: "#44968d",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    // color:'white',
    color: ({ color }) => (color.mode === "dark" ? "white" : "black"),
    fontSize: ".7rem",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  completed: {
    color: "#1EE834",
  },
  size: {
    fontSize: ".6rem",
  },
}));

const CustomStepper = withStyles((theme) => {
  console.log(theme);
  return {
    root: {
      "& .text": {
        color: (props) => props.color,
      },
    },
  };
})(StepLabel);

function getSteps() {
  return [
    "PERSONAL DETAILS",
    "SEE DETAILS",
    "DELIVERY DETAILS",
    "KVC",
    "PAYMENT",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalDetail height="uploc_height" />;
    case 1:
      return <UserGetDetail />;
    case 2:
      return <SelectCard />;
    case 3:
      return <UploadLicns className="upload_lic_card" height="uploc_height" />;
    case 4:
      return <SelectPayment />;
    default:
      return "Unknown step";
  }
}

export default function CStepper() {
  const history = useHistory();
  const { color } = useContext(ColorContext);
  const classes = useStyles({ color });
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 4) {
      history.push("/request-done");
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //     setActiveStep(0);
  // };

  return (
    <div
      className={
        color.mode === "dark"
          ? "stepper_conatainer"
          : "light_stepper_conatainer stepper_conatainer"
      }
    >
      <h5 style={{ color: color.mode === "dark" ? "#72FAEC" : "black" }}>
        REQUEST A NEW CARD
      </h5>
      <p style={{ color: color.mode === "light" ? "" : "white" }}>
        Please ensure that your profile data is correct and up-to-date before
        sending in a Card request. Use the button below to update your profile.
      </p>
      <div className={classes.root}>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<QontoConnector color={color} />}
        >
          {steps.map((label, i) => (
            <Step
              key={label}
              className={color.mode === "dark" ? "colors" : "color_light_step"}
            >
              <CustomStepper
                color={
                  activeStep >= i
                    ? "inherit"
                    : `${color.mode === "dark" ? "#fff" : "black"}`
                }
                className={classes.size}
              >
                <span className="text">{label}</span>
              </CustomStepper>
            </Step>
          ))}
        </Stepper>
        <div>
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={
                  color.mode === "dark"
                    ? "stepper_CBtn_back"
                    : "l_stepper_CBtn_back"
                }
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={
                  color.mode === "dark"
                    ? "stepper_CBtn_nxt"
                    : "l_stepper_CBtn_nxt"
                }
              >
                {activeStep === steps.length - 1 ? "Confirm & Pay" : "Continue"}
              </Button>
            </div>
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}
