import List01 from "../step03/List01";
import List02 from "../step03/List02";
import Profile from "../step03/Profile";
import CommentList from "../step04/CommentList";
import TextList1 from "../step07/TextList1";
import TextList2 from "../step07/TextList2";
import Event01 from "../step08/Event01";
import Event02 from "../step08/Event02";
import Event03 from "../step08/Event03";
import Event04 from "../step08/Event04";
import InputExam from "../step09/InputExam";
import CountEx2 from "../step10/CountEx2";
import CountEx3 from "../step10/CountEx3";
import CountEx4 from "../step10/CountEx4";
import CountEx5 from "../step10/CountEx5";
import ProfileEx from "../step11/ProfileEx";
import TempEx from "../step12/TempEx";
import FormEx from "../step13/FormEx";
import EffectTest01 from "../step14/EffectTest01";
import EffectTest02 from "../step14/EffectTest02";
import EffectTest03 from "../step14/EffectTest03";
import EffectTest04 from "../step14/EffectTest04";
import Counter from "./Counter";

function Main(props){
    return (
        // 태그의 첫글자가 소문자이면 html, 대문자이면 컴포넌트트
        <main>
            <h1>Welcome React</h1>
            <Counter />
            <List01 />
            <List02 />
            <Profile />
            <CommentList />
            <TextList1 />
            <TextList2 />
            <Event01 /> 
            <Event02 /> 
            <Event03 /> 
            <Event04 /> 
            <InputExam />
            <CountEx2 />
            <CountEx3 />
            <CountEx4 />
            <CountEx5 />
            <ProfileEx />
            <TempEx />
            <FormEx />
            <EffectTest01 />
            <EffectTest02 />
            <EffectTest03 />
            <EffectTest04 />
        </main>
    );
};

export default Main;