import React, { Component } from 'react';

class ImageUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
      error: null,
    };
  }

  handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to upload image');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          imageFile: file,
          imageUrl: data.imageUrl,
          error: null,
        });
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  render() {
    return (
      <div>
        <input type="file" onChange={this.handleFileInputChange} />
        {this.state.imageUrl && (
          <img src={this.state.imageUrl} alt="Uploaded" />
        )}
        {this.state.error && <div>{this.state.error.message}</div>}
      </div>
    );
  }
}

export default ImageUploader;

