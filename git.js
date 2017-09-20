module.exports = function (RED) {
    function gitNode(config) {
        RED.nodes.createNode(this, config);
        this.target = config.target;
        var node = this;
        this.on('input', function (msg) {
            var s = RED.view.selection().nodes;

            msg[node.target] = s;
            node.send(msg);
        });
    }
    RED.nodes.registerType('git-mng', gitNode);
};