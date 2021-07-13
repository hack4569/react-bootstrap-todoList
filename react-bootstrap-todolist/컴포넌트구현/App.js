import React, { useState } from 'react';


import InputGroup from 'react-bootstrap/InputGroup';
import MyList from './MyList';
import MySearch from './MySearch';
const App = () =>{
    const todoListVar = 
      [
        {id:1,content:"영화보기"},
        {id:2,content:"밥먹기"}
      ];
    const [searchVal,setSearchVal] = useState('');
    const [todoList,setTodoList] = useState(todoListVar);
    const addedId = ()=>{
      if(todoList.length===0){
        return 0;
      }
      return todoList[todoList.length-1].id+1;
    } 
    //function
    const addListData = (e)=>{
      console.log(e);
      if(e.charCode===13 || e.type==="click"){
        setTodoList(
          todoList.concat(
            {id:addedId, content : searchVal}
          )
        )
        setSearchVal('');
      }
    }
    const deleteListData = (id)=>{
      setTodoList(
        todoList.filter(item=>item.id !== id)
      );
    }
    const printSearchVal = e => {
        setSearchVal(e.target.value);
    }
    return(
      <>
        {/*검색*/}
          <InputGroup className="mb-3">
            <MySearch ptype="text" pplaceholder="할 일을 입력해주세요" printSearch={printSearchVal} addList={addListData} pvalue={searchVal}>추가</MySearch>
          </InputGroup>
        {/*목록*/}
          <MyList plistDatas={todoList} pinline="true" ptype="checkbox" pClickEvent={deleteListData}></MyList>
      </>
    );
}

export default App;