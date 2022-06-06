import React from "react";
import Button from "../MainContent/Button";
import "./styles.scss";

const plus = "../images/plus.svg";
const search = "../images/search.svg";
const sort = "../images/sort.svg";
const undraw = "../images/undraw.svg";
const AddBeneficiary = ({ data, setAddBen }) => {
  return (
    <div className="add-beneficiary">
      <div className="add-beneficiary-wrap">
        <div className="beneficiary-header">
          <div className="beneficiary-head-text">
            <h3>Beneficiary</h3>
            <p>Select the beneficiary that you want to send money to</p>
          </div>
          <Button onClick= {()=>{setAddBen(true)}} icon={plus} text="Add Beneficiary" />
        </div>
        <div className="input-sort">
          <div className="input-field">
            <input
              type="text"
              name="nameSort"
              placeholder="Name/Acc/Number/Country"
            />
            <img src={search} alt="Search Err" />
          </div>
          <Button icon={sort} text="Sort" dropdown={true} lessPadding={true}/>
        </div>

        <div className="beneficiary-content">
          {data ? (
            <table>
              {data.map((user) => {
                return (
                  <tr>
                    <td className="name-location-table-wrap">
                      <img src="../images/checkbox.png" />
                      <div className="name-location-wrap">
                        <div className="short-name">
                          {/* Get first alphabet of each word  */}
                          <h1>{user.name.match(/\b(\w)/g).join("")}</h1>
                        </div>
                        <div className="name-location">
                          <div className="full-name">
                            <h2>{user.name}</h2>
                          </div>
                          <div className="location">
                            <div className="flag">
                              <img src={"../images/pkr.png"} />
                            </div>
                            <h3 className="country-name">{user.country}</h3>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{user.email}</td>
                    <td>        
                      <div className="bank-card-wrap">
                        <h4 className="card-number"> XXXX_XXXX_XXXX_XXXX </h4>
                        <div className="card-wrap">
                            <h5 className="card-name">
                                {user.card}
                            </h5>
                            <div className= "card-img-wrap">
                                <img src = '../images/card.png' />
                            </div>
                        </div>
                    </div>
                    </td>
                  </tr>
                );
              })}
            </table>
          ) : (
            <>
              <img className="undrawImage" src={undraw} alt="undrawErr" />
              <p>
                You don't have any beneficiary added. Add a beneficiary to make a
                transfer.
              </p>
              <Button onClick= {()=>{setAddBen(true)}} icon={plus} text="Add Beneficiary" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddBeneficiary;
