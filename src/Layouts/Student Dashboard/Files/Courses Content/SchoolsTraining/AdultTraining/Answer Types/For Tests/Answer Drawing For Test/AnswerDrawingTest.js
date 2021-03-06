import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { createAnswersTest } from '../../../../../../Apis/apiForAnswersTest';
import { getRegisterationStudentsById } from '../../../../../../Apis/apiForRegistrations';
import { getFileSpecific } from '../../../../../../Apis/apiForGridFs';
import ContainerForStudent from './container/Container';
import DrawingPage from './DrawingPage';

function AnswerDrawingTest() {
  let {id} = useParams()
  const location = useLocation();
  const editorRef = useRef(null);
  const history = useHistory()
  const [referenceName, setReferenceName] = useState()
  const [studentDataValues, setStudentDataValues] = useState([])
  const [file, setFile] = useState()
  console.log(location.state)
    useEffect(() => {
      
        const fetchStudentData = async function() {
          const studentData = await getRegisterationStudentsById(id)
          console.log(studentData)
          setStudentDataValues(studentData)
        }
        fetchStudentData()
        const fetchFile = async function() {
          const fileContent = await getFileSpecific(location.state.referenceName)
          console.log(fileContent)
          setFile(fileContent[0].filename)
          console.log(file)
        }
        fetchFile() 
        
    }, [])
           /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  const log = (data) => {
      if (editorRef.current) {
        data.answerContent = editorRef.current.getContent();
        data.studentId = data.studentId.id
        data.teacherId = location.state.teacherId
        data.coursetype = location.state.coursetype
        data.name = studentDataValues.name
        data.email = studentDataValues.email
        if(location.state.refereceNameForDraw !== null){
          data.referenceName = location.state.refereceNameForDraw
        }
        else {
          data.referenceName = referenceName
        }
        console.log(data)
        createAnswersTest(data)
        if (data.grade == "Grade 1"){
          history.push({
            pathname: `/student/Grade-1-content-test/${id}`,
            state: data.coursetype
          })
        }
        else if (data.grade == "Grade 2"){
          history.push({
            pathname: `/student/Grade-2-content-test/${id}`,
            state: data.coursetype
          })
        }
        else if (data.grade == "Grade 3"){
          history.push({
            pathname: `/student/Grade-3-content-test/${id}`,
            state: data.coursetype
          })
        }
        else if (data.grade == "Grade 4"){
          history.push({
            pathname: `/student/Grade-4-content-test/${id}`,
            state: data.coursetype
          })
        }
        else if (data.grade == "Grade 5"){
          history.push({
            pathname: `/student/Grade-5-content-test/${id}`,
            state: data.coursetype
          })
        }
        else if (data.grade == "Grade 6"){
          history.push({
            pathname: `/student/Grade-6-content-test/${id}`,
            state: data.coursetype
          })
        }
        else if (data.grade == "Grade 7"){
          history.push({
            pathname: `/student/Grade-7-content-test/${id}`,
            state: data.coursetype
          })
        }
        else if (data.grade == "Grade 8"){
          history.push({
            pathname: `/student/Grade-8-content-test/${id}`,
            state: data.coursetype
          })
        }
        else if (data.grade == "Grade 9"){
          history.push({
            pathname: `/student/Grade-9-content-test/${id}`,
            state: data.coursetype
          })
        }
        else if (data.grade == "Grade 10"){
          history.push({
            pathname: `/student/Grade-10-content-test/${id}`,
            state: data.coursetype
          })
        }
        else if (data.grade == "Grade 11"){
          history.push({
            pathname: `/student/Grade-11-content-test/${id}`,
            state: data.coursetype
          })
        }
        else if (data.grade == "Grade 12"){
          history.push({
            pathname: `/student/Grade-12-content-test/${id}`,
            state: data.coursetype
          })
        }
      }
  };

  /*useEffect(() => {
    const fetchTodo = async () => {
      const blogstitle = await getPlacementTestblogstitle(`${props.match.params._id}`)
      setblogstitle(blogstitle)
    }
    fetchTodo()
  }, []);
  */
  const onSubmit = async (data) => {
      
    data.studentId = data.studentId.id
    data.teacherId = location.state.teacherId
    data.coursetype = location.state.coursetype
    data.name = studentDataValues.name
    data.email = studentDataValues.email
    if(location.state.refereceNameForDraw !== null){
      data.referenceName = location.state.refereceNameForDraw
    }
    else {
      data.referenceName = referenceName
    }
    
    console.log(data)
    createAnswersTest(data)
    if (data.grade == "Grade 1"){
      history.push({
        pathname: `/student/Grade-1-content-test/${id}`,
        state: data.coursetype
      })
    }
    else if (data.grade == "Grade 2"){
      history.push({
        pathname: `/student/Grade-2-content-test/${id}`,
        state: data.coursetype
      })
    }
    else if (data.grade == "Grade 3"){
      history.push({
        pathname: `/student/Grade-3-content-test/${id}`,
        state: data.coursetype
      })
    }
    else if (data.grade == "Grade 4"){
      history.push({
        pathname: `/student/Grade-4-content-test/${id}`,
        state: data.coursetype
      })
    }
    else if (data.grade == "Grade 5"){
      history.push({
        pathname: `/student/Grade-5-content-test/${id}`,
        state: data.coursetype
      })
    }
    else if (data.grade == "Grade 6"){
      history.push({
        pathname: `/student/Grade-6-content-test/${id}`,
        state: data.coursetype
      })
    }
    else if (data.grade == "Grade 7"){
      history.push({
        pathname: `/student/Grade-7-content-test/${id}`,
        state: data.coursetype
      })
    }
    else if (data.grade == "Grade 8"){
      history.push({
        pathname: `/student/Grade-8-content-test/${id}`,
        state: data.coursetype
      })
    }
    else if (data.grade == "Grade 9"){
      history.push({
        pathname: `/student/Grade-9-content-test/${id}`,
        state: data.coursetype
      })
    }
    else if (data.grade == "Grade 10"){
      history.push({
        pathname: `/student/Grade-10-content-test/${id}`,
        state: data.coursetype
      })
    }
    else if (data.grade == "Grade 11"){
      history.push({
        pathname: `/student/Grade-11-content-test/${id}`,
        state: data.coursetype
      })
    }
    else if (data.grade == "Grade 12"){
      history.push({
        pathname: `/student/Grade-12-content-test/${id}`,
        state: data.coursetype
      })
    }
      
  }


    //1 Start of by making initial values 
    const formik = useFormik({
        initialValues: {
           name:'',
           email:'',
           grade: location.state.grade,
           coursetype:'',
           answertype: location.state.answertype,
           questionContent: location.state.questioncontent,
           questionTitle: location.state.questiontitle,
           totalMarks: location.state.totalmarks,
           answerContent:'',
           marksObtained: '',
           teacherRemarks: '',
           questionReferenceName: location.state.referenceName,
           teacherId: '',
           studentId: {id},
           referenceName: '',
           questionId: location.state._id
          
        },

        //4 Make onSubmit propert to handle what happens to data on form submisison

        onSubmit: values => {

          
          //createTodo(formik.values)
          //redirecting 
          //history.push("/")

          onSubmit(formik.values)

        },

        //5 Make validation property
        
       


    })
    const drawPage = (e) => {
      e.preventDefault()
      const randomValue = Math.floor((Math.random() * 100000) + 1)
      const randomName = id + randomValue + ".png"
      setReferenceName(randomName)
      location.state.refereceNameForDraw = randomName
      history.push({
        pathname: `/student/draw-page-test/${id}`,
        state: location.state
      
      })
    }
    console.log("Form errors", formik.errors)
    
    return (
        <>
<div>
<div className = "mt-5 pt-4">
{/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column">
{/* Main Content */}
<div id="content">
  {/* Begin Page Content */}
  <div className="containerBlackDashboard-fluid">
    {/* Page Heading */}
    <h1 className="h3BlackDashboard mb-2 text-gray-800">Test Content</h1>
    {/* DataTales Example */}
    <div className="card shadow mb-4 text-center">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#a98799"}}>
        <h6 className="m-0 font-weight-bold text-white">{location.state.questiontitle}</h6>
      </div>
      <div className="card-body">
      {location.state.questioncontent}
      <div>
      <div className="card-header py-3 mt-4" style = {{color : "white", backgroundColor : "#a98799"}}>
        <h6 className="m-0 font-weight-bold text-white">Attachment</h6>
      </div>
      <div className = "mt-4">
      <img className = "text-dark" style={{textDecoration : "none", fontWeight: "bold", height:"300px", width:"400px", boxShadow: "5px 5px #888888"}} src={`http://localhost:7000/api/file/display/${file}`}>
      </img>
      </div>
      </div>
      </div>
    </div>
    <div className="card shadow mb-4 text-center">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#a98799"}}>
        <h6 className="m-0 font-weight-bold text-white">Answer</h6>
        
      </div>
      <div className="card-body">
      <form onSubmit={formik.handleSubmit}>
                  <div className = "mt-4"> 
                      <div class="p-3 mb-2" style = {{color : "white", backgroundColor : "#a98799"}}>
                          <label><h6 className = "text-white">Your Answer </h6></label>
                      </div>
                      <div className="containerSass mt-3 mb-2">
                        <button className="btnSass play-pause buttonSass" onClick={(e) => drawPage(e)}>
                        Start Drawing
                        </button>
                    </div>
                      <hr />
                  </div>
                    <div className="containerSass mt-3 mb-2">
                        <button type="submit" className="btnSass play-pause buttonSass">
                        Submit Answer
                        </button>
                    </div>
                  </form>
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
      </div>
      </>
    )
}

export default AnswerDrawingTest
