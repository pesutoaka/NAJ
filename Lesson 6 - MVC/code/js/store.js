UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.add = function (data) {
    this.data.push(data);
    var index = this.data.indexOf(data);
    this.emit("dataadd",this.data,data,index);
    this.emit("dataupdate",this.data,data,index);
    this.emit("activeupdate",this.data,index,data.active)
};

UAM.Store.prototype.simpleAdd = function(value){
    this.add({"value":value,"active":true});
};

UAM.Store.prototype.update = function (id, data) {
    this.data[id]= data;
    this.emit("dataupdate",this.data,data,id);
};

UAM.Store.prototype.updateValue = function(id, value){
    this.data[id].value = value;
    this.emit("dataupdate",this.data,value,id);
}

UAM.Store.prototype.updateActive = function(id, active){
    this.data[id].active = active;
    this.emit("dataupdate",this.data,id,active);
    this.emit("activeupdate",this.data,id,active);
}

UAM.Store.prototype.getLength = function(){
    return this.data.length;
}

UAM.Store.prototype.getActiveCount = function(){
    var counter=0;
    this.data.forEach(function(element){
        counter+= element.active?1:0;
    });
    return counter;
}