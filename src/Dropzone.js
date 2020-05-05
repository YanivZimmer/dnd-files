import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import './Dropzone.css'
function Dropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        alert(file.name)
        const binaryStr = reader.result
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })
    
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} className="DropZone">
      <p>
        Drop Here
      </p>
      <input {...getInputProps()} />
    </div>
  )
}


export default Dropzone