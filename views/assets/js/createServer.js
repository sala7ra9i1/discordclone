$('#close').click(function(){
    let b = 5;
    setInterval(()=>{
        if(b<=0) return;
        b--;
        document.querySelector('#createServer').style.backgroundColor = 'rgba(0,0,0,'+b/10+')'
    },22)
    setTimeout(()=>{
        document.querySelector('#createServer').remove();
    },135)
    document.querySelector('#createServer .CForm').classList.add('CC');
})
$('#tab1').click(function(){
    
    $('#createServer .CForm').addClass('f1');
    $('#createServer .CForm .h').addClass('hide');
    $('#createServer .CForm .side1').addClass('show');
    
    
    
   
})
$('#return1').click(function(){
    $('#createServer .CForm').addClass('f1');
    $('#createServer .CForm .h').removeClass('hide');
    //$('#createServer .CForm .h').addClass('show');
    $('#createServer .CForm.f1').removeClass('f1');
    
    $('#createServer .CForm .side1').removeClass('show');

    $('#createServer .CForm .side1').addClass('hide');

})