export const downloadFile = (file)=>{
    fetch(file).then((res)=>{
      res.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'license.pdf';
        alink.click();
        })
    })
  }
