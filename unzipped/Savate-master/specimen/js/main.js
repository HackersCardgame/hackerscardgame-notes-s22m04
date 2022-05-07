var cascade = new Vue({
	el: '#cascade',
	data: {
		pangram: "Majesté, giflez ce xénophobe qui rêve de k-way.",
		scale: [64, 48, 32, 18, 12]
	}
});

var Glyphs = new Vue({
	el: '#glyphs',
	data: {
		glyphsList: ["A","À","Á","Â","Ã","Ä","Å","Ā","Ă","Ą","Ǻ","B","C","Ç","Ć","Ĉ","Ċ","Č","D","Ď","E","È","É","Ê","Ë","Ē","Ĕ","Ė","Ę","Ě","F","G","Ĝ","Ğ","Ġ","Ģ","Ǧ","H","Ĥ","I","Ì","Í","Î","Ï","Ĩ","Ī","Ĭ","Į","İ","J","Ĵ","K","Ķ","L","Ĺ","Ļ","Ľ","M","N","Ñ","Ń","Ņ","Ň","O","Ò","Ó","Ô","Õ","Ö","Ō","Ŏ","Ő","P","Q","R","Ŕ","Ŗ","Ř","S","Ś","Ŝ","Ş","Š","Ș","T","Ţ","Ť","U","Ù","Ú","Û","Ü","Ũ","Ū","Ŭ","Ů","Ű","Ų","V","W","Ŵ","Ẁ","Ẃ","Ẅ","X","Y","Ý","Ŷ","Ÿ","Ỳ","Z","Ź","Ż","Ž","Æ","Ǽ","Ð","Ø","Ǿ","Þ","Đ","Ħ","Ĳ","Ŀ","Ł","Ŋ","Œ","Ŧ","Ə","Δ","Ω","ẞ","a","à","á","â","ã","ä","å","ā","ă","ą","ǻ","b","c","ç","ć","ĉ","ċ","č","d","ď","e","è","é","ê","ë","ē","ĕ","ė","ę","ě","f","g","ĝ","ğ","ġ","ģ","ǧ","h","ĥ","i","ì","í","î","ï","ĩ","ī","ĭ","į","j","ĵ","k","ķ","l","ĺ","ļ","ľ","m","n","ñ","ń","ņ","ň","o","ò","ó","ô","õ","ö","ō","ŏ","ő","p","q","r","ŕ","ŗ","ř","s","ś","ŝ","ş","š","ș","t","ţ","ť","u","ù","ú","û","ü","ũ","ū","ŭ","ů","ű","ų","v","w","ŵ","ẁ","ẃ","ẅ","x","y","ý","ÿ","ŷ","ỳ","z","ź","ż","ž","ª","º","ß","æ","ǽ","ð","ø","ǿ","þ","đ","ħ","ı","ĳ","ĸ","ŀ","ł","ŉ","ŋ","œ","ŧ","ſ","ȷ","ə","μ","π","0","1","2","3","4","5","6","7","8","9","_","-","–","—","(",")","[","]","{","}","#","%","‰","'","\"","‘","’","“","”","‚","„","‹","›","«","»","*","†","‡",".",",",":",";","…","!","¡","?","¿","\\","/","|","¦","@","&","§","¶","·","•","+","−","±","÷","×","=","<",">","≤","≥","≈","≠","¬","$","¢","£","¤","¥","€","ƒ","^","~","´","`","˝","ˆ","ˇ","˘","˜","¯","¨","˙","˚","¸","˛","©","®","°","→","←", "\u2734", "\u261B", "\u261A", "\u2716", "\uF8FF", "", "", "", "", "", "", "", ""]
	}
})