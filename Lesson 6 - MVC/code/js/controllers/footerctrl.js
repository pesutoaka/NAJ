function FooterCtrl(pageView,store){
    
    store.on("activeupdate",updateActive);
    
    function updateActive(){
        pageView.setActiveCount(store.getActiveCount());
    }
    
    store.on("dataupdate", updateLength);
    
    function updateLength(){
        pageView.setLength(store.getLength());
    }
}