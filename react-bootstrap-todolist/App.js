import React, { useState } from 'react';

import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import {BsPencilSquare} from 'react-icons/bs';

const App = () => (
  <>
    {/*검색*/}
      <Form>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="할 일을 입력해주세요"
            aria-label="할 일을 입력해주세요"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">추가</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    {/*목록*/}
    <ListGroup>
      <ListGroup.Item>
        <Form.Check 
          inline
          type={'checkbox'}
          id={'default-checkbox'}
          label={'영화보기'}
        />
        <BsPencilSquare/>
        <CloseButton aria-label="닫기"/>
      </ListGroup.Item>
    </ListGroup>
      
  </>
);

export default App;