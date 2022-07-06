function(properties, context) {
    
	var idStrings = properties.glasselementid.replace(/\s/g, '')
    var idArray = idStrings.toString().split(',');
    
	var colorOverwrite
    if (properties.bgoverwrite){
        colorOverwrite = "!important"
    } else {
        colorOverwrite = ""
    }

    var style = document.createElement('style');
    
    style.type = 'text/css';
    
    
    var appendedGlassName = properties.glassname.replace(/\s/g, '')
    
    style.innerHTML = `.`+appendedGlassName+` { 
                            background: `+properties.background+` `+colorOverwrite+`;
                            border-radius: `+properties.borderradius+properties.borderunity+` !important;
                            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                            backdrop-filter: blur(`+properties.blur+properties.blurunity+`);
                            -webkit-backdrop-filter: blur(`+properties.blur+`);
                            border: 1px solid rgba(255, 255, 255, `+properties.border+`); 
						}`;
    
    document.getElementsByTagName('head')[0].appendChild(style);
    
    idArray.forEach((element)=> {
        document.getElementById(element.replace(/\s/g, '')).className += ' '+appendedGlassName+'';
    })

}