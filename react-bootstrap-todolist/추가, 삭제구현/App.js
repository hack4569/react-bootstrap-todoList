import React, { useState } from 'react';

import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';

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

      setTodoList(
        todoList.concat(
          {id:addedId, content : searchVal}
        )
      )
      e.target.value = '';
    }

    const deleteListData = (id)=>{
      setTodoList(
        todoList.filter(item=>item.id !== id)
      );
    }
    const printSearchVal = e => {
      setSearchVal(e.target.value);
    }
    const list = todoList.map(
      listData => (
        <ListGroup.Item key={listData.id}>
            <Form.Check 
              inline
              type={'checkbox'}
              label={listData.content}
            />
            <CloseButton onClick={()=>deleteListData(listData.id)} aria-label="닫기"/>  
          </ListGroup.Item>
      )
    );
    return(
      <>
        {/*검색*/}
          <InputGroup className="mb-3">
            <FormControl
              type="text"
              placeholder="할 일을 입력해주세요"
              onChange={printSearchVal}
              onKeyPress={addListData}
            />
            <InputGroup.Append>
              <Button onClick={addListData} variant="outline-secondary">추가</Button>
            </InputGroup.Append>
          </InputGroup>
        {/*목록*/}
          <ListGroup>
            {list}
          </ListGroup>
      </>
    );
}

export default App;