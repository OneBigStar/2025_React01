import './inputExam.css'

export default function InputExam(){
    return (
        <div className="center">
            <input onFocus={()=>console.log("onFocus")}
                   onBlur={()=>console.log("onBlur")}
            /><br />
        </div>


    );
}