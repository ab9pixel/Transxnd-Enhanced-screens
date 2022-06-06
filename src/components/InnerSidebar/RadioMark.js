import React from 'react'

export default function RadioMark({active}) {
  return (
    <>{active?
        <svg className="active" xmlns="http://www.w3.org/2000/svg" width="18.348" height="12.816" viewBox="0 0 18.348 12.816">
              <path id="Path_7609" data-name="Path 7609" d="M-23537,20517.217l5.117,5.117,10.4-10.4" transform="translate(23538.416 -20510.518)" fill="none" stroke="#00ff08" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </svg>
        :
        <svg className="in-progress" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
        <g id="Group_4616" data-name="Group 4616" transform="translate(4.089 4.447)">
            <circle id="Ellipse_1034" data-name="Ellipse 1034" cx="20" cy="20" r="20" transform="translate(-4.089 -4.447)" fill="#27bdad" opacity="0.05"/>
            <ellipse id="Ellipse_1033" data-name="Ellipse 1033" cx="15" cy="15.5" rx="15" ry="15.5" transform="translate(0.911 0.553)" fill="#27bdad" opacity="0.2"/>
            <circle id="Ellipse_1032" data-name="Ellipse 1032" cx="9" cy="9" r="9" transform="translate(6.911 6.553)" fill="#27bdad"/>
        </g>
        </svg>
        }
  </>
  )
}

