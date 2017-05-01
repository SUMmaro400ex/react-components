import React from 'react'
import {Nav, NavItem, Col, Tab, Row} from 'react-bootstrap'
import styles from './styles'

export default class Component extends React.Component{
    render(){
        return (
           <div style={styles.container}>
                <Tab.Container id="left-tabs-example" defaultActiveKey='addStaff'>
                    <Row className="clearfix">
                    <Col sm={2} style={styles.navColumn}>
                        <h3>Staff Manager</h3>
                        <Nav bsStyle="pills" stacked>
                            <NavItem eventKey='addStaff' >
                                Add A Staff Member
                            </NavItem>
                            <NavItem eventKey='editStaff' >
                                Edit A Staff Member
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col sm={8} style={styles.contentColumn}>
                        <Tab.Content animation>
                        <Tab.Pane eventKey='addStaff'>
                            <h1>Add A Staff Member</h1>
                        </Tab.Pane>
                        <Tab.Pane eventKey='editStaff'>
                            <h1>Edit A Staff Member</h1>
                        </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    } 
}