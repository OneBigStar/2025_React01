import { createContext } from "react";

// Context 생성
// 컴포넌트 계틍 구조 전체에서 데이터를 전달할때, 여러단계의 props 전달을 피하기 위한 방법
// 단점) - Context값이 변경되면, 모든 하위 컴포넌트가 재 랜더링이 되어야한다.
//      - 복잡한 상태 관리하는데 부적절. 디버깅이 어렵다.    
export const ThemeContext= createContext(null);