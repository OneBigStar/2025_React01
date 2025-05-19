import { useState } from "react";
import TempInput from "./TempInput";
import TempRadio from "./TempRadio";

export default function TempEx(){
    const [temperature, setTemperature]= useState(""); // 초기값 false
    const [unit, setUnit]= useState("Celsius");
    const convertedTemp= (unit === "Celsius")
        ? (temperature * 9 / 5 + 32).toFixed(1)
        : ((temperature -32)* 5 / 9).toFixed(1)
    return(
        <div>
            <h2>화씨 / 섭씨 변환기</h2>
            <p>Converted : {temperature ? convertedTemp : "--"}
                {unit === "Fahrenheit" ? "C" : "F"}
            </p>
            <TempInput 
                value={temperature}
                unit={unit}
                onChange={setTemperature}
            />
            <TempRadio 
                unit={unit}
                onUnitChange={setUnit}
            />
        </div>
    );
}