UAM.ListView = function(element){
    UAM.EventEmitter.call(this);
    this.list=[];
    this.template = element.querySelector(".template > li");
    this.ul = element.querySelector("ul");
    
    this.Add = function(value){
        newItem(value);
        _self.emit("listChange",getLength(),getActive(),getInactive());
    }
    this.Update = function(index,value){
        updateItem(index,value);
        _self.emit("listChange",getLength(),getActive(),getInactive());
        _self.emit("listUpdate",getLength(),getActive(),getInactive());
    }
    
    var _self = this;
    function newItem(value){
        var item = _self.template.cloneNode(true);
        item.querySelector("span").textContent = getLength();
        item.querySelector("b").textContent = value;
        item.querySelector("a").addEventListener("click",function(elem){
            _self.emit("itemClick",parseInt(elem.target.parentElement.querySelector("span").innerHTML));
            _self.emit("listUpdate",getLength(),getActive(),getInactive())
        })
        _self.list.push(item);
        _self.ul.appendChild(item);
    }
    function updateItem(index,value){
        _self.list[index].querySelector("b").textContent = value;
        _self.ul.children[index] = _self.list[index];
    }
    function getInactive(){
        return _self.ul.querySelectorAll(".inactive").length;
    }
    function getActive(){
        return getLength() - getInactive();
    }
    function getLength(){
        return _self.list.length;
    }
}
UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);

UAM.ListView.prototype.updateActive = function(index,active){
    this.list[index].className = active?"":"inactive";
    this.ul.children[index]=this.list[index];
}

UAM.ListView.prototype.isActive = function(index){
    var elem = this.list[index];
    return elem.className.indexOf("inactive")<0?true:false;
}