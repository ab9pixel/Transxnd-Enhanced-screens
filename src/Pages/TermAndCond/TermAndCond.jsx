import React, { useLayoutEffect, useContext, useState } from "react";
import "./Terms.css";
import { ColorContext } from "../../Context/Context";

const termsData = [
  {
    head: "LLorem ipsum dolo",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quaerat commodi quas asperiores exercitationem, maiores  cum aperiam eaque numquam repudiandae illo assumenda rem obcaecati impedit et earum inventore possimus beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Official quaerat commodi quas asperiores exercitationem, maiores cumaperiam eaque numquam repudiandae illo assumenda rem obcaecati impedit et earum inventore possimus beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quaerat commodi quas asperiores exercitationem, maiores cum aperiam eaque numquam repudiandae illo assumenda rem obcaecati impedit et earum inventore possimus beatae?",
    id: "01",
  },
  {
    head: "OWNERSHIT,COPYRIGHT AND TRADEMARK NOTICES",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quaerat commodi quas asperiores exercitationem, maiores  cum aperiam eaque numquam repudiandae illo assumenda rem obcaecati impedit et earum inventore possimus beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Official quaerat commodi quas asperiores exercitationem, maiores cumaperiam eaque numquam repudiandae illo assumenda rem obcaecati impedit et earum inventore possimus beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quaerat commodi quas asperiores",
    id: "02",
  },
  {
    head: "WARRANTY DISCLAIMER",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quaerat commodi quas asperiores exercitationem, maiores  cum aperiam eaque numquam repudiandae illo assumenda rem obcaecati impedit et earum inventore possimus beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Official quaerat commodi quas asperiores exercitationem, maiores cumaperiam eaque numquam repudiandae illo assumenda rem obcaecati impedit et earum inventore possimus beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quaerat commodi quas asperiores Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quaerat commodi quas asperiores exercitationem, maiores  cum aperiam eaque numquam repudiandae illo assumenda rem obcaecati impedit et earum inventore possimus beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Official quaerat commodi quas asperiores exercitationem, maiores cumaperiam eaque numquam repudiandae illo assumenda rem obcaecati impedit et earum inventore possimus beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quaerat commodi quas asperiores Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quaerat commodi quas asperiores exercitationem, maiores  cum aperiam eaque numquam repudiandae illo assumenda rem obcaecati impedit et earum inventore possimus beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Official quaerat commodi quas asperiores exercitationem, maiores cumaperiam eaque numquam repudiandae illo assumenda rem obcaecati impedit et earum inventore possimus beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quaerat commodi quas asperiores,",
    id: "03",
  },
];

const TermAndCond = () => {
  let [trans, setTrans] = useState([]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { color } = useContext(ColorContext);
  let { mode } = color;
  let style = {
    bggreen: "#27BDAD",
    bgblue: "#3C66C4",
    bglightblue: "#E9F8F7",
    bgred: "#CF4332",
    bgblack: "#0E2725",
    bgwhite: "#FFFFFF",
    bgdarkgreen: "#72FAEC",
    bglightgreen: "#0E2725",
  };

  const handleTransalte = (event) => {
    let filter = termsData.filter((val) => val.id === event);
    setTrans(filter);
    console.log(trans);
  };

  return (
    <div className="terms_and_cond_container">
      <div className="terms_and_cond_main_div">
        <div className="terms_boxex_div">
          <div className="tersm_head_div">
            <h3
              style={{
                color: mode === "light" ? style.bggreen : style.bgdarkgreen,
              }}
            >
              Legal & Compliance
            </h3>
          </div>

          <div
            className="terms_one_box_div"
            style={{
              color: mode === "light" ? style.bgblack : style.bgwhite,
            }}
          >
            {termsData.map((val) => (
              <div className={`term_main ${mode === "light" ? "shade_box_l" : "shade_box_d"}`} key={val.id} onClick={() => handleTransalte(val.id)}>
                <p className="term_note_para">{val.head}</p>
                <div className="terms_para_div">

                  <p> {val.para} </p>

                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="terms_two_div">
          <div
            className="terms_two_box_para_div"
            style={{
              backgroundColor:
                mode === "light" ? style.bglightblue : style.bglightgreen,
              color: mode === "light" ? style.bgblack : style.bgwhite,
            }}
          >
            <div className="terms_sub_head_div">
              <h5>
                <strong>In Plain English</strong>
              </h5>
            </div>
            { trans.map((val,i) => (
              <div key={i}>
                <p> {val.para} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermAndCond;
