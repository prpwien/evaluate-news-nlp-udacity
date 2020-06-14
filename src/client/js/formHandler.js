function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    Client.checkForUrl(formText)

    /*
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
    */

   fetch('http://localhost:8081/article', {
    method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            text: url 
        })
    })
    .then(res => res.json())
    .then(function(res){
        document.getElementById('Polarity').innerHTML = res.polarity;
        document.getElementById('PolarityConfidence').innerHTML = res.polarity_confidence;
        document.getElementById('Subjectivity').innerHTML = res.subjectivity;
        document.getElementById('SubjectivityConfidence').innerHTML = res.subjectivity_confidence;
    })
}

export { handleSubmit }