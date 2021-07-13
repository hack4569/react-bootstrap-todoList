import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';

const MyList = ({plistDatas,pinline,ptype,pClickEvent})=>{
    const [isActive,setIsActive] = useState('');
    const fnActiveList = (e,i)=>{
        console.log('activeList e',e);
        console.log('activeList i',i);
        if(e.type==='click'){
            setIsActive(e.target.dataset.rbEventKey);
        }
    }
    //변수정의
    const list = plistDatas.map(
        listData => (
            <ListGroup.Item as="li" key={listData.id} eventKey={listData.id} active={isActive===listData.id? true:false} onClick={fnActiveList}>
                <Form.Check 
                    inline={pinline}
                    type={ptype}
                    label={listData.content}
                />
                <CloseButton onClick={()=>pClickEvent(listData.id)} aria-label="닫기"/>   
            </ListGroup.Item>
        )
      );
    return (
        <ListGroup as="ul">
            {list}
        </ListGroup>
    );
}

export default MyList;