
window.onload = function () {
    var children_count = 0;
  
    var chart = new OrgChart(document.getElementById("tree"), {
        nodeMouseClick: OrgChart.action.edit,
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img",
            field_number_children: "numberOfChildren"
        }
    });



    chart.editUI.on('field', function(sender, args){
            if (args.name == 'numberOfChildren'){
               args.field.querySelector('input').value = children_count;              
            }
	});

    
    chart.editUI.on('show', function(sender, nodeId){
    	var children = {
      	    count: 0
        };            
      
    	childrenCount(children, nodeId);
        children_count = children.count
    });
    
    function childrenCount(children,  nodeId){
    		var node = chart.getBGNode(nodeId);
      	    for(var i = 0; i < node.childrenIds.length; i++){
                children.count++;
                childrenCount(children, node.childrenIds[i]);
  	    }
    }    
    
    chart.load([
            { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg"},
            { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
            { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
            { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
            { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
            { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
            { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
        ]);
};