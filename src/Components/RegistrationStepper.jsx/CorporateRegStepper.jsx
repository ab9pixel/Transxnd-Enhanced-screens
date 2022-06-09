import React, { useContext } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Typography from "@material-ui/core/Typography";
import { ColorContext } from "../../Context/Context";
import { useHistory } from "react-router";
import CooperateRegistration from "../../Pages/Register/CorporateRegistration";
import CorporateUpload from "../../Pages/Register/CorporateUpload";
import "./CorporateRegStepper.css";
import { Link } from "react-router-dom";
const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      // borderColor: ({ color }) => color.mode,
      borderColor: "#72FAEC",
      //    color: console.log(Color)
    },
  },
  completed: {
    "& $line": {
      // borderColor: ({ color }) => color.mode === 'light' ? '#44968d' : '#72faec',
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
        fontWeight: "600",
      },
    },
  };
})(StepLabel);

function getSteps() {
  return ["COMPANY DETAILS", "KYC"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <CooperateRegistration />;
    case 1:
      return <CorporateUpload />;
    default:
      return "Unknown step";
  }
}

export default function CorporateRegisterStepper() {
  const history = useHistory();
  const { color } = useContext(ColorContext);
  let { mode } = color;
  const style = {
    bggreen: "#27BDAD",
    bgblue: "#3C66C4",
    bgred: "#CF4332",
    bgblack: "#0E2725",
    bgwhite: "#FFFFFF",
    bgdarkgreen: "#72FAEC",
  };

  const classes = useStyles({ color });
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 1) {
      history.push("/login");
    }
  };

  return (
    <div className="cr_stepper">
      <div className="s_text">
        <h2
          className="mt-4 fw-bold"
          style={{
            color: mode === "light" ? style.bgblack : style.bgwhite,
          }}
        >
          Corporate{" "}
          <strong
            style={{
              color: mode === "light" ? style.bggreen : style.bgdarkgreen,
            }}
          >
            Registration!
          </strong>
        </h2>
      </div>
      <div className={classes.root}>
        <Stepper
          className="reg_stepper"
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
          <div className="reg_steppeer_btn">
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <button
              onClick={handleNext}
              // className={
              //   color.mode === "dark"
              //     ? "stepper_CBtn_nxt"
              //     : "l_stepper_CBtn_nxt"
              // }
              style={{
                border: "1px solid",
                backgroundColor:
                  mode === "light" ? style.bggreen : style.bgdarkgreen,
                color: mode === "light" ? style.bgwhite : style.bgblack,
              }}
              className={`cus_stepper_btn
                  ${mode === "light" ? "s_btn_light" : "s_btn_dark"}`}
            >
              {activeStep === steps.length - 1 ? "Submit Request" : "Next"}
            </button>
            <span
              className="s_label mt-2"
              style={{
                color: mode === "light" ? style.bgblack : style.bgwhite,
              }}
            >
              Sign Up as an{" "}
              <Link
                style={{
                  color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                }}
                to="/register"
              >
                &nbsp;Indivisual user!
              </Link>
            </span>
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}
