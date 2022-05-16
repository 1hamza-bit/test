import { TextField, Toolbar, Typography, Button, Alert, Divider } from '@mui/material'
import React,{useState} from 'react'
import ResponsiveDrawer from './Sidebar';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { stateToHTML } from "draft-js-export-html";
import axios from 'axios';


function Magazines() {

  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const [blog, setblog] = useState(null);
  const [title, settitle] = useState(null);
  const [file, setfile] = useState(null);
  const [uploadProgress2, setuploadProgress2] = useState(null);

    const hello = () => {
        const contentState = editorState.getCurrentContent();
        setblog(stateToHTML(contentState));
    };

    const submitHandler = async (e) => {
      e.preventDefault();
      const fd = new FormData();
      fd.append('title', title)
      fd.append('text', blog)
      fd.append('file', file, file.name)
  
    const ress = await axios.post('https://videos-backends.herokuapp.com/magazines', fd, {
      onUploadProgress: progressEvent => {
        setuploadProgress2('Uploading File ' + Math.round( progressEvent.loaded / progressEvent.total * 100) + '%')
      }
    })
        setuploadProgress2(ress.data.message);
    }


  return (
    <div>
        <ResponsiveDrawer>
            <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 9999}}>
                { uploadProgress2 && <Alert severity="info">{uploadProgress2}</Alert>}
            </div>
            <Typography variant="h3" component="div" gutterBottom>
                Add Magazines
            </Typography>
            <Toolbar/>
            <form onSubmit={submitHandler}>
            <TextField required onChange={(e) => settitle(e.target.value)} id="filled-basic" label="Title" variant="filled" /> <br/> <br/> 
            <Editor 
              toolbar={{options: ['inline', 'blockType', 'list', 'textAlign',],}}
              editorState={editorState}
              onChange={hello}
              onEditorStateChange={setEditorState}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
            />
            <br /><br />
            <input required type="file" onChange={(e) => setfile(e.target.files[0])}/> <br/> <br/> 
            <Divider/>
            <br/>
            <Button fullWidth variant="contained" type="submit">Submit</Button>
            </form>
        </ResponsiveDrawer>
    </div>
  )
}

export default Magazines