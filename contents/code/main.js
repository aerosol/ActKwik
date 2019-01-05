registerShortcut("ActKwik", "ActKwik: Launch or activate terminal", "Meta+Esc", function() {

  var find = function(resource) {
    var clients = workspace.clientList();
    for (var i = 0; i < clients.length; i++) {
        var client = clients[i];

        if (client.resourceName == resource) {
            if (client.activities.length == 0 || client.activities.indexOf(workspace.currentActivity) > -1) {
                return client;
            }
        }
    }
    return false;
}

var terminal = readConfig('terminal', 'kitty');
var found = find(terminal);
if (found) {
    workspace.activeClient = found;
} else {
    callDBus("org.kde.klauncher5", "/KLauncher", "", "exec_blind", "kshell5", new Array(terminal)); 
}});

