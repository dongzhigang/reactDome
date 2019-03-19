//保留两位小数
export function returnFloat(val){
	var value=Math.round(parseFloat(val)*100)/100;
	var float=value.toString().split(".");
	if(float.length===1){
		if (value.toString() > 0) {
			value=value.toString()+".00";
			return value;
		}
		return value;
	}else{
		if(float[1].length<2){
			value=value.toString()+"0";
		}
		return value;
	}
}