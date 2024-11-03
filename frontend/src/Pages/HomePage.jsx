import { useEffect, useState } from "react";
import axios from "axios";

const HomePage  = ()=>{
    
    const [alldata,setalldata] = useState([])
    const [statusCount,setstatusCount] = useState({Total : 0 , Placed : 0,Unplaced : 0});

 useEffect(()=>{
    axios.get('http://localhost:8080/form/')
    .then((res)=>{
        setalldata([...res.data.all_formData]);
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    });
},[])

useEffect(()=>{
    const statusfn = () => {
        let placed = 0;
        let unplaced = 0;
        alldata.forEach((val) => {
            if (val.Status === "Placed") {
                placed++;
            }
             else if (val.Status === "Unplaced") {
                unplaced++;
            }
           
        });
        setstatusCount({ Total: alldata.length, Placed: placed, Unplaced: unplaced });
    };
    statusfn();
}, [alldata]);



    return(
        <>
            <div className="HomePage">
                <div className="Hero">
                    <div className="HeroText">
                        <p className="HeroTextHead"><b>Learn from the best, be your best..</b></p>
                        <br/>
                        <p className="HeroTextSub">Give yourself an upgrade with our inspiring online courses and join a global community of learners</p>
                        <br/>
                        <button>Get Started</button>
                    </div>
                </div>
                <div className="PlacementDiv">
                    <p className="HeroTextHead"><b>Our Placement Partners</b></p>
                    <div className="CompLogo">
                        <img src={require("../assets/img/airbnb.png")} alt="airbnb"/>
                        <img src={require("../assets/logo/client-8.png")} alt="client"/>
                        <img src={require("../assets/logo/Lifegroups.png")} alt="Lifegroup"/>
                        <img src={require("../assets/logo/myob.png")} alt="myob"/>
                        <img src={require("../assets/img/tailus.png")} alt="tailus"/>
                        <img src={require("../assets/img/microsoft.png")} alt="microsoft" />
                        <img src={require("../assets/img/coty.png")} alt="coty"/>
                        <img src={require("../assets/img/lilly.png")} alt="lilly"/>
                    </div>
                    <button>and, more companies</button>
                </div>
                <div className="About1">
                    <p><b>OPEN SOURCE THEME AND UI COMPONENTS</b></p>
                    <h2>Geaux Astro helps you craft beautiful websites efficiently</h2>
                    <div>
                        <ul>
                            <li>
                                <img src={require("../assets/logo/medal.png")} alt="medal"/>
                                <div><h3>Certificate Distribution</h3>
                                <p>We offer certificates to validate and recognize your achievement.</p></div>
                            </li>
                            <li>
                                <img src={require("../assets/logo/thought.png")} alt="Thought"/>
                                <div><h3>Knowledge</h3>
                                <p>We deliver transformative knowledge that empowers and inspires.</p>
                                </div>
                            </li>
                            <li>
                                <img src={require("../assets/logo/training.png")} alt="Training"/><div><h3>Hands-on Experience</h3>
                                <p>We provide hands-on experience for real-world learning. You learn best by doing.</p></div>
                            </li>
                        </ul>
                        <img src={require("../assets/img/AboutDashboard.png")} alt="AboutDashboard"/>
                        </div>
                </div>
                <div className="About2">
                    <div className="About2grid">
                    <h1>Empower your future with cutting-edge skills New, Embrace innovation, master technology, & shape the digital world Your journey to success starts here.</h1>
                    <div>
                        <h3>Join our course with a proven track record of success, where learning isn't just about gaining skills; it's about growing them. Join us, learn with confidence, and watch your skills soar.</h3>
                    <div>
                        <p>Total Students</p>
                        <p>Placed Students</p>
                        <p>Unplaced Students</p>
                        <h1>{statusCount.Total}</h1>
                        <h1>{statusCount.Unplaced}</h1>
                        <h1>{statusCount.Placed}</h1>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </>
    )

}
export default HomePage;