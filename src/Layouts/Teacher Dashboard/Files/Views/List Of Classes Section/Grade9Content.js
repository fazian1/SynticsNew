import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";
import axios from 'axios';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getCoursePlanningsForGrade9 } from '../../Apis/apiForCoursePlanning'

function Grade9ContentForTeacher() {
  let {id} = useParams()
  var serialNumber = 0
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async function() {
      const contents = await getCoursePlanningsForGrade9(id)
      setItems(contents)
    }
    fetchItems()
  }, []);

  const history = useHistory()
  const handleOnClickEdit = (data) => {
    if ((data.questiontype === "Text") && (data.answertype === "English Text")){
      history.push({
        pathname:`/teacher/adult-course-content-text-qa-edit/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Multiple Choice")){
      history.push({
        pathname:`/teacher/adult-course-content-text-mcq-edit/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Video")){
      history.push({
        pathname:`/teacher/adult-course-content-text-video-edit/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Audio")){
      history.push({
        pathname:`/teacher/adult-course-content-text-audio-edit/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Fill in the Blanks")){
      history.push({
        pathname:`/teacher/adult-course-content-text-blanks-edit/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Handwriting")){
      history.push({
        pathname:`/teacher/adult-course-content-text-handwriting-edit/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Digital Urdu")){
      history.push({
        pathname:`/teacher/adult-course-content-text-digitalUrdu-edit/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Drawing")){
      history.push({
        pathname:`/teacher/adult-course-content-text-drawing-edit/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "File Upload")){
      history.push({
        pathname:`/teacher/adult-course-content-file-upload-edit/${id}`,
        state: data
      })
    }
  }
  const handleOnClickDelete = (data) => {
    axios.delete('http://localhost:7000/coursePlannings/delete/' + data._id)
          .then((res) => {
              console.log('Student successfully deleted!')
              window.location.reload(false)
          }).catch((error) => {
              console.log(error)
          })
    
  }
  const handleOnClickView = (data) => {
    if(data.answertype == "Audio"){
      history.push({
        pathname : `/teacher/view-current-content-audio/${id}`,
        state: data
      })
    }
    else if(data.answertype == "Video"){
      history.push({
        pathname : `/teacher/view-current-content-video/${id}`,
        state: data
      })
    }
    else if(data.answertype == "Drawing"){
      history.push({
        pathname : `/teacher/view-current-content-drawing/${id}`,
        state: data
      })
    }
    else{
      history.push({
        pathname : `/teacher/view-current-content/${id}`,
        state: data
      })
    }
  }
  const handleOnClickAnswers = (data) => {
    history.push({
      pathname : `/teacher/view-answers/${id}`,
      state : data
    })
  }
  const handlingSerialNumber = () => {
    serialNumber = serialNumber + 1
    return(
        <td>{serialNumber}</td>
    )
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
<h1 className="h3BlackDashboard mb-2 text-gray-800">Subject's Content</h1>

{/* DataTales Example */}
<div className="card shadow mb-4">
  <div className="card-header py-3" style = {{color : "white", backgroundColor : "#a98799"}}>
    <h6 className="m-0 font-weight-bold text-white">List of Subject related Questions</h6>
  </div>
  <div className="card-body">
    <div className="table-responsive">
    <table className="tableBlackDashboard table-bordered text-center"  width="100%" cellSpacing={0}>
      <thead>
                            <tr>
                            <th>Serial Number</th>
                            <th>Grade</th>
                            <th>Subject Name</th>
                            <th>Question Type</th>
                            <th>Answer Type</th>
                            <th>Marks of Question</th>
                            <th colSpan="4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                          items != null ? items.map(contents => (
                                <tr key={contents._id}>
                                  {handlingSerialNumber()}
                                  <td>
                                  {contents.grade}
                                </td>
                                <td>
                                    {contents.coursetype}
                                </td>
                                <td>
                                    {contents.questiontype}
                                </td>
                                <td>
                                    {contents.answertype}
                                </td>
                                <td>
                                    {contents.totalmarks}
                                </td>
                                <td>
                                  <div className="buttonNewTheme mt-3 mb-3 text-center">
                                    <button className="btnSass play-pause buttonSass" style = {{fontWeight : 'bold', height:"108px", width: "108px"}}  onClick={() => handleOnClickView(contents)}>View</button>
                                  </div>
                                </td>
                                <td>
                                  <div className="buttonNewTheme mt-3 mb-3 text-center">
                                    <button className="btnSass play-pause buttonSass" style = {{fontWeight : 'bold', height:"108px", width: "108px"}}  onClick={() => handleOnClickEdit(contents)}>Edit</button>
                                  </div>
                                </td>
                                <td>
                                  <div className="buttonNewTheme mt-3 mb-3 text-center">
                                    <button className="btnSass play-pause buttonSass" style = {{fontWeight : 'bold', height:"108px", width: "108px"}}  onClick={() => handleOnClickDelete(contents)}>Delete</button>
                                  </div>
                                </td>
                                <td>
                                  <div className="buttonNewTheme mt-3 mb-3 text-center">
                                    <button className="btnSass play-pause buttonSass" style = {{fontWeight : 'bold', height:"108px", width: "108px"}} onClick={() => handleOnClickAnswers(contents)}>Answers</button>
                                  </div>
                                </td>
                                </tr>
                            )) : 
                            <tr>
                                <td></td>
                            </tr>
                          }
                        </tbody>
      </table>
     
    </div>
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

export default Grade9ContentForTeacher