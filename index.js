/**
 * Created by likaituan on 03/03/2017.
 */


module.exports = function(code){
	Object.entries(this.query.ns).forEach( ([key,o]) => {
		key = key + ".";
		o = typeof(o)=="string" ? {path:o} : o;
		var nsRe = key.replace(/\./g, "\\.");
		var re = new RegExp(`require\\s*\\(\\s*[\\"\\']${nsRe}(.+?)[\\"\\']\\s*\\)`, "gi");
		code = code.replace(re, `require("${process.cwd()+o.path}$1${o.type||'.js'}")`);
		console.log({o,nsRe,re,code});
	});
	return code;
};