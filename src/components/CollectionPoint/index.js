import React from 'react'
import InnerContentHeader from '../InnerContentHeader'
import './styles.scss'
import data from "./data.json";
const search = "../images/search.svg";
const downArrow = "../images/filter.svg";

const CollectionPoint = () => {
  return (
    <div className='collection-point'>
        <div className='collection-point-header'>
            <InnerContentHeader text="Collection Point"/>
            <p>Enter Cash Collection information if you wish to make 
              Cash Collection remittances to this beneficiary.</p>
            <div className='search-filter'>
              <div className="input-field">
              <input
                type="text"
                name="nameSort"
                placeholder="Name/Acc/Number/Country"
              />
              <img src={search} alt="Search Err" />
              </div>
              <div className='advancedFilters'>
                <img src={search} alt="down arrow err"/>            
                <span>Advanced Filters</span>
              </div>
            </div>
            <div className="beneficiary-content">
          {data ? (
            <table>
              {data?.map((user) => {
                return (
                  <tr>
                    <td className="name-location-table-wrap">
                      <img src="../images/checkbox.png" />
                      <div className="name-location-wrap collection-name-wrap">
                        <div className="name-location collection-name">
                          <div className="collection-full-name">
                            <h2>{user.name}</h2>
                          </div>
                          <div className="collection-address">
                            <h3 className="country-name">{user.address}</h3>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td>        
                      <div className="collection-id-wrap">
                        <h4 className="card-number collection-id"> {user.id} </h4>
                    </div>
                    </td>
                  </tr>
                );
              })}
            </table>
          ) : null}
        </div>
        </div>
    </div>
  )
}

export default CollectionPoint