UAM.InputView = function(element){
    UAM.EventEmitter.call(this);
    
    this.element = element;
    this.input = this.element.querySelector("input[type=text]");
    this.submit = this.element.querySelector("input[type=submit]");
     function onSubmit(){
        _self.emit("inputSubmit",_self.input.value);
    }
    this.submit.addEventListener("click", onSubmit);
    var _self = this;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);

