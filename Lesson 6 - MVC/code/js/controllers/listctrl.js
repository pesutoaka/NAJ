function ListCtrl(pageView,store){
    pageView.on("itemClick",changeState);
    var inactive= "inactive";
    function changeState(index){
        if(pageView.isActive(index)){
            pageView.updateActive(index,false);
            store.updateActive(index, false);
        }
        else{
            pageView.updateActive(index,true);
            store.updateActive(index, true);
        }
    }
    store.on("dataadd", addItem);
    function addItem(collection, value,index){
        pageView.Add(value.value);
    }
    
}