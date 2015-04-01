function InputCtrl(pageView, store){
    pageView.on("inputSubmit",addData);
    function addData(data){
        store.simpleAdd(data);
    }
}