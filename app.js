document.getElementById('myFile').addEventListener('change', function() {
    document.getElementById('file-name').textContent = this.files[0].name;
});