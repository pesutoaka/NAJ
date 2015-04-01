UAM.FooterView = function(element){
    UAM.EventEmitter.call(this);
    this.elementCount = element.querySelector(".length");
    this.activeCount = element.querySelector(".active-items");
    
    var _self = this;
}
UAM.utils.inherits(UAM.EventEmitter, UAM.FooterView);

UAM.FooterView.prototype.setLength = function(value){
    this.elementCount.textContent = value;
}

UAM.FooterView.prototype.setActiveCount = function(value){
    this.activeCount.textContent = value;
}