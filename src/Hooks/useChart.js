import { useEffect, useState } from "react"

const useChart = ()=>{
    const [chartdata, setChartdata]= useState([])

    useEffect(() =>{
        fetch('chartdata.json')
        .then(res => res.json())
        .then(data => setChartdata(data))
    },[]);

    return [chartdata, setChartdata];

}

export default useChart;