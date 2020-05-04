import React, { Component, Fragment } from "react";

import ReactDropzone from "react-dropzone";

class DropzoneImgPrev extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
    };
  }

  onPreviewDrop = (files) => {
    this.setState({
      files: this.state.files.concat(files),
     });
  }

  render() {
    const previewStyle = {
      display: 'inline',
      width: 10,
      height: 10,
    };

    return (
      <div className="dropzone-img-prev">
        <ReactDropzone
          accept="image/*"
          onDrop={this.onPreviewDrop}
        >
          Drop an image, get a preview!
        </ReactDropzone>
        {this.state.files.length > 0 &&
          <Fragment>
            <h3>Previews</h3>
            {this.state.files.map((file) => (
              <img
                alt="Preview"
                key={file.preview}
                src={file.preview}
                style={previewStyle}
              />
            ))}
          </Fragment>
        }
      </div>
    );
  }
}

export default DropzoneImgPrev