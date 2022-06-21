import React,{useState,useEffect}from 'react'
import {BrowserRouter , Switch,withRouter} from 'react-router-dom'
import axios from 'axios'


import {ApiPath}  from './config'
import AllRoutes from './Router'
// import Header from './component/header'
function App() {
  const [data,setData]=useState([])
  const [value,setValue]=useState({
    valued:[]
  })
  const [progress, updateProgress] = useState(1);
  const where = encodeURIComponent(JSON.stringify({
   "Make": {
       "$exists": true
   },
   "Model": {
       "$exists": true
   },
   "Category": {
       "$exists": true
   },
   "Year": {
       "$exists": true
   }
 }));
 
 useEffect(() => {
   axios.get(ApiPath + `&where=${where}`,
   {
     headers: {
       'X-Parse-Application-Id': '4qg4mVeO35qOjSgwfLHX0ogWmhbUQYsfbyTiBQua', // This is your app's application id
       'X-Parse-REST-API-Key': 'BNlopsxBRyyZZLKi9j5UqMvxRrgT38xPWZcsfMi8', // This is your app's REST API key
   }
   })
   .then(res =>{
      setData(res&&res.data&&res.data.results?res.data.results:[])
   })
 }, [])

  return (
    <>
     <BrowserRouter>
   <Switch>
     <AllRoutes path={'/'}  component={AllRoutes} progress={progress} updateProgress={updateProgress}data={data} value={value}setValue={setValue}/>
     </Switch>
     </BrowserRouter>
    </>
  );
}
export default App;
