
export default function FormatTelephone(value) {
    var v = value.replace(/\D/g,"");
    v = v.replace(/^([1-9]{2})(\d)/g,"($1) $2"); 
    v = v.replace(/(\d)(\d{4})$/,"$1-$2");  
    return v;
}