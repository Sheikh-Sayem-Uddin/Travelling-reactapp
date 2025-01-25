import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Header from '../Components/header';
import VideoSection from '../Components/VideoSection';
import QuizSection from '../Components/QuizSection';
import Footer from '../Components/FooterSection';
import Qrsection from '../Components/qrsection';


function Landingpage(){
  
return(
    <div>
  <Header/>
  <VideoSection/>
  <QuizSection/>
  <Qrsection/>

  <Footer/>

    </div>
)
}
export default Landingpage;