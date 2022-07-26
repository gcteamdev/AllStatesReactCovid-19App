import React,{ useState, useEffect } from "react";


const Statewise = () => {

    const[data, setdata] = useState([]);

    const getCovidData = async ()=>{
     const res =  await fetch("https://api.covidtracking.com/v1/states/current.json");
     const actualData = await res.json();
     console.log(actualData);
     setdata(actualData);
    }

    useEffect (() =>{
       // getCovidData();
    }, []);


    return (
        <>
            
            <div className="container-fluid bg-light">
                

                     <div className="text-center mb-2"> 
                     <button className="bg-info btn btn-secondary col-md-3  col-sm-12 btn-lg text-white all-state-btn mt-5"type="button" onClick={getCovidData}>Click to get All States Info</button>
              
                     </div>
                
                
                <div className="table-responsive">
                    <table className="table table-hover col-10 text-center mx-auto">
                        <thead className="thread-dark bg-dark text-light">
                            <tr>
                                <th className="state"> State</th>
                                <th className="row-hover"> Confirmed</th>
                                <th className="row-hover"> Hospitalized</th>
                                <th className="row-hover"> Death</th>
                                <th className="row-hover"> LastUpdate</th>
                            </tr>
                        </thead>


                        <tbody>

                            {
                              data.map((curElem, ind) => {
                                return(
                                    <tr key={ind}>
                                    <th className="state"> {curElem.state } </th>
                                    <td className="row-hover"> {curElem.positive }</td>
                                    <td className="row-hover"> {curElem.hospitalized }</td>
                                    <td className="row-hover"> {curElem.death }</td>
                                    <td className="row-hover"> {curElem.lastUpdateEt }</td>
                                </tr>
                                )
                              })  
                            }
                            

                        </tbody>
                    </table>
                </div>

            </div>



           
        </>
    )
}

export default Statewise