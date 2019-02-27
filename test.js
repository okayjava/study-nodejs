'use strict'

var printFunc = function(name) {
    console.log(name);
}

printFunc('11111');

console.log(process.version);

const[one,two] = [1,2];
console.log(`one is ${one}, two is ${two}`)

// bash64 encode test
var t = '[{"TxId":"b4234194f8175497b6725585f15a726ebf6d8961fc58130fc39859f143298e60" \
            , "Value":{"docType":"marble","name":"marble1","color":"blue","size":35,"owner":"tom"} \
            , "Timestamp":"2019-02-26 06:40:53.514839118 +0000 UTC", "IsDelete":"false"}\
          ,{"TxId":"ed4f5c5d90d5c464074d7f26c8383e3cd782db0eecd68fd0b223a6e2fd4e6341"\
            , "Value":null\
            , "Timestamp":"2019-02-26 06:41:01.614270236 +0000 UTC", "IsDelete":"true"}]';
var t = '[{"dstrb_id":"" 
, "lat":"123.112" 
, "lng":"23.1111" 
, "full_addr":"full_addrfull_addr" 
, "prv_nm":"prv_nmprv_nmprv_nmprv_nm" 
, "city_nm":"city_nmcity_nmcity_nmcity_nm" 
, "dstr_nm":"dstr_nmdstr_nmdstr_nmdstr_nm" 
, "dstrb_typ_cd":"A1234" 
, "dstrb_typ_nm":"dstrb_typ_nmdstrb_typ_nmdstrb_typ_nmdstrb_typ_nm" 
, "dv_id":"a000001" 
, "corp_id":"KIA" 
, "corp_nm":"KIA Motors" 
, "seq":"11111" 
, "corp_user_id":"jabbv" 
, "corp_user_nm":"corp_user_nmcorp_user_nmcorp_user_nmcorp_user_nm" 
, "prod_nm":"prod_nmprod_nmprod_nmprod_nm" 
, "rgst_dtm":"2019-02-26 06:41:01.614270236 +0000 UTC" 
}]';


var j = JSON.parse(t);
console.log(j);
j.forEach(function(ele) {
    console.log(ele.TxId);
});
// for (var key in j)
// {
//     var v = j[key]['Value'];
//     console.log(v['docType']);
//     //console.log(`key is ${key}, value is ${v.docType}`);
// }
process.exit(0);