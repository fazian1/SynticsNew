import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation, Link, useParams } from "react-router-dom";
import { getClasses } from '../../Apis/apiForClasses';
import { getRegisterationStudentsById } from '../../Apis/apiForRegistrations';
import "../../../SubjectCard.scss"



function ListOfSubjectsForStudent() {
    let {id} = useParams()
    const [subjects, setSubjects] = useState()
    const location = useLocation();
    const history = useHistory()

    useEffect(() => {
      const fetchItems = async function() {
        const listOfSubjects = await getRegisterationStudentsById(id)
        setSubjects(listOfSubjects)
       
      }
      fetchItems()
    }, [])
    const handleOnClick = (e) => {
        if (subjects.classesGrade == "1"){
          history.push({
            pathname: `/student/Grade-1-content/${id}`,
            state: e.target.value
          })
        }
        else if (subjects.classesGrade == "2"){
          history.push({
            pathname: `/student/Grade-2-content/${id}`,
            state: e.target.value
          })
        }
        else if (subjects.classesGrade == "3"){
          history.push({
            pathname: `/student/Grade-3-content/${id}`,
            state: e.target.value
          })
        }
        else if (subjects.classesGrade == "4"){
          history.push({
            pathname: `/student/Grade-4-content/${id}`,
            state: e.target.value
          })
        }
        else if (subjects.classesGrade == "5"){
          history.push({
            pathname: `/student/Grade-5-content/${id}`,
            state: e.target.value
          })
        }
        else if (subjects.classesGrade == "6"){
          history.push({
            pathname: `/student/Grade-6-content/${id}`,
            state: e.target.value
          })
        }
        else if (subjects.classesGrade == "7"){
          history.push({
            pathname: `/student/Grade-7-content/${id}`,
            state: e.target.value
          })
        }
        else if (subjects.classesGrade == "8"){
          history.push({
            pathname: `/student/Grade-8-content/${id}`,
            state: e.target.value
          })
        }
        else if (subjects.classesGrade == "9"){
          history.push({
            pathname: `/student/Grade-9-content/${id}`,
            state: e.target.value
          })
        }
        else if (subjects.classesGrade == "10"){
          history.push({
            pathname: `/student/Grade-10-content/${id}`,
            state: e.target.value
          })
        }
        else if (subjects.classesGrade == "11"){
          history.push({
            pathname: `/student/Grade-11-content/${id}`,
            state: e.target.value
          })
        }
        else if (subjects.classesGrade == "12"){
          history.push({
            pathname: `/student/Grade-12-content/${id}`,
            state: e.target.value
          })
        }

    }
    return (
 
  <>
<div>
 {/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column mt-5 pt-4">
{/* Main Content */}
<div id="content">
{/* Begin Page Content */}
<div className="containerBlackDashboard-fluid">
{/* Page Heading */}
<h1 className="h3BlackDashboard mb-2 text-gray-800">List of Subjects</h1>

{/* DataTales Example */}
<div className="card shadow mb-4">
<div className="card-header py-3" style = {{color : "white", backgroundColor : "#a98799"}}>
<h6 className="m-0 font-weight-bold text-white">Select A Subject</h6>
</div>
<div className="card-body">
<Row className="mt-3">
    <Col md="3">
    <div className="containerCard mt-3 mb-3">
                            <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold", height : "100px", width : "100px" }} value = "English" onClick = {(e) => handleOnClick(e)} >
                              English
                            </button>
                          </div>
      </Col>
      <Col md="3">
    <div className="containerCard mt-3 mb-3">
                            <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold", height : "100px", width : "100px" }} value = "Urdu" onClick = {(e) => handleOnClick(e)} >
                              Urdu
                            </button>
                          </div>
      </Col>
      <Col md="3">
    <div className="containerCard mt-3 mb-3">
                            <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold", height : "100px", width : "100px" }} value = "Math" onClick = {(e) => handleOnClick(e)} >
                              Math
                            </button>
                          </div>
      </Col>
      <Col md="3">
    <div className="containerCard mt-3 mb-3">
                            <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold", height : "100px", width : "100px" }} value = "Science" onClick = {(e) => handleOnClick(e)} >
                              Science
                            </button>
                          </div>
      </Col>
      </Row>
      <Row className="mt-3">
    <Col md="3">
    <div className="containerCard mt-3 mb-3">
                            <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold", height : "100px", width : "100px" }} value = "Computer Science" onClick = {(e) => handleOnClick(e)} >
                             Computer <br /> Science 
                            </button>
                          </div>
      </Col>
      <Col md="3">
    <div className="containerCard mt-3 mb-3">
                            <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold", height : "100px", width : "100px" }} value = "Islamiyat" onClick = {(e) => handleOnClick(e)} >
                              Islamiyat
                            </button>
                          </div>
      </Col>
      <Col md="3">
    <div className="containerCard mt-3 mb-3">
                            <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold", height : "100px", width : "100px" }} value = "Social Studies" onClick = {(e) => handleOnClick(e)} >
                              Social <br /> Studies
                            </button>
                          </div>
      </Col>
      <Col md="3">
    <div className="containerCard mt-3 mb-3">
                            <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold", height : "100px", width : "100px" }} value = "Art" onClick = {(e) => handleOnClick(e)} >
                              Art
                            </button>
                          </div>
      </Col>
      </Row>
      
</div>
</div>
</div>

{/* /.containerBlackDashboard-fluid */}
</div>
{/* End of Main Content */}
{/* Footer */}
<footer className="sticky-footer bg-white">
<div className="containerBlackDashboard my-auto">
<div className="copyright text-center my-auto">
<span></span>
</div>
</div>
</footer>
{/* End of Footer */}
</div>
{/* End of Content Wrapper */}
{/* End of Page Wrapper */}
</div>
</>

    )
}

export default ListOfSubjectsForStudent
