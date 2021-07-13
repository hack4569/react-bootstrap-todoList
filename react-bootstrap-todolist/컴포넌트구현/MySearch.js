import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
const MySearch = ({ptype,pplaceholder,printSearch,addList,children,pvalue})=>{
    return (
        <>
            <FormControl
              type={ptype}
              placeholder={pplaceholder}
              onChange={printSearch}
              onKeyPress={addList}
              value={pvalue}
            />
            <InputGroup.Append>
              <Button onClick={addList}>{children}</Button>
            </InputGroup.Append>
        </>
    );
}

export default MySearch;