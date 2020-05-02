function ajax(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
        var response = JSON.parse(this.responseText);
        var jproducts = response.products;
        var output='<tr><th>Serial Number</th><th>Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></tr>';

        for(var i=0;i<jproducts.length;i++)
        {
        output +='<tr><td>'+'&emsp;&emsp;'+jproducts[i].SerialNo+'</td>'+'<td>'+'&emsp;&emsp;&emsp;&emsp;'+jproducts[i].Name+'</td>'+'<td>'+'&emsp;'+jproducts[i].Quantity+'</td>'+'<td>'+'&emsp;&emsp;'+jproducts[i].Unit+'</td>'+'<td>'+'&emsp;&emsp;&emsp;&emsp;&emsp;'+jproducts[i].Department+'</td>'+'<td>'+'&emsp;&emsp;'+jproducts[i].Notes+'</td></tr>';
        }
        
        document.getElementById("htable").innerHTML=output;
        document.getElementById("htable").style.tableLayout = "initial";
       
        
    }
};
xhttp.open("GET","ajax.json",true);
xhttp.send();
}