import React, {useState} from "react";
import {Button, Icon} from "react-materialize";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

function Articles() {

  const [createdMode, setCreateMode] = useState(false);
  const [data, setData] = useState(null);
  const [dataTemp, setDataTemp] = useState(null);

  return(
    <div className="col s12">
      <h1>Articles</h1>
      {!createdMode ? 
        <div className="row">
          <Button
            onClick={() => setCreateMode(true)}          
            className="blue right"
            floating
            icon={<Icon>add</Icon>}
            node="button"
            waves="light"
          />
          <div className="col s12">
            { ReactHtmlParser(data) }
          </div>
        </div>
        :
        <div className="row">
          <div className="col s12">
            <Button className="red right" onClick={() => setCreateMode(false)}>Annuler</Button>
          </div>
          <br />
          <br/>
          <div className="col s12">
            <CKEditor
              editor={ ClassicEditor }
              data={data}
              config={{ckfinder: {
                // Upload the images to the server using the CKFinder QuickUpload command.
                uploadUrl: 'https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json'
              }}}
              onInit={ editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log( 'Editor is ready to use!', editor );
              } }
              onChange={ ( event, editor ) => {
                  const temp = editor.getData();
                  console.log("dataTemp",temp);
                  setDataTemp(temp);
              } }
              onBlur={ ( event, editor ) => {
                  console.log( 'Blur.', editor );
              } }
              onFocus={ ( event, editor ) => {
                  console.log( 'Focus.', editor );
              } }
            />
            <Button className="blue right" onClick={() => { 
              console.log("clic here", dataTemp);
              setData(dataTemp);
              setCreateMode(false);
            }}>Valider</Button>
          </div>
        </div>
      }
    </div>
  )
}

export default Articles;