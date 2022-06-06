import React from 'react'
import './styles.scss'
import Sidebar from '../Sidebar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MainContentHeader from './MainContentHeader'
import MainContentBody from './MainContentBody'
import {useSelector} from 'react-redux'

const MainContent = () => {
  const darkMode = useSelector(state=>state.themeActions.darkMode)
  return (
    <div className={`MainContent ${darkMode? 'dark-mode':''} `}>
        <div className="container">
            <div className="MainContentWrap">
                    <Row>
                        <Col lg={3}><Sidebar/></Col>
                        <Col lg={9}>
                            <MainContentHeader />
                            <MainContentBody/>
                        </Col>
                    </Row>
            </div>
        </div>
    </div>
  )
}

export default MainContent